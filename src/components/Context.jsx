import { createContext, useEffect, useState, useRef } from 'react'

const Context = createContext({})

export const DataProvider = ({ children }) => {
    const url = "http://localhost:3500/items"


    // Initialize default states
    const inputEl = useRef()
    const [name, setName] = useState("")
    const [items, setItems] = useState([])
    const [ID, setID] = useState(null)
    const [isEditing, setIsEditing] = useState(false)
    const [alert, setAlert] = useState({ msg: '', show: false, action: '' })

    const showAlert = (show = false, action = '', msg = '') => {
        setAlert({ show, action, msg })
    }

    // fetch Items from the server.
    const fetchItems = async () => {
        try {
            setIsEditing(false)
            const res = await fetch(url)
            const data = await res.json()
            setItems(data)
        } catch (err) {
            showAlert(true, 'error', 'Please, reload the page')
        }
    }

    // fetch items once the page loads.
    useEffect(() => {
        (async () => await fetchItems())()
    }, [])

    // Delete individual item.
    const deleteItem = async id => {
        const newItems = items.filter(item => item.id !== id)
        setItems(newItems)
        setIsEditing(false)
        setName("")

        // from server
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })

        showAlert(true, 'delete', 'Item removed')
    }

    // Delete all items
    const clearItems = () => {
        setName("")
        setIsEditing(false)

        const IDS = items.map(item => item.id) // fetch all items id to list
        IDS.forEach(async id =>
            // from server
            await fetch(`${url}/${id}`, {
                method: 'DELETE',
            }))

        setItems([])

        showAlert(true, 'clear', 'Items cleared')
    }
    // get individual item information to edit
    const editItem = async id => {
        setIsEditing(true)
        const getItem = items.filter(item => item.id === id)
        setID(getItem[0].id)
        setName(getItem[0].name)
    }

    const addItem = async e => {
        e.preventDefault()
        const formatName = name.toLowerCase()
        const getNewID = new Date().getTime()
        const getItem = items.filter(item => item.id === ID)

        if (isEditing) {
            getItem[0].name = formatName
            // update edited item
            const newItems = items.map(item => item.id === ID ? getItem[0] : item)
            setItems(newItems)

            // in server
            await fetch(`${url}/${ID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(getItem[0])
            })

            showAlert(true, 'edit', 'value changed')
        }

        if (!isEditing) {
            const newItem = { id: getNewID, name: formatName } // add item
            setItems([newItem, ...items])

            // to server
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newItem)
            })

            showAlert(true, 'add', 'value changed')
        }

        // Set Default states
        setName("")
        setIsEditing(false)
        setID(null)
        inputEl.current.focus()
    }

    return (
        <Context.Provider value={{
            inputEl, name, setName,
            items, setItems, isEditing,
            clearItems, editItem, addItem,
            setIsEditing, deleteItem, alert,
            showAlert
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context