//gits a list of posts from the API

import { useEffect, useState } from "react";

const postsUrl = "https://jsonplaceholder.typicode.com/posts";

export function usePosts() {
  
  const [postsList, setPostsList] = useState([]);
   
  useEffect(() => {
    fetch(postsUrl)
      .then((response) => response.json())
      .then((json) => setPostsList(json));
  }, []);
    
  return postsList;
}