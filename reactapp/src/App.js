import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Student from "./pages/Student";
import Addstudent from './pages/Addstudent';
import Editstudent from './pages/Editstudent';
import Navbar from './pages/Navbar';
function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/add-student" element={<Addstudent />} />
        <Route path="/edit-student/:id"  element={<Editstudent  />}/>
      </Routes>
    </Router>
  );
}

export default App;
