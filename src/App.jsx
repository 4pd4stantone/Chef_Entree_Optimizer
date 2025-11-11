import Header from "./Header";
import MainSection from "./MainSection"
import logo from "./assets/CEO-logo-black.png"

export default function App() {
  return (
    <>
      <Header src={logo}/>
      <MainSection />
    </>
  )
}
