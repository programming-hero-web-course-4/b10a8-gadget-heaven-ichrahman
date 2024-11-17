import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { createContext, useEffect, useState } from "react";

export const GadgetContext = createContext();


const Root = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className="bg-[#F6F6F6]">
            <GadgetContext.Provider value={[data]}>
                <div className="max-w-screen-xl mx-auto px-4">
                    <Navbar />
                    <Outlet />
                    <Footer />
                </div>
            </GadgetContext.Provider>
        </div>
    );
};

export default Root;