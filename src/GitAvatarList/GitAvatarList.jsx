import "./GitAvatarList.css"
import axios from "axios"
import { useEffect, useState } from "react"
// import Avatar from "../Avatar/Avatar.jsx"
import Search from "../Search/Search"
import Avatare from "../AvatarDetails/Avatare.jsx"

function GitAvatarList() {
    let [gitUrl,setGitUrl]=useState([])
    let [isloading,setIsLoading]=useState(true)
    function randomAvatarId() {
       const randomId=Math.floor(Math.random()*10000000)
       return randomId
    }
   async function downloadAvatars() {
    let allUrl=[]
        for (let i = 0; i < 9; i++) {
            let GitUrl=`https://avatars.githubusercontent.com/u/${randomAvatarId()}?v=4`
            allUrl.push(GitUrl)
        }
        console.log("allUrl",allUrl);
        
        let urlPromise=allUrl.map((e)=>axios.get(e))
        let resp=await axios.all(urlPromise)
        console.log(resp);
        const urls=resp.map((e)=>e.config.url)
        setGitUrl(urls)
        setIsLoading(false)
    }
    useEffect(()=>{
        downloadAvatars()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
  return (
    <>
    <Search/>
    <div className="gitlist-wrapper">
         
         {(isloading)?"...Loading":gitUrl.map((e)=><Avatare key={e} avatar={e}/>)}
    </div>
    </>
  )
}

export default GitAvatarList