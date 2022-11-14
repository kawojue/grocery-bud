import Context from './Context'
import { useContext } from 'react'

const Form = () => {
    const { inputEl, isEditing, name, setName, addItem } = useContext(Context)

    return (
        <form onSubmit={e => addItem(e)}>
            <input type="text" placeholder="e.g. bread"
                className="add-item-input" ref={inputEl} value={name}
                onChange={(e) => setName(e.target.value)} autoFocus />
            <button className="btn">
                {`${isEditing ? 'edit' : 'submit'}`}
            </button>
        </form>
    )
}

export default Form