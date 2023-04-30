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
      <MDBCard className="shadow-0" style={{ width: "48rem" }} key={thought._id}>
        <MDBCardBody className="border-bottom pb-2">
          <div className="d-flex align-items-center ps-3 mb-2">
            <Link to={`/profiles/${thought.thoughtAuthor}`}>
              <h6 className="text-body mb-0 me-3">
                {thought.thoughtAuthor}
              </h6>
            </Link>
            <span className="small text-muted font-weight-normal me-1">
              •
            </span>
            <Link to={`/thoughts/${thought._id}`}>
              <span className="small text-muted font-weight-normal me-1">
                {thought.createdAt}
              </span>
            </Link>
            <div className="card-body text-center py-4 ">
              <p style={{ lineHeight: "1.2" }}>
                {thought.thoughtText}
              </p>
            </div>
            <MDBTypography
              listUnStyled
              className="d-flex flex-row ps-3 pt-3 "
              style={{ marginLeft: "50px" }}
            >
              <li>
                <Link to={`/thoughts/${thought._id}`}>
                  <MDBIcon far icon="comment" />
                </Link>
              </li>
            </MDBTypography>
            <>
              <div>{/* content goes here */}</div>
              <div className="d-flex p-3 border-bottom">
                <img
                  src="https://user-images.githubusercontent.com/115906481/235279069-8524aec4-d798-4a11-b1d8-693c634bbf3d.png"
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