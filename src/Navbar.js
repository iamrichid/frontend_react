import './App.css';
import logo from './bookstore.svg'

const Navbar = ({ handleLogin, handleRegister }) => {

    return(
       <>
         <div className="App-Navbar">
                <div>
                    
                <img src ={logo} height={30} />

               </div>
                <div className="App-Navbar-nav">
                  <a href="#" onClick={() => {handleRegister()}}>register</a>
                  <a href="#" onClick={() => {handleLogin()}}> login</a>
                </div>
         </div>

         
       </>
    );
    
}

export default Navbar