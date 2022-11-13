import {useEffect} from 'react'

const manageState = (command, list) => {
    const msg = ""
    useEffect(() => {
        const value = setInterval(() => {
            switch(command) {
                case 'DELETE':
                    msg = "item deleted"
                    break
                case 'ADD':
                    msg = "item added"
                    break
                case 'EDIT':
                    msg = "value changed"
                    break
                default:
                    msg = ''
            }
            // if (command === 'DELETE') {
            //     msg = "item deleted"
            // }
            // if (command === 'EDIT') {
            //     msg = "value changed"
            // }
            // if (command === 'ADD') {
            //     MSG
            // }
        }, 1500)
        return () => {
            clearInterval(value)
        }
    }, [list])
    return msg
}

export default manageState