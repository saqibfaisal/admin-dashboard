import React from "react";
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Admin from "../screen/admioncontrol/admin";
import AdminDashboard from "../screen/admioncontrol/admindashboard";
import AdminLogin from "../screen/admioncontrol/adminlogin";
import AdminQuiz from "../screen/admioncontrol/adminquiz";
import Course from "../screen/admioncontrol/course";
import CourseDetail from "../screen/admioncontrol/coursedetail";
import RegistrationForm from "../screen/registrationform";
 function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RegistrationForm/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/adminlogin" element={<AdminLogin/>}/>
                <Route path="/admindashboard" element={<AdminDashboard/>}/>
                <Route path="/admincourse" element={<Course/>}/>
                <Route path="/admincoursedetail" element={<CourseDetail/>}/>
                <Route path="/adminquiz" element={<AdminQuiz/>}/>
            </Routes>
        </Router>
    )
 }
 export default AppRouter