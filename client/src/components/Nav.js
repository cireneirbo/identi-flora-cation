
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-bar">
      <h1>Identi-Flora-Cation</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/list">List</Link> |{" "}
        <Link to="/search">Search</Link>
      </nav>

    </div>
  );
}

export default Nav;