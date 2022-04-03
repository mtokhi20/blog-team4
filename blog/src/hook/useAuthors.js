import { useEffect, useState } from "react";

const authorsUrl = "https://jsonplaceholder.typicode.com/users";

export function useAuthors() {
  const [authors, setAuthors] = useState([]);
   console.log(authors);
  useEffect(() => {
    fetch(authorsUrl)
      .then((response) => response.json())
      .then((json) => setAuthors(json));
    
  }, []);
    
  return authors;
}