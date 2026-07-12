
import CreateNotePage from './components/CreateNotePage'
import Notes from './pages/Notes';
import { Router } from 'react-router-dom';
const App = () => {
  return (
    <div>
        <Notes/>
        <CreateNotePage/>
    </div>
  )
}

export default App;