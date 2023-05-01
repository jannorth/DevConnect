import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Colors } from '../../colors';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto py-4"
    style={{
      backgroundColor: Colors.primaryColor,
      color: Colors.secondaryColor,
      boxShadow: `0px 0px 5px 5px ${Colors.quarternaryColor}`
      }}>
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-secondary btn-sm me-2 fw-bold text-uppercase"
            onClick={() => navigate(-1)}
            style={{ backgroundColor: Colors.secondaryColor, color: Colors.primaryColor }}
          >
            <i className="bi bi-arrow-left me-2"></i>Go Back
          </button>
        )}
        <h4 style={{ fontWeight: 'bold' }}>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by the DevConnect team.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
