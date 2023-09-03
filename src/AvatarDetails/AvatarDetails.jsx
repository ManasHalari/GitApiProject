import { useEffect,useState } from "react";
import Avatar from "../Avatar/Avatar";
import useDebounce from "../customHooks/useDebounce";
import "./AvatarDetails.css"
function AvatarDetails() {
    const[photoData,setphotoData] = useState([])
    const[query,setQuery]=useState("Farman")
    const debounceUpdateSearch = useDebounce((e) => setQuery(e.target.value));

    const getData = async() => {
   
        try {
        const resp=await fetch(`https://api.github.com/search/users?q=${query||"Farman"}`)
        const data = await resp.json()
        setphotoData(data.items)

        } catch (error) {
          console.log("Error while fetching Data",error.message)  
        }
    }


    useEffect(()=>{
        getData()
    },[query])
  return (
    <div>
                 <div>
                <input type="text" onChange={debounceUpdateSearch} id="userInput" placeholder="Enter photo Id"/>
            </div>
            <div id="imageContainer">
               {
                photoData?.map((e)=>{
                    return <Avatar key={e.avatar_url} id={e.login} url={e.avatar_url}/>
                })
               }
              
            </div>
    </div>
  )
}

export default AvatarDetails