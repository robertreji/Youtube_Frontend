import { Route, Routes } from "react-router-dom";
import Authentication from "./components/auth/authenticationWrapper";
import HomeLayout from "./Layouts/HomeLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ProfilePageLayout from "./Layouts/ProfilePageLayout";
import ProfilePageHome from "./pages/ProfilePageHome";
import ProfilePageUserVideos from "./pages/ProfilePageUserVideos";
import Video from "./pages/VideoPage";

function App() {
  return (
    <div className="w-full flex flex-col bg-[#212121] h-screen overflow-hidden caret-transparent">
      <Routes>
        <Route path="/" element={<Authentication><HomeLayout/></Authentication>}>

          <Route index element={<Home/>}/>
          <Route path="videos/vid/:id" element={<Video/>}/>
          <Route element={<ProfilePageLayout/>}>
            <Route  path="profile"  element={<ProfilePageHome/>}/>
            <Route path="uservideos" element={<ProfilePageUserVideos/>}/>
          </Route> 
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App
