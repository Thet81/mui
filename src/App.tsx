
import { Container, Typography } from '@mui/material';
import CreateNotePage from './components/CreateNotePage'
import Notes from './pages/Notes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Container
     
    >
      <Typography variant='h4'>
        Note App
      </Typography>
      <Router>
        <Routes>
          <Route path='/' element={<Notes/>}/>
          <Route path='/notes' element={<Notes/>}/>
          <Route path='/create' element={<CreateNotePage/>}/>
        </Routes>
      </Router>
    </Container>
  )
}

export default App;