import { createContext } from 'react';

const HeaderContext = createContext('header');
export const HeaderProvider = HeaderContext.Provider;
export const HeaderConsumer = HeaderContext.Consumer;
