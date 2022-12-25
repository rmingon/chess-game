import Piece from "./piece";
import {Positon} from "../type";

export default class Pawn implements Piece {
  can_jump: boolean = false
  color: "white" | "black" = "black"
  img: string = ""

  constructor(color: "white" | "black") {
    this.color = color
    this.img = color === "white" ? 'pawn_white' : 'pawn_black'
  }

  eat({x, y}: Positon): boolean {
    return false;
  }

  move({x, y}: Positon): boolean {
    return false;
  }



}