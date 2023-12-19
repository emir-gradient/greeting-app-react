import {Link} from "react-router-dom";

export function NavBar() {
    return (
        <>
            <Link to={'/'}>Home</Link><span className="nav-separator" />
            <Link to={'/greet'}>Default Greet</Link><span className="nav-separator" />
            <Link to={'/add-name'}>Add Name</Link><span className="nav-separator" />
        </>
    );
}
