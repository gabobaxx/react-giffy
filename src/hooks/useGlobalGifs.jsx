import { useContext } from 'react';
import { Context } from '../context/GifsContext';

const GifsContext = Context;

export const useGlobalGifs = () => {
  return useContext(GifsContext).gifs;
};
