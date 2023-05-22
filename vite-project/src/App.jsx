import React, { useEffect, useState } from "react";
import axios from "axios";

const apiKey = "8762b90916fed7b611184e5dadfdf9d1";

function App() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    obtenerPeliculasPopulares();
  }, []);

  async function obtenerPeliculasPopulares() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      );
      const peliculasPopulares = response.data.results;

      setPeliculas(peliculasPopulares);
      console.log(peliculasPopulares);
    } catch (error) {
      console.error("Error al obtener las películas populares:", error.message);
    }
  }

  return (
    <div>
      {peliculas.map((pelicula) => (
        <div key={pelicula.id}>{pelicula.title}</div>
      ))}
    </div>
  );
}

export default App;
