import {Board, Position, Square} from './type'
import {WebSocket} from "ws";
import Pawn from "./piece/pawn";
import Bishop from "./piece/bishop";
import Knight from "./piece/knight";
import Queen from "./piece/queen";
import King from "./piece/king";
import Rook from "./piece/rook";
import Empty from "./piece/empty";
import Piece from "./piece/piece";

const BASE_BOARD =
  [
    [new Rook('black'),new Knight('black'),new Bishop('black'),new King('black'),new Queen('black'),new Bishop('black'),new Knight('black'),new Rook('black')],
    [new Pawn('black'),new Pawn('black'),new Pawn('black'),new Pawn('black'),new Pawn('black'),new Pawn('black'),new Pawn('black'),new Pawn('black')],
    [new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty()],
    [new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty()],
    [new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty()],
    [new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty()],
    [new Pawn('white'),new Pawn('white'),new Pawn('white'),new Pawn('white'),new Pawn('white'),new Pawn('white'),new Pawn('white'),new Pawn('white')],
    [new Rook('white'),new Knight('white'),new Bishop('white'),new King('white'),new Queen('white'),new Bishop('white'),new Knight('white'),new Rook('white')],
  ]

export class Party {
  board: Board
  id: string
  white: WebSocket | undefined
  black: WebSocket | undefined

  constructor(color: "White" | "Black", ws: WebSocket, id: string) {
    color === "White" ? this.setWhite(ws) : this.setBlack(ws)
    this.board = BASE_BOARD
    this.id = id
    this.setBackground()
    this.sendBoard()
  }

  sendBoard() {
    this.sendToPlayers({
      id: this.id,
      board: this.board
    })
  }

  setWhite(ws: WebSocket) {
    this.white = ws
  }

  setBlack(ws: WebSocket) {
    this.black = ws
  }

  join(ws: WebSocket) {
    this.white ? this.setBlack(ws) : this.setWhite(ws)
  }

  sendToPlayers(data: {}) {
      this.black?.send(JSON.stringify(data))
      this.white?.send(JSON.stringify(data))
  }

  deselectAll() {
    this.board.forEach((line: Square) => {
      line.forEach((piece) => {
        piece.setSelected(false)
      })
    })
  }

  selected({x, y}: Position) {
    let piece = this.board[x][y]
    if (piece instanceof Empty)
      return
    this.deselectAll()
    piece.setSelected(true)
    this.setBackground()
    const can_move_on = piece.move({x,y})
    can_move_on.forEach(({x, y}) => {
      const chess_case = this.board[x][y]
      chess_case.setSelected(true)
    })
    this.sendBoard()
  }

  private setBackground() {
    this.board.forEach((line: Square, x) => {
      line.forEach((piece, y) => {
        piece.background = (y+x) % 2 ? 'black' : 'white'
      })
    })
  }
}