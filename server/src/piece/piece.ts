import {Positon} from "../type";

export default interface Piece {
  can_jump: boolean
  color: 'white' | 'black'
  img: string
  eat({x, y}:Positon): boolean
  move({x, y}:Positon): boolean
}