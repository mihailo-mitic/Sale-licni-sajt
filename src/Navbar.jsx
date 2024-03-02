import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <h2>Aleksandar Mitić</h2>

      <Link to={"/"}>Home</Link>
      <Link to={"/biography"}>Biography</Link>
      <Link to={"/projects"}>Projects</Link>
      <Link to={"/contact"}>Contact</Link>
    </div>
  );
};
export default Navbar;
