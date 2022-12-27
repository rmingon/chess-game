export class Basic {
    can_jump: boolean = false
    color: "white" | "black" = "black"
    img: string = ""
    selected: boolean = false

    setSelected(selected: boolean) {
        this.selected = selected
    }
}