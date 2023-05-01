import React from "react";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import "bootstrap-icons/font/bootstrap-icons.css";
import Auth from "../../utils/auth";
import { Colors } from "../../colors";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
<header className="w-100 mt-0 mb-2">
  <div
    className="mx-auto"
    style={{
      backgroundColor: Colors.primaryColor,
      color: Colors.secondaryColor,
      boxShadow: `0px 0px 5px 5px ${Colors.quarternaryColor}`,
    }}
  >
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <Link className="text-light text-decoration-none" to="/">
              <h1 className="m-0" style={{ color: Colors.secondaryColor }}>DevConnect</h1>
            </Link>
            <p className="m-0">
              Developing growth. Remote listings. Friendly feedback.
            </p>
          </div>
          <div>
            {Auth.loggedIn() ? (
              <>
                <MDBBtn
                  className="me-2"
                  color="secondary"
                  size="lg"
                  href="/me"
                >
                  <i className="bi bi-award-fill me-2"></i>
                  <span>{Auth.getProfile().data.username}'s profile</span>
                </MDBBtn>
                <MDBBtn
                  color="secondary"
                  size="lg"
                  onClick={logout}
                >
                  Logout
                </MDBBtn>
              </>
            ) : (
<>
<div className="d-flex align-items-center">
  <Link
    className="btn btn-primary btn-sm me-2 fw-bold text-uppercase"
    to="/login"
    style={{ backgroundColor: Colors.secondaryColor, color: Colors.primaryColor }}
  >
    Login
  </Link>
  <Link
    className="btn btn-secondary btn-sm fw-bold text-uppercase"
    to="/signup"
    style={{ backgroundColor: Colors.secondaryColor, color: Colors.primaryColor }}
  >
    Signup
  </Link>
</div>
</>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;