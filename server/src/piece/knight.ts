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
        let b = this.bottom
        let r = this.right
        let l = this.left
        let t = this.top
        let bottomLine = b(b({x, y}))
        let rightLine = r(r({x, y}))
        let leftLine = l(l({x, y}))
        let topLine = t(t({x, y}))
        return [r(bottomLine), l(bottomLine), b(rightLine), t(rightLine), b(leftLine), t(leftLine), r(topLine), l(topLine)];
    }

}