import { NavLink } from "react-router-dom";
function Header(){
return(
<header>
    <div className="logo">
        <img src="./image/logo.png"  alt="" />
    </div>
    <nav>
        
        <NavLink className="nav" to="/">Home</NavLink>
        <NavLink className="nav" to="/about">About</NavLink>
        <NavLink className="nav" to="/shop">Shop</NavLink>
        <NavLink className="nav" to="/contact">Contact</NavLink>
    </nav>
</header>

);
}

export default Header;