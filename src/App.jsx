const App = () => {
  return (
    <main className=" bg-amber-100">
      <h1 className="text-3xl font-bold text-slate-700">
        Hello Tailwind + React
      </h1>

      <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border p-4 bg-white shadow-sm">Card A</div>
        <div className="rounded-2xl border p-4 bg-white shadow-sm">Card B</div>
        <div className="rounded-2xl border p-4 bg-white shadow-sm">Card C</div>
      </div>

        <a href="#" className="inline-block px-4 py-2 rounded-lg border hover:bg-slate-500 focus:ring-2 focus:ring-blue-500 transition-all">Link com foco</a>
    </main>
  )
}

export default App
