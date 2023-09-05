import "./Navbar.css"

const Navbar = () =>{
    return(
        <div className = "navbar">
            <div className="logo">
                <img src = "logo.svg" alt = ""/>
                <span>Admin</span>
            </div>
            <div className="icons">
                <img src ="search.svg" className="icon" />
                <img src ="app.svg" className="icon" />
                <img src ="expand.svg" className="icon" />
                <div className="notification">
                    <img src = "notifications.svg" alt = ""/>
                    <span>1</span>
                </div>
                <div className="user">
                    <img src = "https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt = "" style = {{width :"25px", height : "25px" , borderRadius : "50%", objectFit : "cover"}}/>
                    <span>Jane</span>
                </div>
                <img src = "setting.svg" alt = "" className="icon"/>
            </div>
        </div>
    )
}

export default Navbar