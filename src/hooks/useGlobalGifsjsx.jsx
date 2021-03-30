import { useContext } from 'react';
import GifsContext from '../context/GifsContext';

export const useGlobalGifs = () => {
  return useContext(GifsContext).gifs;
};
