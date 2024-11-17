import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useState } from "react";
import Wishlist from "../Wishlist/Wishlist";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('cart');
    return (
        <>
            <div>
                <div className="bg-purple-600 text-center py-8">
                    <h3 className="text-white text-[32px] font-bold">Dashboard</h3>
                    <p className="text-white pt-4 pb-8 w-8/12 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                    <button onClick={() => setActiveTab("cart")} className={`btn rounded-full py-3 px-6 mr-6 ${activeTab === "cart" ? "bg-white text-purple-600" : "text-white btn-outline"
                        }`}>
                        Cart
                    </button>


                    <button onClick={() => setActiveTab("wishlist")} className={`btn rounded-full py-3 px-6 mr-6 ${activeTab === "wishlist" ? "bg-white text-purple-600" : "text-white btn-outline"
                        }`}>
                        Wishlist
                    </button>

                </div>
                <div className="mt-8">
                    {activeTab === "cart" && <Cart />}
                    {activeTab === "wishlist" && <Wishlist />}
                </div>
            </div>

        </>
    )
}

export default Dashboard;