import './App.css'
import Footer from './Component/Footer'
import Sidebar from './Component/Sidebar'
import Mainroute from './Router/mainroute'


function App() {
   console.log("1"+3);
   

  return (
    <>
    <Sidebar />
    <Mainroute />
    <Footer />
    </>
  )
}

export default App
