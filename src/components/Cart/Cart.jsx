import { useContext } from "react";
import { GadgetContext } from "../Root/Root";

const Cart = () => {
    const { cart, setCart } = useContext(GadgetContext);
    console.log(cart);

    const totalCost = cart?.reduce((total, item) => total + item.price, 0);

    const handleDelete = itemToRemove => {
        const updatedCart = cart.filter(item => item.product_id !== itemToRemove.product_id);
        setCart(updatedCart);
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <h2 className="text-[24px] font-bold">Cart</h2>
                <div className="flex items-center gap-4">
                    <h2 className="font-bold">Total cost: {totalCost.toFixed(2)}</h2>
                    <button class="btn btn-outline btn-primary">Sort by Price</button>
                    <button className="btn text-white btn-primary">Purchase</button>
                </div>
            </div>
            <div>
                {cart.length > 0 ? (
                    cart.map((item) => (
                        <div key={item.product_id} className="flex items-center justify-between p-4 border-b">
                            <div className="flex items-center gap-7">
                                <img src={item.product_image} alt={item.product_title} className="w-16 h-16 object-cover" />
                                <div>
                                    <h3 className="font-bold">{item.product_title}</h3>
                                    <p className="font-light my-3">{item.description}</p>
                                    <p>Price: ${item.price}</p>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => handleDelete(item)} className="btn btn-circle text-red-500 btn-outline">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">Your cart is empty.</p>
                )}
            </div>
        </div>
    );
};

export default Cart;