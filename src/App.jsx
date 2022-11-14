import { useContext } from 'react'
import Form from './components/Form'
import Items from './components/Items'
import Context from './components/Context'

function App() {
  // const { msg } = useContext(Context)

  return (
    <main>
      {/* <p className={`bg-${msg.color}`}>{msg.msg}</p> */}
      <h1 className="md:text-3xl">grocery buds</h1>
      <Form />
      <Items />
    </main>
  )
}

export default App
