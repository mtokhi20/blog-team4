//gits a list of authors from the API

import { useEffect, useState } from "react";

const authorsUrl = "https://jsonplaceholder.typicode.com/users";

export function useAuthors() {
  
  const [authorsList, setAuthorsList] = useState([]);
   
  useEffect(() => {
    fetch(authorsUrl)
      .then((response) => response.json())
      .then((json) => setAuthorsList(json));
  }, []);
    
  return authorsList;
}