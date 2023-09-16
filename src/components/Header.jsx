import { Link } from "react-router-dom"

function Header(props) {
  return (
    <nav className="flex flex-row justify-around p-5 ">
      <Link className= "hover:italic" to="/">
        <div>People App</div>
      </Link>
      <Link className= "hover:italic" to="/">
        <div>About</div>
      </Link>
      <Link className= "hover:italic" to="/">
        <div>Contact Us</div>
      </Link>
    </nav>
  )
}

export default Header