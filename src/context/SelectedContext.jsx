import { createContext , useContext, useState } from 'react'

const SelectedContext = createContext();

// eslint-disable-next-line react/prop-types
export function SelectedContextProvider({ children }){
  const [category, setCategory] = useState();
  const [section, setSection] = useState(null);

  return(
    <SelectedContext.Provider value={{category,setCategory,section,setSection}}>
      {children}
    </SelectedContext.Provider>
    )
}

export function useSelectedContext() {
  return useContext(SelectedContext);
}