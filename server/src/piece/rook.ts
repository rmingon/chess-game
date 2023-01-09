import {Basic} from "./basic";
import Piece from "./piece";
import {Position} from "../type";

export default class Rook extends Basic implements Piece {
  point = 5
  constructor(color: "white" | "black") {
    super()
    this.color = color
    this.img = color === "white" ? 'rook_white' : 'rook_black'
  }

  eat({x, y}: Position): boolean {
    return false;
  }

  canMoveOn({x, y}: Position): Position[] {
    return [];
  }

  move({x, y}: Position): Position[] {
    return []
  }
}