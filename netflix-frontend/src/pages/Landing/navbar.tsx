import { useNavigate } from "react-router";
import DefaultButton from "../../components/modules/LandingPage/Button";
import OptionLanguage from "../../components/modules/LandingPage/OptionLanguage";
function Navbar(){
    const navigate = useNavigate();
    return (
    <header className="container mx-auto">
        <nav className="flex justify-between items-center ">
            <div className="">
                <img src="../../public/netflix_logo_icon.png" alt="Netflix" className="w-50" />
            </div>
            <div className="flex items-center gap-4 ">
                <OptionLanguage />
                <DefaultButton text={"Sign In"} onClick={() => navigate("/login")}/>
            </div>
        </nav>
    </header> 
    )
}

export default Navbar;