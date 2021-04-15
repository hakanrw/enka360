import { Link, NavLink } from 'react-router-dom';

function Navbar(props) {
  let menuRoutes = props.routes;

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        
        <Link className="navbar-brand text-fancy" to="/" style={{fontWeight: "700", fontSize: "180%", padding: "0", paddingLeft: "5px"}}>360</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-1 mb-lg-0">
            {
              menuRoutes.map(route => (
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to={route[0]} activeClassName="active" exact>{route[1]}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;