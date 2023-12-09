import { useEffect, useState } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  // evitar llamados a la api si nos vamos del componente, esto lo podemos hacer con una cleanUp function
  useEffect(() => {
    // si no creamos una subscripcion, controllador o algo parecido, lo que va a pasar que en una conexion lenta, al momento de cargar este componente, lo hara bien, pero al momento de salir del componente, lo cargara de nuevo en otro componente
    let subscribed = true;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        if (subscribed) {
          alert("Posts are ready,updating state");
          setPosts(data);
          console.log(data);
        }
      });

    return () => {
      subscribed = false;
    };
  }, []);

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
          </div>
        ))}
    </div>
  );
};
