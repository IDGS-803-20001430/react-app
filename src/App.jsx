import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Contador from './components/Contador'
import './App.css'

const App = () => {
  const nombre = "Erick";

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Author: { nombre.toUpperCase() } </h2>

        <Contador inicial={0} incremento={10} />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
