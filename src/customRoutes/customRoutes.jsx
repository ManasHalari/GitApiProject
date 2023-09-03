import { Route, Routes } from "react-router-dom"
import GitAvatarList from "../GitAvatarList/GitAvatarList"
import AvatarDetails from "../AvatarDetails/AvatarDetails"

// import { HomePage } from "../Pages/HomePage"


export const CustomRoute=()=>{
    return(
        <Routes>
        <Route path="/" element={<GitAvatarList/>}/>
        <Route path="/profile" element={<AvatarDetails/>}/>
        
        
    </Routes>
    )
}