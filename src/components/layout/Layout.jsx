import { Fragment } from "react"
import Header from "../header/Header"
import { Outlet } from "react-router-dom"


const Layout = () => {
  return (
    <Fragment>
      <div className="container">
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <Header />
      </header>
      </div>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </Fragment>
  )
}

export default Layout