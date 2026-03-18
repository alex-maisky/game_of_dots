import { BoardState, BoardSize, Dot, Player, Point } from '../types/game';

export const DEFAULT_BOARD_SIZE: BoardSize = {
  columns: 39,
  rows: 32,
};

const dotKey = ({ x, y }: Point) => `${x}:${y}`;

const nextPlayer = (player: Player): Player => (player === 'red' ? 'blue' : 'red');

export const createInitialBoardState = (size: BoardSize = DEFAULT_BOARD_SIZE): BoardState => ({
  size,
  dots: [],
  currentPlayer: 'red',
  scores: {
    red: 0,
    blue: 0,
  },
  status: 'ready',
});

export const isIntersectionOccupied = (dots: Dot[], point: Point): boolean =>
  dots.some((dot) => dotKey(dot.position) === dotKey(point));

export const placeDot = (state: BoardState, point: Point): BoardState => {
  if (isIntersectionOccupied(state.dots, point)) {
    return state;
  }

  const dot: Dot = {
    id: `${state.currentPlayer}-${dotKey(point)}`,
    position: point,
    player: state.currentPlayer,
  };

  return {
    ...state,
    dots: [...state.dots, dot],
    currentPlayer: nextPlayer(state.currentPlayer),
    status: 'in_progress',
  };
};
