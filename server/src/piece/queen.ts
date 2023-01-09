import {Position} from "../type";
import {Basic} from "./basic";
import Piece from "./piece";

export default class Queen extends Basic implements Piece {
    point = 9
    constructor(color: "white" | "black") {
        super()
        this.color = color
        this.img = color === "white" ? 'queen_white' : 'queen_black'
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