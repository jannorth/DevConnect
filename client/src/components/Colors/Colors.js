import React from 'react';
import { Colors } from './Colors';

function MyComponent() {
  return (
    <div style={{ 
      backgroundColor: Colors.primaryColor, 
      color: Colors.secondaryColor,
      border: `2px solid ${Colors.tertiaryColor}`,
      boxShadow: `0px 0px 10px 5px ${Colors.quarternaryColor}`
    }}>
      {/* your component code here */}
    </div>
  );
}

export default MyComponent;