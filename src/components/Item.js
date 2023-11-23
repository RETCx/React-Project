import "./Item.css"
import { BsTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
export default function Item(props){
    const {data,deleteTask,editTask} = props 
    return(
        <div className="list-item">
            <p className="title">{data.title}</p>
            <div className="button-container">
                {/* เมื่อ click จะเรียกใช้ function deleteTask */}
                <BsTrashFill className="btn" onClick={()=>deleteTask(data.id)}/>
                <FaEdit className="btn" onClick={()=>editTask(data.id)}/>
            </div>
        </div>
    )
}