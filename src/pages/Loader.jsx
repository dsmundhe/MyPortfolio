import React from "react";

const Loader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-slate-300 border-t-sky-400 dark:border-white/20 dark:border-t-sky-300"></div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
          DM's Portfolio is loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;
