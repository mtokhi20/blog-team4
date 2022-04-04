//gits a list of comments for a specific post from the API

import { useEffect, useState } from "react";

const commentUrl = "https://jsonplaceholder.typicode.com/posts";

export function usePostComments(postid) {
  
  const [commentsList, setCommentsList] = useState([]);
  

  useEffect(() => {
    fetch(`${commentUrl}/${postid}/comments`)
      .then((response) => response.json())
      .then((json) => {
        setCommentsList(json);});
  }, [postid]);

  return commentsList;
}