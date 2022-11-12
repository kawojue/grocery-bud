import { createContext, useEffect, useState, useRef } from 'react'

const Context = createContext({})

export const DataProvider = ({ children }) => {
    const url = "http://localhost:3500/items"

    const inputEl = useRef()
    const [item, setItem] = useState("")
    const [items, setItems] = useState([])
    const [fetchErr, setFetchErr] = useState(null)
    const [isEditing, setIsEditing] = useState(false)

    const fetchItems = async () => {
        try {
            setFetchErr(null)
            const res = await fetch(url)
            const data = await res.json()
            setItems(data)
        } catch (err) {
            setFetchErr("Please, reload the page or check your connection.")
        }
    }

    useEffect(() => {
        (async () => await fetchItems())()
    }, [])

    return (
        <Context.Provider value={{
            inputEl, item, setItem,
            items, setItems, isEditing,
            setIsEditing
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context