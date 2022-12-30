import Piece from "./piece";
import {Position} from "../type";
import {Basic} from "./basic";

export default class Knight extends Basic implements Piece {
    can_jump = true

    constructor(color: "white" | "black") {
        super()
        this.color = color
        this.img = color === "white" ? 'knight_white' : 'knight_black'
    }

    eat({x, y}: Position): boolean {
        return false;
    }

    move({x, y}: Position): Position[] {
        return [];
    }

}