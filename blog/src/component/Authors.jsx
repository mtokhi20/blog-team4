import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function Authors({ Author }) {
   const navigate = useNavigate();
  return (
    <div>
      <h1>{Author.id}</h1>
      <h2>{Author.name}</h2>
      <button onClick={() => {
          navigate(`/authors/${Author.id}`);
        }}>View Author's Posts</button> 
    </div>
  );
}