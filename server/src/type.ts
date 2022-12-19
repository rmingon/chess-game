import Pawn from "./piece/pawn";
import Bishop from "./piece/bishop";
import King from "./piece/king";
import Knight from "./piece/knight";
import Queen from "./piece/queen";
import Rook from "./piece/rook";

export type Square = Array<Bishop | King | Knight | Pawn | Queen | Rook>

export type Board = Array<Square>

export type Positon = {
  x: number,
  y: number
}