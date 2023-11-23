import "./AddForm.css";
export default function AddForm(props){
    const {title,setTitle,saveTask,editId} = props
    return(
        <>
            <h2>Task Management</h2>
            {/* เมื่อกด submit จะใช้ function saveTask */}
            <form onSubmit={saveTask} >
                <div className="form-control">
                    <input type="text" className="text-input" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    {/* click จาก here */}
                    <button type="submit" className="submit-btn">{editId? "edit" : "add"}</button>
                </div>
            </form>

        </>
    )
}