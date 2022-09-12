import Link from "next/link"

function NavBar({ children }) {
  return (
    <>
      <nav className="NavBar">
        <img className="logo" src="/gear-logo.svg" />
        <ul className="list--ul">
          <li className="list--li"><Link href='/posts'>Posts</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  )
}

export default NavBar