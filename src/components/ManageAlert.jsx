import { useEffect } from 'react'

const ManageAlert = ({
    action,
    msg,
    remAlert,
    list
}) => {
    useEffect(() => {
        const visibilityNone = setTimeout(() => {
            remAlert()
        }, 1500)

        return () => {
            clearTimeout(visibilityNone)
        }
    }, [list])

    return (
        <p className={`alert alert-${action}`}>{msg}</p>
    )
}

export default ManageAlert