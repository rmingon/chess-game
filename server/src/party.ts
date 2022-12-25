import {Board} from './type'
import {WebSocket} from "ws";
import Pawn from "./piece/pawn";

const BASE_BOARD =
  [
    [[],[],[],[],[],[],[],[]],
    [[new Pawn('black')],[new Pawn('black')],[new Pawn('black')],[new Pawn('black')],[new Pawn('black')],[new Pawn('black')],[new Pawn('black')],[new Pawn('black')]],
    [[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[],[]],
    [[new Pawn('white')],[new Pawn('white')],[new Pawn('white')],[new Pawn('white')],[new Pawn('white')],[new Pawn('white')],[new Pawn('white')],[new Pawn('white')]],
    [[],[],[],[],[],[],[],[]],
  ]

export class Party {
  board: Board
  white: WebSocket | undefined
  black: WebSocket | undefined

  constructor(color: "White" | "Black", ws: WebSocket, id: string) {
    color === "White" ? this.setWhite(ws) : this.setBlack(ws)
    this.board = BASE_BOARD
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

}