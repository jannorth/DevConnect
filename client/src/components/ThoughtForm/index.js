import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_THOUGHT } from "../../utils/mutations";
import { QUERY_THOUGHTS, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";

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

const ThoughtForm = () => {
  const [thoughtText, setThoughtText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addThought({
        variables: {
          thoughtText,
          thoughtAuthor: Auth.getProfile().data.username,
        },
      });

      setThoughtText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'thoughtText' && value.length <= 280) {
      setThoughtText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h4 className="d-flex align-items-center mb-0">
      Network and Unlock New Career Opportunities!
      </h4>

      <MDBCard style={{ width: "100%" }}>
        <div className="border border-left border-right px-0">
          <div className="p-3 border-bottom">
            <h4 className="d-flex align-items-center mb-0">
              
              <MDBIcon
                far
                icon="star"
                size="xs"
                color="primary"
                className="ms-auto"
              />
            </h4>
          </div>
          <MDBCard className="shadow-0">
            <MDBCardBody className="border-bottom pb-2">
              <div className="d-flex">
                <img
                  src="https://user-images.githubusercontent.com/115906481/235279069-8524aec4-d798-4a11-b1d8-693c634bbf3d.png"
                  className="rounded-circle"
                  height="50"
                  alt="Avatar"
                  loading="lazy"
                />
                <div className="d-flex align-items-center w-100 ps-3">
                  <div className="w-100">
                    {Auth.loggedIn() ? (
                      <>
                        <p
                          className={`m-0 ${
                            characterCount === 280 || error ? "text-danger" : ""
                          }`}
                        >
                          Character Count: {characterCount} /280
                        </p>
                        <form
                          className="flex-row justify-center justify-space-between-md align-center"
                          onSubmit={handleFormSubmit}
                        >
                          <input
                            name="thoughtText"
                            placeholder="Share..."
                            value={thoughtText}
                            className="form-input w-100"
                            style={{ lineHeight: "1.5", resize: "vertical" }}
                            onChange={handleChange}
                          />
                          <div className="d-flex align-items-center ">
                            <MDBBtn rounded>Connect</MDBBtn>
                          </div>
                        </form>
                        <a href="#!">
                          <MDBIcon far icon="image" className="pe-2" />
                        </a>
                      </>
                    ) : (
                      <p>
                        You need to be logged in to share . Please{" "}
                        <Link to="/login">login</Link> or{" "}
                        <Link to="/signup">signup.</Link>
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between"></div>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBCard>
    </div>
  );
};
export default ThoughtForm;
