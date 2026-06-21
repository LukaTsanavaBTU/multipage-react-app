import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <>
      <header>
        <Link to="/">
          <h1>React Website</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Made by LukaTsanavaBTU</p>
      </footer>
    </>
  );
}

export default Layout;
