import {Position} from "../type";

export default interface Piece {
  can_jump: boolean
  color: 'white' | 'black'
  img: string
  eat({x, y}:Position): boolean
  move({x, y}:Position): Position[]
  top({x, y}:Position): Position
  bottom({x, y}:Position): Position
  left({x, y}:Position): Position
  right({x, y}:Position): Position
}