export type Player = 'red' | 'blue';

export interface Point {
  x: number;
  y: number;
}

export interface Dot {
  id: string;
  position: Point;
  player: Player;
}

export interface BoardSize {
  columns: number;
  rows: number;
}

export interface ScoreState {
  red: number;
  blue: number;
}

export type GameStatus = 'ready' | 'in_progress';

export interface BoardState {
  size: BoardSize;
  dots: Dot[];
  currentPlayer: Player;
  scores: ScoreState;
  status: GameStatus;
}
