import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import 'semantic-ui-css/semantic.min.css';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
