import React, { createContext, useState } from 'react';

export const TitleContext = createContext();

export const TitleContextProvider = ({ children }) => {
  const [title, setTitle] = useState("Bhardwaj's Blogs");
  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};
