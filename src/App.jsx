import { Hello } from "./components/Hello"
import { Card } from "./components/Card"
import { useState } from "react"
import { TextField } from "./components/TextField"




const App = () => {

  const [count, setCount] = useState(0)

  const [name, setName] = useState("")

  const CARDS = [
    {
      id: 0,
      title: "Card A",
      description: "Ola eu sou o filho do Card A 😁"
    },
    {
      id: 1,
      title: "Card B",
      description: "Ola eu sou o filho do Card B 😊"
    },
    {
      id: 2,
      title: "Card C",
      description: "Ola eu sou o filho do Card C 😎"
    }
  ]

  const inc = () => setCount(c => c + 1)

  return (
    <main className=" bg-amber-100">
      <h1 className="text-3xl font-bold text-slate-700">
        Hello Tailwind + React
      </h1>

      <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map(item => (
          <Card key={item.id} title={item.title}>
            <p>{item.description}</p>
          </Card>
        ))
        }

      </div>

      <a href="#" className="inline-block px-4 py-2 rounded-lg border  hover:bg-slate-500 focus:ring-2 focus:ring-blue-500 transition-all">Link com foco</a>

      <Hello name="Sorriso" />

      <button onClick={inc} className="bg-slate-600 animate-bounce text-neutral-50 px-4 py-2 rounded-2xl cursor-pointer">
        Count: {count}
      </button>

      <form >
        <TextField
          id="name"
          label="Nome completo"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </form>



    </main >
  )
}

export default App
