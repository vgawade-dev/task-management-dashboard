export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-slate-800 px-4 sm:px-6 py-3 sm:py-4 text-white">
      <h1 className="text-lg sm:text-xl font-bold">
        Task Management Dashboard
      </h1>

      <p className="text-sm mt-1 sm:mt-0">
        Welcome, Vedanti 👋
      </p>
    </header>
  );
}