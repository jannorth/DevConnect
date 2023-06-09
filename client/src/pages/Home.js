import React from "react";
import { useQuery } from "@apollo/client";

import { Colors } from "../colors";

import ThoughtList from "../components/ThoughtList";
import ThoughtForm from "../components/ThoughtForm";

import { QUERY_THOUGHTS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div
        style={{
          backgroundColor: Colors.primaryColor,
          color: Colors.secondaryColor,
          border: `2px solid ${Colors.tertiaryColor}`,
          boxShadow: `0px 0px 10px 5px ${Colors.quarternaryColor}`,
        }}
      >
        <div className="flex-row justify-center">
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: "1px dotted #1a1a1a" }}
          >
            <ThoughtForm />
          </div>
          <div className="col-12 col-md-8 mb-3 d-flex justify-content-center">
  {loading ? (
    <div>Loading...</div>
  ) : (
    <ThoughtList
      thoughts={thoughts}
      title="Code, Connect & Collaborate. "
      className="mx-auto"
    />
  )}
</div>
        </div>
      </div>
    </main>
  );
};

export default Home;