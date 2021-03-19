// setup data layer
// We need this to track the basket

import {createContext, useContext, useReducer} from "react";

// This is a data layer
export const StateContext = createContext();


//Build a PROVIDER
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// THis is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);