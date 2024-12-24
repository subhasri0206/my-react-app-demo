// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function LoginPage({ loginID, password, setLoginID, setPassword, onSubmit }) {
  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label className="label" htmlFor="loginID">Login ID:</label>
          <input
            type="text"
            id="loginID"
            value={loginID}
            onChange={(e) => setLoginID(e.target.value)}
          />
        </div>
        <div>
          <label className="label" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;
