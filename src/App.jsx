import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { CVHome } from './components/CVHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<CVHome/>}/>
      </Routes>
    </Router>
  )
}

export default App
