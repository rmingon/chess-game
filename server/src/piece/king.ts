import Piece from "./piece";
import {Position} from "../type";
import {Basic} from "./basic";

export default class King extends Basic implements Piece {

  constructor(color: "white" | "black") {
    super()
    this.color = color
    this.img = color === "white" ? 'king_white' : 'king_black'
  }

  eat({x, y}: Position): boolean {
    return false;
  }

  move({x, y}: Position): Position[] {
    return []
  }

  canMoveOn({x, y}: Position): Position[] {
    return [
      this.top({x,y}),
      this.left({x,y}),
      this.right({x,y}),
      this.bottom({x,y}),
      this.topRight({x,y}),
      this.topLeft({x,y}),
      this.bottomRight({x,y}),
      this.bottomLeft({x,y})
    ];
  }

}