import { Link, useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
    const location = useLocation();

    const isHomePage = location.pathname === '/' || location.pathname === '/home';


    const links = <>
        <li><Link className="hover:text-[#9538E2] hover:bg-white rounded" to="/">Home</Link></li>
        <li className="hover:text-[#9538E2] hover:bg-white rounded"><Link to="/statistics">Statistics</Link></li>
        <li className="hover:text-[#9538E2] hover:bg-white rounded"><Link to="/dashboard">Dashboard</Link></li>
    </>


    return (
        <>
            <div className={`navbar ${isHomePage ? 'bg-purple-600 text-white' : 'bg-white text-black'}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="Toggle Menu">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow-lg bg-purple-600 text-white">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl">Gadget Heaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="mr-3"> <div className="bg-white rounded-full p-2 flex items-center justify-center hover:bg-gray-200 transition duration-200">
                        <MdOutlineShoppingCart className="text-black" />
                    </div></Link>
                    <Link className="pr-2">
                        <div className="bg-white rounded-full p-2 flex items-center justify-center hover:bg-gray-200 transition duration-200">
                            <FaRegHeart className="text-black" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;