import "./Header.css"
import { MdDarkMode } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";
export default function Header(props){
    const {theme,setTheme} = props
    function ToggleTheme(){
        if(theme === "light"){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }
    return(
        <header>
            <div className="logo">
                <span>Task Management</span>
            </div>
            <div className="theme-container">
                <span>{theme}</span>
                <span className="icon" onClick={ToggleTheme}>
                    {theme === 'light' ? <IoIosSunny/> : <MdDarkMode/>}
                </span>
            </div>
        </header>
    )
}