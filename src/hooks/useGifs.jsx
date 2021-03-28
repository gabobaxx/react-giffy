import { useContext, useEffect, useState } from 'react';
import { getGifs } from '../services/getGifs';
import GifContext from '../context/GifsContext';

function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifContext);
  //   const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    const keywordToUsed =
      keyword || localStorage.getItem('lastKeyword') || 'random';

    getGifs({ keyword: keywordToUsed }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem('lastKeyword', keyword);
    });
  }, [
    // dependencia del useEffect.
    // el efecto solo se renderiza cuando cambia sus dependencias
    // ejemplo -> si hay un array vacio quiere decir que no hay ninguna dependencia y el efecto solo se renderiza una vez (al principio)
    // en este ejemplo la dependencia seria la variable keyword
    // es decir que cuando cambie en algun momento de la app la keyword, el efecto se tendria que renderizar otra vez.
    keyword,
  ]);

  return { loading, gifs };
}

export default useGifs;
