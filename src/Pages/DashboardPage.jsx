// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function DashboardPage({ logout }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default DashboardPage;
