import { useCallback, useRef } from "react";
import {createPortal} from "react-dom";

//this modal is used in authorDetailsPage

export function CreatePostModal({authorid}){

    const postTitle=useRef();
    const postBody=useRef();

    const handleAddPost=useCallback(()=>{
    
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            title: postTitle.current.value,
            body: postBody.current.value,
            userId: authorid
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(response => response.json())
        .then(json => {
          console.log('response: ' + JSON.stringify(json)); //to insure successful Post simulation to the API
        })
    },[authorid]);

    return createPortal(
        <div className="modal">
            <h1>Create Post</h1>
            <label htmlFor="title">Title</label>
            <input ref={postTitle} type="text" placeholder="title of the post" id="title"/><br/>
            <label htmlFor="body">Body</label>
            <input ref={postBody} type="text" placeholder="body of the post" id="body"/><br/>
            <button onClick={handleAddPost}>Post</button>
        </div>
    ,document.body);
}