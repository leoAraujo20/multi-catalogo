import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navBar">
      <div className="title">
        <h2>Multi Catálogo</h2>
      </div>
      <div className="links">
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/animais">Animais</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/livros">Livros</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/pessoas">Pessoas</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/favoritos">Favoritos</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
