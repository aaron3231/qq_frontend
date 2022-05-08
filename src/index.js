import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignIn from './view/SignIn';
import GroupList from './view/grouplist';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/grouplist" element={<GroupList/>} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <Router>
//   //   <Routes>
//   //     <Route path="/" component={SignIn}/>
//         //  <Route path="about" component={About}/>
//         // <Route path="users/:userId" component={Users} />
//   //   </Routes>
//   // </Router>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ReactDOM.render(
//   (
    // <Router>
    //   <Route path="/" component={App}>
    //     {/* <Route path="about" component={About}/>
    //     <Route path="users/:userId" component={Users} /> */}
    //   </Route>
    // </Router>
//   ),
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
