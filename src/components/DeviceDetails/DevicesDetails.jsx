import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { GadgetContext } from "../Root/Root";

const DevicesDetails = () => {
    const { deviceId } = useParams();
    const data = useLoaderData();
    // console.log(data)
    // console.log(deviceId)

    const id = parseInt(deviceId);
    const device = data?.find(device => device.product_id === id);
    // console.log(device)

    const { cart, setCart } = useContext(GadgetContext);
    const addToCart = (item) => {
        setCart([...cart, item]);
        alert(`${item.product_title} added to cart!`);
        console.log(cart);
    }

    return (

        <div>
            <div className="bg-purple-600 text-center py-8">
                <div>
                    <h3 className="text-white text-[32px] font-bold"> Details</h3>
                    <p className="text-white pt-4 pb-8 w-8/12 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className="mx-auto w-4/5">
                <div className="card lg:card-side shadow-xl">
                    <figure>
                        <div>
                            <img
                                className="max-w-[400px]"
                                src={device.product_image}
                                alt="Album" />
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{device.product_title}</h2>
                        <p className="grow-0">Price: ${device.price}</p>
                        <p>{device.description}</p>
                        <p className="font-bold grow-0">Sepcification:</p>

                        {
                            device.specification.map((spec, index) => <div key={index}>{index + 1}. {spec}</div>)
                        }

                        <p className="font-bold">Rating:</p>
                        <div className="rating">
                            <div>
                                {Array.from({ length: 5 }, (_, index) => (
                                    <input
                                        key={index}
                                        type="radio"
                                        name={`rating-${deviceId}`}
                                        className={`mask mask-star-2 ${index < Math.round(device.rating) ? "bg-orange-400" : "bg-gray-800"}`}
                                        checked={index === Math.round(device.rating) - 1}
                                        readOnly
                                    />
                                ))}
                            </div>
                            <div>
                                <button className="btn btn-xs ml-2">{device.rating}</button>
                            </div>
                        </div>

                        <div className="card-actions justify-start flex items-center">
                            <button onClick={() => addToCart(device)} className="btn bg-[#9538E2] text-white">Add to Cart</button>
                            <Link className="pr-2">
                                <div className="bg-white rounded-full p-4 flex items-center justify-center hover:bg-gray-200 transition duration-200">
                                    <FaRegHeart className="text-black" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default DevicesDetails;