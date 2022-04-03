import { useEffect, useState } from "react";

const authorUrl = "https://jsonplaceholder.typicode.com/users/";

export function useAuthor(authorid) {
  const [author, setAuthor] = useState(null);

   console.log(author);
  useEffect(() => {
    fetch(authorUrl+authorid)
      .then((response) => response.json())
      .then((json) => setAuthor(json));
    
  }, [authorid]);
    
  return author;
}