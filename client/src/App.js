// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import Main from './test/Main'
// import Main from "./test/Main"
// import Membership from './view/Membership';
// import SignUp from './components/signup';
// import Login from './components/login';
// // import "bootstrap/dist/css/bootstrap.min.css"

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         {/* <nav style={{width: '100vw', display: 'flex', justifyContent: 'end'}}>
//           <Link to="/" style={{margin: '10px', textDecoration: 'none', color: 'black'}}>Home</Link>
//           <Link to="/membership"style={{margin: '10px', textDecoration: 'none', color: 'black'}} >Membership</Link>
//         </nav> */}
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/membership" element={<Membership />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./test/Main"
import Membership from './view/Membership';
import SignUp from './components/signup';
import Login from './components/login';
import withAuthentication from './script/withAuthentication'
import Navigation from './navigation/navigation';
import FindUsers from './view/findusers';
import Test from './view/test';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/findusers" element={<Test />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


