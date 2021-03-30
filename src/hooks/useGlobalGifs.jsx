import { useContext } from 'react';
import { Context } from '../context/GifsContext';

const GifsContext = Context;

export const useGlobalGifs = () => useContext(GifsContext).gifs;
