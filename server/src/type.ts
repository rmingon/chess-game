import Pawn from "./piece/pawn";
import Bishop from "./piece/bishop";
import King from "./piece/king";
import Knight from "./piece/knight";
import Queen from "./piece/queen";
import Rook from "./piece/rook";
import Empty from "./piece/empty";

export type Square = Array<Bishop | King | Knight | Pawn | Queen | Rook | Empty>

export type Board = Array<Square>

export type Position = {
  x: number,
  y: number
}