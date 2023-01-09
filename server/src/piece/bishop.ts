import Piece from "./piece";
import {Position} from "../type";
import {Basic} from "./basic";

export default class Bishop extends Basic implements Piece {
  point = 3
  constructor(color: "white" | "black") {
    super()
    this.color = color
    this.img = color === "white" ? 'bishop_white' : 'bishop_black'
  };

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