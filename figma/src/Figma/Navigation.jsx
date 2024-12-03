import { Link } from "react-router-dom";
import "./index.css"
function Navigation(){
    return(
        <div className="nav">
         <Link style={{textDecoration:"none",}}to="/">Figma</Link>
         <Link style={{textDecoration:"none"}}to="/productfile">ProductFile</Link>
         <Link style={{textDecoration:"none"}}to="cart">Cart</Link>
        </div>
    )
}
export default Navigation;