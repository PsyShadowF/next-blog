import Link from "next/link"

function NavBar() {
  return (
    <nav className="NavBar">
      <img className="logo" src="/gear-logo.svg" />
      <ul className="list--ul">
        <li className="list--li"><Link href='/posts'>Posts</Link></li>
        <li className="list--li"><Link href='#'>Publicar</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar