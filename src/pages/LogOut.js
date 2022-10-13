import '../App.css'
import {logOut} from "../utils/session";
const LogOut = () => {

    return (
        <header >
            {logOut()}
            {window.location.reload()}
        </header>
    )
}

export default LogOut