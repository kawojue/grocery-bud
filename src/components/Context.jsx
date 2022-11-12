import { createContext, useEffect, useState, useRef } from 'react'

const Context = createContext({})

export const DataProvider = ({ children }) => {
    const url = "http://localhost:3500"
    const inputEl = useRef()
    const [item, setItem] = useState("")
    const [items, setItems] = useState([])

    return (
        <Context.Provider value={{
            inputEl, item, setItem,
            items, setItems
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context