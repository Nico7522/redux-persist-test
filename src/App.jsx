
import { useSelector } from 'react-redux'
import './App.css'
import Login from './components/login/login'
import Items from './containers/items/items'
import { PersonPresence } from './containers/person-presence/person-presence'
import Disconnect from './components/disconnect/disconnect'
import Books from './containers/books/books'

function App() {
 
  const connectedUser = useSelector(state => state.login.user)
  const token = useSelector(state => state.login.token)

  return (
    <>

    {token && <p>Hello {connectedUser} <Disconnect /></p>}
    <h1>Rappel Redux</h1>
    <PersonPresence />
    <h2>Items with Slice</h2>
    <Items />
    <h2>Login test</h2>
    <Login />
    <Books />
    </>
  )
}

export default App
