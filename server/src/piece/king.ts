import Piece from "./piece";
import {Positon} from "../type";
import {Basic} from "./basic";

export default class King extends Basic implements Piece {

    constructor(color: "white" | "black") {
        super()
        this.color = color
        this.img = color === "white" ? 'king_white' : 'king_black'
    }

    eat({x, y}: Positon): boolean {
        return false;
    }

    move({x, y}: Positon): boolean {
        return false;
    }

}