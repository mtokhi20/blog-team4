import { useNavigate } from "react-router-dom";

export function AuthorsData({ Author }) {
   const navigate = useNavigate();
  return (
    <>
      <h2>{Author.id} {Author.name}</h2>
      <button onClick={() => {
          console.log(`id from home page is ${Author.id}`);
          navigate(`/authors/${Author.id}`);
        }}>View Author's Details and Posts</button> 
    </>
  );
}