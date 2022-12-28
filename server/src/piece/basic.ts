import {Position} from "../type";

export class Basic {
    can_jump: boolean = false
    color: "white" | "black" = "black"
    img: string = ""
    selected: boolean = false
    as_already_move : boolean = false
    position: Position = {x:0, y:0}
    background: string = ""

    setSelected(selected: boolean) {
        this.selected = selected
    }

    top({x, y}: Position) : Position {
        return {x: x-1, y}
    }

    right({x, y}: Position) : Position {
        return {x, y: y+1}
    }

    left({x, y}: Position) : Position {
        return {x, y: y-1}
    }

    bottom({x, y}: Position) : Position {
        return {x: x+1, y}
    }
}