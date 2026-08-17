export default function Navbar() {
  return (
    <header className="h-18 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex h-full items-center justify-between px-6">
        {/* Left Section */}
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-blue-600">
            TaskFlow
          </h1>

          <input
            type="text"
            placeholder="Search tasks..."
            className="w-80 rounded-lg border border-slate-300 px-4 py-2 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          <button className="text-xl">🔔</button>

          <button className="text-xl">⚙️</button>

          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
              VG
            </div>

            <span className="font-medium text-slate-700">
              Vedanti
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}