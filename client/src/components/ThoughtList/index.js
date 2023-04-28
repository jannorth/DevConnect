import React from "react";
import { Link } from "react-router-dom";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBTypography,
  MDBCardText,
} from "mdb-react-ui-kit";

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {thoughts.map((thought) => (
        <MDBCard className="shadow-0" style={{ width: "48rem" }}>
          <MDBCardBody className="border-bottom pb-2">
            <div className="d-flex w-100 ps-3">
              <a href="#!">
                <h6 className="text-body">
                  {thought.thoughtAuthor} 
                  <span className="small text-muted font-weight-normal mx-1">
                    
                  </span>
                  <span className="small text-muted font-weight-normal me-1">
                    •
                  </span>
                  <Link>
                    <span className="small text-muted font-weight-normal me-1">
                      {thought.createdAt}
                    </span>
                  </Link>
                  <span>
                    <MDBIcon fas icon="angle-down" className="float-end" />
                  </span>
                </h6>
              </a>
              <p style={{ lineHeight: "1.2" }}>
                Hi I'm a new front end web developer from OKC. I'm looking for remote connections to get my foot in the door. 
              </p>
              <MDBTypography
                listUnStyled
                className="d-flex justify-content-between mb-0 pe-xl-5"
              >
                <li>
                  <Link to={`/thoughts/${thought._id}`}>
                    <MDBIcon far icon="comment" />
                  </Link>
                </li>

                <li>
                  <MDBIcon far icon="heart" />
                  <span className="small ps-2">35</span>
                </li>
              </MDBTypography>
              <>
                <div>{/* content goes here */}</div>
                <div className="d-flex p-3 border-bottom">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (29).webp"
                    className="rounded-circle"
                    height="50"
                    alt="Avatar"
                    loading="lazy"
                  />
                </div>
              </>
            </div>
          </MDBCardBody>
        </MDBCard>
      ))}
    </div>
  );
};

export default ThoughtList;