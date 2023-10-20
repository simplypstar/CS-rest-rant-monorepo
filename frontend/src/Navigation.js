import { useContext } from 'react';   // add useState, useEffect
import { useHistory } from 'react-router';
import { CurrentUser } from './contexts/CurrentUser';

function Navigation() {

    const history = useHistory()

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => history.push("/sign-up")}>
                    Sign Up
                </a>
            </li>
            
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => history.push("/login")}>
                    Login
                </a>
            </li>
        </>
    )

    // Added a logout function
    if (currentUser) {
        loginActions = (
            <>
                <li style={{ float: 'right' }}>
                    <a href="#" onClick={() => history.push("/log-out")}>
                        Log Out
                    </a>
                </li>
                <li style={{ float: 'right' }}>
                    Logged in as {currentUser.firstName} {currentUser.lastName}
                </li>                
            </>
        )
    }

    return (
        <nav>
            <ul>
                <li>
                    <a href="#" onClick={() => history.push("/")}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/places")}>
                        Places
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => history.push("/places/new")}>
                        Add Place
                    </a>
                </li>
                {loginActions}
            </ul>
        </nav>
    )
}

export default Navigation;