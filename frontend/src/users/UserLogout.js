// Added a Logout function
import { useContext } from "react"
import { useHistory } from "react-router-dom"
import { CurrentUser } from "../contexts/CurrentUser"

function UserLogout() {
    const history = useHistory()
    const { setCurrentUser } = useContext(CurrentUser)

    localStorage.removeItem("token")
    setCurrentUser(null)
    history.push("/")
    return null
}

export default UserLogout
