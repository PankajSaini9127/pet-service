import { List, ListItem} from "@mui/material";

//css
import "../../assets/css/module/menuList.css"

export function Menu_List({options}){

  
    return (
      <>
      <List className="nav-hamburger-list">
        {
          options&& options.map((item,i)=>(
            <ListItem key={i} className="nav-sublist-item">{item.text}</ListItem>
          ))
        }
      </List>
      </>
    )
}