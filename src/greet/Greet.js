import {NavBar} from "./NavBar";
import {useLocation} from "react-router-dom";

export function Greet() {

    const location = useLocation();

    let name = new URLSearchParams(location.search).get('name');
    let message = 'Hello!';
    if (name) {
        message = `Hello ${name}!`;
    }

    return (<>
        <h1>{message}</h1>
        <NavBar />
        </>
    );
}
