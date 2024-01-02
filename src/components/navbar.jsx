import SuppyLogo from '../assets/Suppy_Logo.png'

export default function NavBar(){
    return(
        <nav className="navBar">
            <img src={SuppyLogo} className="logo"/>
            <button className="navBarButton">Features</button>
            <button>Community</button>
            <button>How it Works?</button>
            <button className="headerButton">Get Started</button>
        </nav>
    );
}