import {useEffect} from 'react'

const manageState = (list) => {
    useEffect(() => {
        const msg = setInterval(() => {
            //
        }, 1500)
        return () => {
            clearInterval(msg)
        }
    }, [list])
}

export default manageState