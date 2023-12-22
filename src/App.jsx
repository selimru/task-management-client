import { Outlet } from "react-router-dom"
import NavPage from "./shared/NavPage"
import FooterPage from "./shared/FooterPage"

function App() {

  return (
    <>
      <NavPage />
      <Outlet />
      <FooterPage />
    </>
  )
}

export default App
