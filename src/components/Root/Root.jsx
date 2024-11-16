import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";



const Root = () => {
    return (
        <div className="bg-[#F6F6F6]">
            <div className="max-w-screen-xl mx-auto px-4">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default Root;