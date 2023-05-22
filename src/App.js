import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Search, Practice, FeedBack } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search /> }/>
        <Route path='/practice' element={<Practice /> }/>
        <Route path='/feedback' element={<FeedBack /> }/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
