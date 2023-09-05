import {Link} from "react-router-dom"
import "./Menu.css"
import {menu} from "../../data.js"
console.log(menu)
const Menu = () =>{
    return( 
    <div className = "menu">
       {menu.map((item) => (
         <div className="item" key = {item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
             <Link to = {listItem.url} className = "listItem" key = {listItem.id}>
                <img src = {listItem.icon} alt = "" />
                <span className="listItemTitle">{listItem.title}</span>
             </Link>
       ))}
          </div>
       ))}
     </div>
    )
}

export default Menu