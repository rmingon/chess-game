import {Board} from './type'
import {WebSocket} from "ws";
import Pawn from "./piece/pawn";
import Bishop from "./piece/bishop";
import Knight from "./piece/knight";
import Queen from "./piece/queen";
import King from "./piece/king";
import Rook from "./piece/rook";
import Empty from "./piece/empty";

const BASE_BOARD =
  [
    [new Rook('black'),new Knight('black'),new Bishop('black'),new Queen('black'),new King('black'),new Bishop('black'),new Knight('black'),new Rook('black')],
    [new Pawn('black'),new Pawn('black'),new Pawn('black'),new Pawn('black'),new Pawn('black'),new Pawn('black'),new Pawn('black'),new Pawn('black')],
    [new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty()],
    [new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty()],
    [new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty()],
    [new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty(),new Empty()],
    [new Pawn('white'),new Pawn('white'),new Pawn('white'),new Pawn('white'),new Pawn('white'),new Pawn('white'),new Pawn('white'),new Pawn('white')],
    [new Rook('white'),new Knight('white'),new Bishop('white'),new King('black'),new Queen('white'),new Bishop('white'),new Knight('white'),new Rook('white')],
  ]

export class Party {
  board: Board
  white: WebSocket | undefined
  black: WebSocket | undefined

  constructor(color: "White" | "Black", ws: WebSocket, id: string) {
    color === "White" ? this.setWhite(ws) : this.setBlack(ws)
    this.board = BASE_BOARD
    this.sendToPlayers(this.board)
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

}