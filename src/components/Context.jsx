import { createContext, useEffect, useState, useRef } from 'react'

const Context = createContext({})

export const DataProvider = ({ children }) => {
    const url = "http://localhost:3500/items"

    const inputEl = useRef()
    const [item, setItem] = useState("")
    const [items, setItems] = useState([])
    const [msg, setMsg] = useState(null)
    const [isEditing, setIsEditing] = useState(false)

    const fetchItems = async () => {
        try {
            setMsg(null)
            const res = await fetch(url)
            const data = await res.json()
            setItems(data)
        } catch (err) {
            setMsg("Please, reload the page or check your connection.")
        }
    }

    const fetchItem = async (id) => {
        try {
            const res = await fetch(`${url}/${id}`)
            const data = await res.json()
            return data
        } catch (err) {
            setMsg("Item does not exist.")
        }
    }

    const deleteItem = async id => {
        const newItems = items.filter(item => item.id !== id)
        setItems(newItems)

        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    }

    useEffect(() => {
        (async () => await fetchItems())()
    }, [])

    return (
        <Context.Provider value={{
            inputEl, item, setItem,
            items, setItems, isEditing,
            setIsEditing, msg
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context