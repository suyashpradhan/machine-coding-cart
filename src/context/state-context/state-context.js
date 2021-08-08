import { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "../../reducers/";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
