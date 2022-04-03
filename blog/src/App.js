
import {AuthorsPage} from './pages/AuthorsPage';
import { Link, Route, Routes, useParams } from "react-router-dom";
import {UseAuthor} from "./hook/UseAuthor";

function App() {
  const { authorId } = useParams();
  return (

    <Routes>
      <Route path="/" element={<AuthorsPage />} />
      <Route path='/authors/:id' element={<UseAuthor authorid={authorId}/>}/>
    </Routes>
    
  );
}

export default App;
