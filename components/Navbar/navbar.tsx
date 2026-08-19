export default function Navbar() {
  return (
    <header className="h-18 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex h-full flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-3">
        {/* Left Section */}
        <div className="flex items-center gap-4 sm:gap-8 flex-1 min-w-0">
          <h1 className="text-2xl font-bold text-blue-600">
            TaskFlow
          </h1>

          <input
            type="text"
            placeholder="Search tasks..."
            className="w-full sm:w-80 max-w-md rounded-lg border border-slate-300 px-4 py-2 outline-none transition focus:border-blue-500 min-w-0"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-5 mt-3 sm:mt-0">
          <button className="text-xl">🔔</button>

          <button className="text-xl">⚙️</button>

          <div className="flex items-center gap-2 min-w-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
              VG
            </div>

            <span className="font-medium text-slate-700 truncate max-w-[6rem]">
              Vedanti
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}