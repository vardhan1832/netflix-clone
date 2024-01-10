import React,{useEffect,useState} from "react";
import "./Navbar.css";
const Navbar = () => {
    const [show,setshow] = useState(false)
    const navTransition = ()=>{
        if(window.scrollY>100){
            setshow(true);
        }else{
            setshow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',navTransition)
        return ()=> window.removeEventListener('scroll',navTransition)
    },[])
  return (
    <div className={`nav ${show && `nav__black`}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
