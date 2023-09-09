import "./Navbar.css"
import Logo from "../../assets/logo.png";
import PublicIcon from '@mui/icons-material/Public';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Navbar = () => {
    return (
        <div className="navbar_container">
            <div className="logo_container">
                {/* <img className="logo" src={Logo} alt="logo" /> */}
                <h3>DEVKIT</h3>
            </div>
            <div className="right_navbar">
                <label>Documentation <PublicIcon /></label>
                <label>Github  <GitHubIcon /></label>
            </div>
        </div>
    )
}