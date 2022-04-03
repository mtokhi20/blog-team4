
import {AuthorsPage} from './pages/AuthorsPage';
import { Link, Route, Routes, useParams } from "react-router-dom";
import {useAuthor} from "./hook/useAuthor";
import {Authorpost} from "./component/Authorposts"
function App() {
  
  return (

    <Routes>
      <Route path="/" element={<AuthorsPage />} />
      <Route path='/authors/:id' element={<Authorpost authorid={useParams()}/>}/>
    </Routes>
    
  );
}

export default App;
