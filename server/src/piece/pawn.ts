import Piece from "./piece";
import {Positon} from "../type";
import {Basic} from "./basic";

export default class Pawn extends Basic implements Piece {

  constructor(color: "white" | "black") {
    super()
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