import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import Signout from "../Signout/Signout";
import Currentuser from "../Currentuser/Currentuser";
// import Userhub from "../../pages/Userhub.js";
import { useNavigate, Link } from "react-router-dom";
export default function Navbar({ render }) {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  //   async function getCurrentUser() {
  //     let res = await fetch("/users/getCurrentUser");
  //     console.log("In getcurrentuser", await res.user?.FirstName);
  //     let fuser = await res.json().user?.FirstName;
  //     return fuser;
  //   }

  //   useEffect(async () => {
  //     setUser(await getCurrentUser());
  //     console.log("user in effect", user);
  //   }, []);

  useEffect(() => {
    async function getCurrentUser() {
      let res = await fetch("/users/fetchUpdatedUser");
      //   console.log("In getcurrentuser", await res.json().user?.FirstName);
      let resuser = await res.json();
      console.log("resuser", resuser);
      let fname = resuser.user?.FirstName;
      console.log(fname);
      setUser(fname);
    }
    getCurrentUser();
  }, [render]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light gradient-custom">
        <div className="leftcontainer">
          <Link className="navbar-brand" to="/meals">
            Peko
          </Link>
        </div>
        <div className="rightContainer">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Currentuser user={user} />
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/userhub"> */}
                <button
                  className="usebutton"
                  onClick={() => {
                    navigate("/userhub");
                  }}
                >
                  Userhub
                </button>
                {/* </a> */}
              </li>
              <li className="nav-item">
                <Signout />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
