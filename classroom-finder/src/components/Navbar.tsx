import { Link } from "react-router-dom";
import Logo from "../../public/classroom-finder-logo.svg";
const Navbar = () => {
    return (
        <nav className="shadow-md bg/white dark:bg/gry-800 dark:text-white">
            {/*Upper Navbar*/}
            <div>
                <div className="bg-uo-beige/40 py-2">
                    <div className='container flex justify-between items-center'>    
                        <div className="className='font-bold text-2xl sm:text-3xl flex gap-2'">
                            <Link to='/'>
                                <img src={Logo} alt="Logo" />
                                GG Campus Mapper
                            </Link>
                        </div>
                        <div className="links">
                            <Link to='/map'>Find a free area</Link>
                        </div>
                    </div>    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;