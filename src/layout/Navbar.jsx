import { NavLink } from "react-router"

function Navbar() {
  const linkStyle = {
    marginRight: "1rem",
    color: "#444",
    textDecoration: "none",
  }

  const activeStyle = {
    color: "#007bff",
    fontWeight: "bold",
  }

  return (
    <>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <NavLink to="/" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>
          Home
        </NavLink>
        <NavLink to="/admin" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>
          Admin
        </NavLink>
        <NavLink to="/login" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>
          Login
        </NavLink>
      </nav>
    </>
  )
}

export default Navbar
