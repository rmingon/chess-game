import Piece from "./piece";
import {Basic} from "./basic";
import {Position} from "../type";

export default class Pawn extends Basic implements Piece {

  constructor(color: "white" | "black") {
    super()
    this.color = color
    this.img = color === "white" ? 'pawn_white' : 'pawn_black'
  }

  eat({x, y}: Position): boolean {
    return false;
  }

  move(position: Position): Position[] {
    const color = this.color
    if (color === "black")
      return [this.bottom(position)];
    else
      return [this.top(position)];
  }
}