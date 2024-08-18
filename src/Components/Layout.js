import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/Model">Model</Link>
            </li>
            <li>
              <Link to="/Compare">Compare</Link>
            </li>
            <li>
              <Link to="/Vin">Vin</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;
