
import './App.css'
import Items from './containers/items/items'
import { PersonPresence } from './containers/person-presence/person-presence'

function App() {
 

  return (
    <>
    
    <h1>Rappel Redux</h1>
    <PersonPresence />
    <h2>Items with Slice</h2>
    <Items />
    </>
  )
}

export default App
