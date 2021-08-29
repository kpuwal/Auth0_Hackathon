import { useAuth0 } from "@auth0/auth0-react";

interface IloginButton {
  signup?: boolean;

}

const LoginButton = ({signup}: IloginButton) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
    {
      signup ?
      <button 
        className="nav-button" 
        id="activated" 
        onClick={() => loginWithRedirect({
          screen_hint: "signup",
        })}
      >
        Sign Up
      </button>
      :
      <button 
        className="nav-button"
        id="activated"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    }
    {/* // <button className="nav-button" id="activated" onClick={() => loginWithRedirect()}>Log In</button> */}
    </>
  )
};

export default LoginButton;
