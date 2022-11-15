import { useContext } from 'react'
import Form from './components/Form'
import Items from './components/Items'
import Context from './components/Context'
import ManageAlert from './components/ManageAlert'

function App() {
  const { alert, showAlert } = useContext(Context)

  return (
    <main>
      {alert.show && <ManageAlert {...alert} remAlert={showAlert} />}
      <h1 className="md:text-3xl">grocery buds</h1>
      <Form />
      <Items />
    </main>
  )
}

export default App
