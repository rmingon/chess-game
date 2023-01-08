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

  canMoveOn(position: Position): Position[] {
    const color = this.color
    let can_move = []
    if (color === "black")
      can_move.push(this.bottom(position))
      if (!this.as_already_move)
        can_move.push(this.bottom(this.bottom(position)))
    else
      can_move.push(this.top(position))
      if (!this.as_already_move)
        can_move.push(this.top(this.top(position)))
    return can_move
  }

  move({x, y}: Position): Position[] {
    return []
  }
}