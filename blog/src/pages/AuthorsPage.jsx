import React from "react";
// import { Link } from "react-router-dom";
import {Authors} from "../component/Authors";
import { useAuthors } from "../hook/useAuthors";

export function AuthorsPage() {
  const AuthorsList = useAuthors();

  return (
    <div>
     

      <h1>Weclome</h1>
      <p>Here is you list of Authors </p>

      {AuthorsList.map((Author) => (
        <Authors key={Author.id} Author={Author} />
      ))}
    </div>
  );
}