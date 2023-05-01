import React from "react";
// import icon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icon
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// usage

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
const ProfilePage = ({
  user,
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  return (
    <div className="gradient-custom-2" style={{ backgroundColor: "#003844" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#000", height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <MDBCardImage
                    src="https://user-images.githubusercontent.com/115906481/235279069-8524aec4-d798-4a11-b1d8-693c634bbf3d.png"
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{ width: "150px", zIndex: "1" }}
                  />
                  <MDBBtn
                    outline
                    color="dark"
                    style={{ height: "36px", overflow: "visible" }}
                  >
                    Edit profile
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: "130px" }}>
                  <MDBTypography tag="h5">
                    {user.username}
                    {"   "}

                    {user.recruiter ? (
                      <FontAwesomeIcon icon={faSearch} fa-2xs="true" />
                    ) : (
                      <img />
                    )}
                  </MDBTypography>

                  <MDBCardText>
                    {user.city}, {user.state}
                  </MDBCardText>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBBtn
                      className="m-1"
                      style={{ backgroundColor: "#0082ca" }}
                      href="#"
                    >
                      <MDBIcon fab icon="linkedin-in" />
                    </MDBBtn>
                  </div>
                  <div className="px-3">
                    <MDBBtn
                      className="m-1"
                      style={{ backgroundColor: "#333333" }}
                      href="#"
                    >
                      <MDBIcon fab icon="github" />
                    </MDBBtn>
                  </div>
                  <div>
                    <MDBBtn
                      className="m-1"
                      style={{ backgroundColor: "#55acee" }}
                      href="#"
                    >
                      <MDBIcon fab icon="twitter" />
                    </MDBBtn>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <MDBCardText className="font-italic mb-1">
                      Front-End Web Developer
                    </MDBCardText>
                    <MDBCardText className="font-italic mb-1">
                      Lives in Richmond, Virginia
                    </MDBCardText>
                    <MDBCardText className="font-italic mb-0">
                      Actively searching for new opportunities.
                    </MDBCardText>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">
                    Recent Post
                  </MDBCardText>
                  <MDBCardText className="mb-0"></MDBCardText>
                </div>
                <MDBRow></MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ProfilePage;

// export const Colors = {
//   primaryColor: '#003844',
//   secondaryColor: '#FFB100',
//   tertiaryColor: '#FFEBC6',
//   quarternaryColor: '#EF81A7'
// };
