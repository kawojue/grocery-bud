import Context from './Context'
import { useContext } from 'react'

const Form = () => {
    const { inputEl, isEditing } = useContext(Context)

    return (
        <form>
            <input type="text" placeholder="e.g. bread" className="add-item-input" ref={inputEl} />
            <button className="btn">
                {`${isEditing ? 'edit' : 'submit'}`}
            </button>
        </form>
    )
}

export default Form