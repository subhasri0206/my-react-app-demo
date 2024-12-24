// // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import './App.css';
// import withAuthentication from './Pages/withAuthentication';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Contact from './Pages/Contact';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const login = () => setIsAuthenticated(true);
//   const logout = () => setIsAuthenticated(false);

//   const AuthenticatedHome = withAuthentication(Home);

//   return (
//     <div>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             isAuthenticated ? (
//               <AuthenticatedHome logout={logout} />
//             ) : (
//               <div>
//                 <p>Please log in to access the Home page.</p>
//                 <button onClick={login}>Login</button>
//               </div>
//             )
//           }
//         />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';
import DashboardPage from './Pages/DashboardPage';

function App() {
  const [loginID, setLoginID] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const predefinedLoginID = 'admin';
  const predefinedPassword = '1234';

  const handleLogin = (event) => {
    event.preventDefault();
    if (loginID === predefinedLoginID && password === predefinedPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Authentication Failed!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <DashboardPage logout={handleLogout} />
            ) : (
              <LoginPage
                loginID={loginID}
                password={password}
                setLoginID={setLoginID}
                setPassword={setPassword}
                onSubmit={handleLogin}
              />
            )
          }
        />
        <Route path="/dashboard" element={<DashboardPage logout={handleLogout} />} />
      </Routes>
    </div>
  );
}

export default App;
