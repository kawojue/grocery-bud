import Context from './Context'
import { useContext } from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'

const Items = () => {
    const { items, deleteItem, clearItems,
        editItem } = useContext(Context)

    return (
        <section className="items">
            {items.map(item => (
                <article key={item.id} className="item">
                    <p className="item-title">{item.name}</p>
                    <div className="btn-container">
                        <button className="edit-btn" onClick={() => editItem(item.id)}>
                            <FaEdit />
                        </button>
                        <button className="delete-btn" onClick={() => deleteItem(item.id)}>
                            <FaTrash />
                        </button>
                    </div>
                </article>
            ))}
            <button className="trash-btn" onClick={() => clearItems()}>
                clear items
            </button>
        </section>
    )
}

export default Items