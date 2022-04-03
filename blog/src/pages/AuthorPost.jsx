import React from "react";

import { useAuthor } from "../hook/useAuthor";
import {Authorposts} from "../component/Authorposts"
export function Authorpost({authorid}) {
  const AuthorData = useAuthor();

  return (
    <div>
        <Authorposts key={AuthorData.id} Author={AuthorData} />
    </div>
  );
}