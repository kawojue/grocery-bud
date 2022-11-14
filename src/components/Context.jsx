// import manageState from '../manageState'
import { createContext, useEffect, useState, useRef } from 'react'

const Context = createContext({})

export const DataProvider = ({ children }) => {
    const url = "http://localhost:3500/items"

    const inputEl = useRef()
    const [name, setName] = useState("")
    const [items, setItems] = useState([])
    const [msg, setMsg] = useState({})
    const [ID, setID] = useState(null)
    const [isEditing, setIsEditing] = useState(false)

    const fetchItems = async () => {
        try {
            setMsg({})
            setIsEditing(false)
            const res = await fetch(url)
            const data = await res.json()
            setItems(data)
        } catch (err) {
            setMsg({})
        }
    }

    useEffect(() => {
        (async () => await fetchItems())()
    }, [])

    const fetchItem = async id => {
        try {
            const res = await fetch(`${url}/${id}`)
            const data = await res.json()
            return data
        } catch (err) {
            setMsg({})
        }
    }

    const deleteItem = async id => {
        const newItems = items.filter(item => item.id !== id)
        setItems(newItems)
        setIsEditing(false)
        setName("")

        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    }

    const clearItems = () => {
        setIsEditing(false)
        setName("")

        const IDS = items.map(item => item.id)
        IDS.forEach(async id =>
            await fetch(`${url}/${id}`, {
                method: 'DELETE',
            }))

        setItems([])
    }

    const editItem = async id => {
        setIsEditing(true)
        const getItem = items.filter(item => item.id === id)
        setID(getItem[0].id)
        setName(getItem[0].name)
    }

    const addItem = async e => {
        e.preventDefault()
        const getNewID = new Date().getTime()
        const getItem = items.filter(item => item.id === ID)

        if (isEditing) {
            getItem[0].name = name
            const newItems = items.map(item => item.id === ID ? getItem[0] : item)
            setItems(newItems)
            setName("")
        }
        const newItem = { id: getNewID, name }
        setItems([newItem, ...items])

        // Default states
        setName("")
        setIsEditing(false)
        setID(null)
        inputEl.current.focus()
    }

    return (
        <Context.Provider value={{
            inputEl, name, setName,
            items, setItems, isEditing,
            setIsEditing, msg, deleteItem,
            clearItems, editItem, addItem
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context