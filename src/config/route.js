import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "../screen/admioncontrol/admin";
import AdminDashboard from "../screen/admioncontrol/admindashboard";
import AdminLogin from "../screen/admioncontrol/adminlogin";
import AdminQuiz from "../screen/admioncontrol/adminquiz";
import City from "../screen/admioncontrol/city";
import Country from "../screen/admioncontrol/country";
// import AdminResult from "../screen/admioncontrol/adresult";
import Course from "../screen/admioncontrol/course";
import CourseDetail from "../screen/admioncontrol/coursedetail";
import CreateResult from "../screen/admioncontrol/create result";
import RegisUser from "../screen/admioncontrol/regisUser";
import Result from "../screen/adresult";
import Home from "../screen/home";
import Profile from "../screen/profil";
import QuizApp from "../screen/quiz";
import RegistrationForm from "../screen/registrationform";
import UserCourses from "../screen/Usercourse";
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<RegistrationForm />} />
        <Route path="/course" element={<UserCourses />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/admincourse" element={<Course />} />
        <Route path="/admincoursedetail" element={<CourseDetail />} />
        <Route path="/adminquiz" element={<AdminQuiz />} />
        <Route path="/adminregisuser" element={<RegisUser />} />
        <Route path="/createresult" element={<CreateResult />} />
        <Route path="/country" element={<Country />} />
        <Route path="/city" element={<City />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/result" element={<Result />} />
        <Route path="/quiz" element={<QuizApp />} />
      </Routes>
    </Router>
  );
}
export default AppRouter;
