const TableSkeleton = () => {
  const baseClass =
    "flex items-center justify-center truncate rounded-xl bg-white px-4 py-8 mb-4";
  const loadingClass = "h-7 w-20 rounded-md bg-slate-50";

  // Loading animation
  const shimmer =
    "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
      data-testid="table-skeleton"
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-slate-50" />
        <div className="ml-2 h-6 w-16 rounded-md bg-slate-50 text-sm font-medium" />
      </div>

      <div className={baseClass}>
        <div className={loadingClass} />
      </div>
      <div className={baseClass}>
        <div className={loadingClass} />
      </div>
      <div className={baseClass}>
        <div className={loadingClass} />
      </div>
      <div className={baseClass}>
        <div className={loadingClass} />
      </div>
    </div>
  );
};

export default TableSkeleton;
