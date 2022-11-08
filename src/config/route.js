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
import CreateResult from "../screen/admioncontrol/create result";
import RegisUser from "../screen/admioncontrol/regisUser";
import Home from "../screen/home";
import RegistrationForm from "../screen/registrationform";
import UserCourses from "../screen/Usercourse";
 function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/form" element={<RegistrationForm/>}/>
                <Route path="/course" element={<UserCourses/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/adminlogin" element={<AdminLogin/>}/>
                <Route path="/admindashboard" element={<AdminDashboard/>}/>
                <Route path="/admincourse" element={<Course/>}/>
                <Route path="/admincoursedetail" element={<CourseDetail/>}/>
                <Route path="/adminquiz" element={<AdminQuiz/>}/>
                <Route path="/adminregisuser" element={<RegisUser/>}/>
                <Route path="/createresult" element={<CreateResult/>}/>

            </Routes>
        </Router>
    )
 }
 export default AppRouter