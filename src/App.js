
import Login from "./components/js/Login";
import "bootstrap/dist/css/bootstrap.min.css"
import Dashboard from "./components/js/Dashboard";
import {ContextProvider} from "./components/js/UseContext";
import "./components/css/sidebar.css";
import './App.css';


const code = new URLSearchParams(window.location.search).get('code')
function App() {
  return (
    <ContextProvider className="App">
      {code? <Dashboard code={code}/>:<Login/>}
   </ContextProvider>
  );
}

export default App;
