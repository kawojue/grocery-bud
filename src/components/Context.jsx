import { createContext, useEffect, useState } from 'react'

const Context = createContext({})

export const DataProvider = ({ children }) => {
    return (
        <Context.Provider value={{

        }}>
            {children}
        </Context.Provider>
    )
}

export default Context