import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Search, Practice, Feedback } from "./pages"
import "./styles/font/font.css"

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search /> }/>
        <Route path='/practice' element={<Practice /> }/>
        <Route path='/feedback' element={<Feedback /> }/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
