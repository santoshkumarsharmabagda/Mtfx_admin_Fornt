import { useLocation } from 'react-router-dom';
import AllRoute from './AllRoute/AllRoute';
import './App.css';
import SideBar from './component/SideBar/SideBar';
import Head from './component/Head/Head';

function App() {
  const locason = useLocation()
  const sty = locason.pathname === "/" ? {display:"none"}:null ||  locason.pathname === "/signup" ? {display:"none"}:null
  return (
    <div className="container-fluid"    >
      <div className='row' >
    <div className="col-lg-2 col-sm-12 col-md-12 m-0 p-0 " style={sty}   >
      <SideBar/>
    </div>
    <div className="col-lg-10 col-sm-12 col-md-12 m-0 p-0 "    >
    <div style={sty}  >
    <Head/>
    </div>
    <AllRoute/>
      </div>
    </div>
    </div>
  );
}

export default App;
