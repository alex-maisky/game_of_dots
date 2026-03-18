import { BoardState, Dot, Point } from '../types/game';

interface GameBoardProps {
  board: BoardState;
  onIntersectionClick: (point: Point) => void;
}

const BOARD_PADDING = 28;
const CELL_SIZE = 28;

function dotColor(dot: Dot): string {
  return dot.player === 'red' ? '#f43f5e' : '#38bdf8';
}

export function GameBoard({ board, onIntersectionClick }: GameBoardProps) {
  const { columns, rows } = board.size;
  const width = BOARD_PADDING * 2 + CELL_SIZE * (columns - 1);
  const height = BOARD_PADDING * 2 + CELL_SIZE * (rows - 1);

  return (
    <section className="flex min-w-0 flex-1 flex-col rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-slate-950/30 backdrop-blur">
      <div className="mb-4 flex items-center justify-between gap-3 px-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">Board</p>
          <p className="mt-1 text-sm text-slate-300">Clickable intersections for local two-player turns.</p>
        </div>
        <p className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-inset ring-white/10">
          {board.dots.length} dots placed
        </p>
      </div>

      <div className="overflow-auto rounded-2xl bg-slate-950/70 p-3 ring-1 ring-inset ring-white/10">
        <div className="min-w-max">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="h-auto max-h-[70vh] min-h-[320px] w-full min-w-[720px]"
            role="img"
            aria-label={`${columns} by ${rows} dots board`}
          >
            <rect x="0" y="0" width={width} height={height} rx="24" fill="#0f172a" />

            {Array.from({ length: rows }).map((_, rowIndex) => {
              const y = BOARD_PADDING + rowIndex * CELL_SIZE;
              return (
                <line
                  key={`row-${rowIndex}`}
                  x1={BOARD_PADDING}
                  y1={y}
                  x2={width - BOARD_PADDING}
                  y2={y}
                  stroke="rgba(148, 163, 184, 0.35)"
                  strokeWidth="1"
                />
              );
            })}

            {Array.from({ length: columns }).map((_, columnIndex) => {
              const x = BOARD_PADDING + columnIndex * CELL_SIZE;
              return (
                <line
                  key={`column-${columnIndex}`}
                  x1={x}
                  y1={BOARD_PADDING}
                  x2={x}
                  y2={height - BOARD_PADDING}
                  stroke="rgba(148, 163, 184, 0.35)"
                  strokeWidth="1"
                />
              );
            })}

            {Array.from({ length: rows * columns }).map((_, index) => {
              const xIndex = index % columns;
              const yIndex = Math.floor(index / columns);
              const x = BOARD_PADDING + xIndex * CELL_SIZE;
              const y = BOARD_PADDING + yIndex * CELL_SIZE;
              const occupied = board.dots.some((dot) => dot.position.x === xIndex && dot.position.y === yIndex);

              return (
                <g key={`intersection-${xIndex}-${yIndex}`}>
                  <circle cx={x} cy={y} r="3.2" fill="rgba(226, 232, 240, 0.75)" />
                  <circle
                    cx={x}
                    cy={y}
                    r="11"
                    fill={occupied ? 'transparent' : 'rgba(148, 163, 184, 0.001)'}
                    className={occupied ? '' : 'cursor-pointer'}
                    onClick={() => !occupied && onIntersectionClick({ x: xIndex, y: yIndex })}
                  />
                </g>
              );
            })}

            {board.dots.map((dot) => {
              const x = BOARD_PADDING + dot.position.x * CELL_SIZE;
              const y = BOARD_PADDING + dot.position.y * CELL_SIZE;

              return (
                <g key={dot.id}>
                  <circle cx={x} cy={y} r="10" fill={dotColor(dot)} />
                  <circle cx={x} cy={y} r="14" fill="transparent" stroke={`${dotColor(dot)}55`} strokeWidth="2" />
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
