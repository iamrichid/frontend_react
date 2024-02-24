
import './App.css';
import RegistrationForm from "./RegistrationForm";
import Books from './Books.js'
import LoginForm from './Auth.js';

function Content({ loggedIn, registering }) {

    return (
        <div className="content">
        {loggedIn ? (
          <div>
            {/* Content for logged-in users */}
          <LoginForm/>
          </div>
        ) : registering ? (
          <div>
            {/* Registration form */}
            <br></br>
            <RegistrationForm />
          </div>
        ) : (
           <Books /> 
        )}
      </div>
        

    );
  };
  
 
  
  
export default Content
