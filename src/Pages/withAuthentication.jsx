/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React from 'react';

const withAuthentication = (WrappedComponent) => {
  // eslint-disable-next-line react/prop-types
  return ({ logout, ...props }) => (
    <div>
      <WrappedComponent {...props} />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default withAuthentication;
