
import React, { useEffect } from "react";
import { BrowserRouter as Router,  Routes ,Route} from "react-router-dom";
import Login from "./components/user/Auth/LoginForm/Login.jsx";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./action/UserAuthActions.js";
import Home from "../../frontend/src/components/user/Home/Home.jsx";
import SidebarAdmin from "./Admin/sidebar/sidebar.jsx";
import ProtectedRoute from "./ProtectedRoute.js";
import Profile from "./components/user/mobile/profle/profile.jsx";
import MobileBottomNavigation from "./components/user/mobile/mobilebottomnav/bottomnav.jsx";


// ============= Admin =============//
import Category from "./Admin/categoryMaster/category/category.jsx";
import SubCategory from "./Admin/categoryMaster/subCategory/subcategory.jsx";
import Homeadmin from "./Admin/Home/Home.jsx";
import Navigation from "./components/user/inc/navigationBar/navigation.jsx";
import Services from "./components/user/pages/Services/Services.jsx";



function App() {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
const token = localStorage.getItem("token")
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  useEffect(() => {
    // Reload the page when user's role changes
    if (user && user.user && user.user.role) {
      // window.location.reload();
    }
  }, [user]);

  return (
    user?.user?.role === "admin"?<>
    <Router>
      <SidebarAdmin user={user} />
      <Routes>
        <Route path="/" element={<ProtectedRoute isAdmin={true} element={Homeadmin}
        />} />
         <Route path="/login" element={<Login />} />
         <Route path="/Category" element={<Category />} />
         <Route path="/SubCategory" element={<SubCategory />} />
      </Routes>
 
    </Router>
    </>
    :

    <>
    <Router>
      {/* <Navigation user ={user}/> */}
      {/* <MobileBottomNavigation/> */}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/category/:id" element={<Services />} />
      </Routes>
      
    </Router>
    </>
  );
}

export default App;
