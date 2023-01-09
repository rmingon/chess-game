import {Board, Position, Square} from './type'
import {WebSocket} from "ws";
import Pawn from "./piece/pawn";
import Bishop from "./piece/bishop";
import Knight from "./piece/knight";
import Queen from "./piece/queen";
import King from "./piece/king";
import Rook from "./piece/rook";
import Empty from "./piece/empty";
import { Piece } from "./type";

const BASE_BOARD : Board =
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
  last_selected : Position[] = []
  eaten: Piece[] = []
  last_piece_selected_position : Position = {x: 0, y: 0}

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
      eaten: this.eaten,
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

  // TODO refacto this
  selected({x, y}: Position) {
    if (this.isInLastSelected({x, y}))
      this.movePiece(this.last_piece_selected_position, {x, y})
    let piece = this.board[x][y]
    this.last_piece_selected_position = {x, y}
    if (piece instanceof Empty)
      return
    this.last_selected = []
    this.deselectAll()
    piece.setSelected(true)
    this.setBackground()
    const can_move_on = piece.canMoveOn({x,y})
    can_move_on.forEach(({x, y}: Position) => {
      if (!this.positionIsInBoard({x, y}))
        return
      const chess_case = this.board[x][y]
      if (chess_case instanceof Empty || chess_case.color !== piece.color) { // IF CASE ARE EMPTY OR ANOTHER COLOR OF SELECTED PIECE
        chess_case.setSelected(true)
        this.last_selected.push({x,y})
      }
    })
    this.sendBoard()
  }

  movePiece(from: Position, to: Position) {
    if (!(this.board[to.x][to.y] instanceof Empty))
      this.eaten.push(this.board[to.x][to.y])
    this.board[to.x][to.y] = this.board[from.x][from.y]
    this.board[to.x][to.y].as_already_move = true
    this.board[from.x][from.y] = new Empty()
  }

  isInLastSelected({x, y}: Position) : boolean {
    for (const pos of this.last_selected) {
      if (pos.x === x && pos.y === y)
        return true
    }
    return false
  }

  private positionIsInBoard({x, y}: Position) : boolean {
    if(x < 0 || x > 7 || y < 0 || y > 7) // OUTSIDE THE BOARD SO NO INSTANCE OF PIECE
      return false
    return true
  }

  private setBackground() {
    this.board.forEach((line: Square, x) => {
      line.forEach((piece, y) => {
        piece.background = (y+x) % 2 ? 'black' : 'white'
      })
    })
  }
}