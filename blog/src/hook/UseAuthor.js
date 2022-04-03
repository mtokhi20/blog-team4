import { useEffect, useState } from "react";

const authorUrl = "https://jsonplaceholder.typicode.com/users/1";

export function UseAuthor(authorid) {
  const [author, setAuthor] = useState([]);
   console.log(author);
  useEffect(() => {
    fetch(authorUrl)
      .then((response) => response.json())
      .then((json) => setAuthor(json));
    
  }, [authorid]);
    
  return author;
}