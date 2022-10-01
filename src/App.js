import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/home';
import Signup from './Pages/Signup/signup';
import Login from './Pages/Login/login';


function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Home/>
      <Footer/> */}
      <Signup/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
