import {Position} from "../type";
import {Basic} from "./basic";
import Piece from "./piece";

export default class Queen extends Basic implements Piece {

    constructor(color: "white" | "black") {
        super()
        this.color = color
        this.img = color === "white" ? 'queen_white' : 'queen_black'
    }

    eat({x, y}: Position): boolean {
        return false;
    }

    move({x, y}: Position): Position[] {
        return [];
    }
}