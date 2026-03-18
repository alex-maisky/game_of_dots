import { useMemo, useState } from 'react';
import { GameBoard } from './components/GameBoard';
import { StatusPanel } from './components/StatusPanel';
import { createInitialBoardState, DEFAULT_BOARD_SIZE, placeDot } from './game/board';
import { Point } from './types/game';

function App() {
  const initialBoard = useMemo(() => createInitialBoardState(DEFAULT_BOARD_SIZE), []);
  const [board, setBoard] = useState(initialBoard);

  const handleIntersectionClick = (point: Point) => {
    setBoard((currentBoard) => placeDot(currentBoard, point));
  };

  const handleRestart = () => {
    setBoard(createInitialBoardState(board.size));
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(244,63,94,0.14),_transparent_25%),linear-gradient(180deg,_#020617_0%,_#020617_100%)] px-4 py-6 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 lg:flex-row lg:items-start">
        <StatusPanel board={board} onRestart={handleRestart} />
        <GameBoard board={board} onIntersectionClick={handleIntersectionClick} />
      </div>
    </main>
  );
}

export default App;
