
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-bar">
      <h1>Identi-Flora-Cation</h1>

      <nav className="App-link"> 
        <Link to="/" className="App-link">Home</Link> |{" "}
        <Link to="/list" className="App-link">List</Link> |{" "}
        <Link to="/search" className="App-link">Search</Link>
      </nav>

    </div>
  );
}

export default Nav;