import './App.css';
import Header from './components/Header';
import AddForm from './components/AddForm'
import Item from './components/Item';
import { useState ,useEffect} from 'react';
function App() {
  // กรณที่เคยบันทึกข้อมูลลงมน tasks ให้เอาข้อมูลมาแสดง
  const [tasks,setTasks] = useState( JSON.parse(localStorage.getItem("tasks"))|| [])
  const [title,setTitle] = useState("")
  const [editId,setEditId] = useState(null)
  const [theme,setTheme] = useState("light")


  // ทำงานในตอนเริ่มต้น และตอนที่มีการเปลี่ยนแปลง state ทุกๆตัว
  //แบบที่1

  // useEffect(()=>{
  //   console.log("useEffect test")
  // })

  //แบบที่2 ทำงานแค่รอบเดียว
  // useEffect(()=>{
  //   console.log("useEffect test")
  // },[])


  //แบบที่3 ทำงานเฉพาะ state ที่ใส่ลงไป

  useEffect(()=>{
    //เก็บข้อมูล ใน localStorage รูปแบบ JSON
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])

  

  function deleteTask(id){
    const result = tasks.filter(item=>item.id != id)
    setTasks(result)
  }

  function editTask(id){
    setEditId(id)
    const editTask = tasks.find((item)=>item.id === id)
    console.log(editTask)
    setTitle(editTask.title)

  }
  function seveTask(e){
    // ไม่่ทำการ รี หน้า
    e.preventDefault()
    console.log("save data")
    if(!title){
      alert("title can't be empty")

    }
    else if(editId){ // edit is not null
      // edit data
      const updateTask = tasks.map((item)=>{
        // id ที่ต้องการแก้ไข
        if(item.id === editId){
          return {...item,title:title}
        }
        return item
      })
      setTasks(updateTask)
      setEditId(null)
      setTitle("")
    }
    
    else{
      // add data
      const newTask ={
        id: Math.floor(Math.random()*1000),
        title:title
      }
      // ทำหารเพิ่มข้อมูล โดยต้องเอาข้อมูลเดิมมาแล้วเพิมข้อมูล
      setTasks([...tasks,newTask])
      setTitle("")
    }
  }
  return (
    <div className={"App " + theme}>
      <Header theme={theme} setTheme={setTheme}/>
      <div className='container'>
        {/* ส่ง props title settitle saveTask ไป Addform */}
        <AddForm title={title} setTitle={setTitle} saveTask={seveTask} editId={editId}   />
        <section>
          {
            // map task เก็บ  ใน data และ แสดงผลเป็น item มี key เป็น id และ
            // ส่ง props data deleteTask
            tasks.map(data=>(
              <Item key={data.id} data={data} deleteTask={deleteTask}  editTask={editTask}/>
            ))
          }
        </section>
      </div>
      
    </div>
  
  )
  
}

export default App;
