import Addtodoform from "./Addtodoform"
import Todolist from "./todolist"
import { useState } from "react"


function Todocontainer() {
    const [activityarr, setactivityarr] = useState([
        {
            id: 1,
            activity: "Go for a walk"
        },
        {
            id: 2,
            activity: "Have Breakfast"
        },
        {
            id:3,
            activity:"Take a shower"
        }
    ])
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
               <Addtodoform activityarr={activityarr} setactivityarr={setactivityarr}/>
                <Todolist activityarr={activityarr} setactivityarr={setactivityarr}/>
            </div>
        </div>
    )
}
export default Todocontainer