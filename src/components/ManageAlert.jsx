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
        }, 1532)

        return () => {
            clearTimeout(visibilityNone)
        }
    }, [list])

    return (
        <p className={`alert ${action}`}>{msg}</p>
    )
}

export default ManageAlert