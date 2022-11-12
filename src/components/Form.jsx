import Context from './Context'
import { useContext } from 'react'

const Form = () => {
    const { inputEl } = useContext(Context)

    return (
        <form>
            <input type="text" placeholder="e.g. bread" className="add-item-input" ref={inputEl} />
            <button className="btn">
                submit
            </button>
        </form>
    )
}

export default Form