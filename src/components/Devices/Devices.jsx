import { useContext, useState } from "react";
import { GadgetContext } from "../Root/Root";
import { Link } from "react-router-dom";


const Devices = () => {
    const [data] = useContext(GadgetContext);
    // console.log(data)

    const [activeCategory, setActiveCategory] = useState("All Products");

    const filtereddata = activeCategory === "All Products" ? data : data.filter(item => item.category === activeCategory);


    return (
        <div className="mt-20">
            <h2 className="text-center text-4xl font-bold mb-12">Explore Cutting-Edge Gadgets</h2>
            <div className="grid grid-cols-3 gap-8">
                <div className="flex flex-col gap-4">
                    <button onClick={() => setActiveCategory("All Products")}
                        className={`btn rounded-full py-2 px-7 w-40 ${activeCategory === "All Products" ? "bg-purple-600 text-white" : "bg-gray-100 text-black"
                            }`}>
                        All Products
                    </button>
                    <button onClick={() => setActiveCategory("Wearables")}
                        className={`btn rounded-full py-2 px-7 w-40 ${activeCategory === "Wearables" ? "bg-purple-600 text-white" : "bg-gray-100 text-black"
                            }`}>
                        Wearables
                    </button>
                    <button onClick={() => setActiveCategory("Computers")}
                        className={`btn rounded-full py-2 px-7 w-40 ${activeCategory === "Computers" ? "bg-purple-600 text-white" : "bg-gray-100 text-black"
                            }`}>
                        Computers
                    </button>
                    <button onClick={() => setActiveCategory("Drones")}
                        className={`btn rounded-full py-2 px-7 w-40 ${activeCategory === "Drones" ? "bg-purple-600 text-white" : "bg-gray-100 text-black"
                            }`}>
                        Drones
                    </button>
                </div>
                <div className="col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            filtereddata?.map(item =>
                                <div item={item} key={item.product_id} className="card card-compact shadow-xl">
                                    <figure>
                                        <img className="h-[190px]"
                                            src={item.product_image} />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item.product_title}</h2>
                                        <p>Price: ${item.price}</p>
                                        <div className="card-actions justify-start">
                                            <Link to={`/devices/${item.product_id}`}><button className="btn bg-white rounded-full bg-[#09080f0d] text-black font-medium py-2 px-7 w-40">
                                                View Details
                                            </button></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Devices;