import { List, ListItem} from "@mui/material";

//css
import "../../assets/css/module/menuList.css"
import { Link } from "react-router-dom";

export function MenuList({options}){

  
    return (
      <>
      <List className="nav-hamburger-list">
        {
          options&& options.map((item,i)=>(
            <Link to={item.navigate} className="nav-link-tag">
            <ListItem key={i} className="nav-sublist-item">{item.text}</ListItem>
            </Link>
          ))
        }
      </List>
      </>
    )
}