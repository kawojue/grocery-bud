import Context from './Context'
import { useContext } from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'

const Items = () => {
    const { items } = useContext(Context)

    return (
        <section className="items">
            {items.map(item => (
                <article key={item.id} className="item">
                    <p>{item.item}</p>
                    <div className="btn-container">
                        <button className="edit-btn">
                            <FaEdit />
                        </button>
                        <button className="delete-btn">
                            <FaTrash />
                        </button>
                    </div>
                </article>
            ))}
            <button className="trash-btn">
                clear items
            </button>
        </section>
    )
}

export default Items