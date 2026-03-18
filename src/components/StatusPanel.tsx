import { BoardState, Player } from '../types/game';

interface StatusPanelProps {
  board: BoardState;
  onRestart: () => void;
}

const playerStyles: Record<Player, string> = {
  red: 'bg-rose-500/15 text-rose-200 ring-1 ring-inset ring-rose-400/40',
  blue: 'bg-sky-500/15 text-sky-200 ring-1 ring-inset ring-sky-400/40',
};

export function StatusPanel({ board, onRestart }: StatusPanelProps) {
  return (
    <aside className="flex h-fit w-full max-w-sm flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-slate-950/30 backdrop-blur">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">Local match</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Dots</h1>
        <p className="mt-2 text-sm text-slate-300">
          Place dots on intersections, alternate turns locally, and build toward future capture logic.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className={`rounded-2xl px-4 py-3 ${playerStyles[board.currentPlayer]}`}>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Current player</p>
          <p className="mt-2 text-lg font-semibold capitalize">{board.currentPlayer}</p>
        </div>

        <div className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-inset ring-white/10">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Game status</p>
          <p className="mt-2 text-lg font-semibold capitalize text-white">{board.status.replace('_', ' ')}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-rose-500/10 px-4 py-3 ring-1 ring-inset ring-rose-400/30">
          <p className="text-xs uppercase tracking-[0.2em] text-rose-200/80">Red score</p>
          <p className="mt-2 text-2xl font-semibold text-rose-100">{board.scores.red}</p>
        </div>
        <div className="rounded-2xl bg-sky-500/10 px-4 py-3 ring-1 ring-inset ring-sky-400/30">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-200/80">Blue score</p>
          <p className="mt-2 text-2xl font-semibold text-sky-100">{board.scores.blue}</p>
        </div>
      </div>

      <div className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-inset ring-white/10">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Board size</p>
        <p className="mt-2 text-lg font-semibold text-white">
          {board.size.columns} × {board.size.rows} intersections
        </p>
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="mt-2 inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-950"
      >
        Restart game
      </button>
    </aside>
  );
}
