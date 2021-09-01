import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useAuth0();

  return (
        <div className="container about-container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-2" />
            <div className="col-md-8">
              <h1 style={{paddingBottom: "10vh", paddingTop: "5vh"}}>Hello 👀👋 <br/>{user.user?.name}</h1>
              <ButtonMailto
                mailto={"mailto:kpuwal@gmail.com"}
                label={"e-mail me to permanantly remove your account"}
              />
            </div>
            <div className="col col-lg-2" />
          </div>
        </div>
  );
};

interface IbuttonMailTo {
  mailto: any,
  label: string,
}

const ButtonMailto = ({ mailto, label }:IbuttonMailTo) => {
    return (
      <Link
        to='#'
        onClick={(e) => {
          window.location = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    )
}

export default Profile;