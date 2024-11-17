import { useContext, useState } from "react";
import { GadgetContext } from "../Root/Root";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, setCart } = useContext(GadgetContext);
    const [sortedCart, setSortedCart] = useState([...cart]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    // console.log(cart);

    const totalCost = cart?.reduce((total, item) => total + item.price, 0);

    const handleDelete = itemToRemove => {
        const updatedCart = cart.filter(item => item.product_id !== itemToRemove.product_id);
        setCart(updatedCart);
        setSortedCart(updatedCart)
    }

    const sortByPrice = () => {
        const sorted = [...sortedCart].sort((a, b) => b.price - a.price);
        setSortedCart(sorted);
    }

    const handlePurchase = () => {
        setShowModal(true);
        setCart([]);
        setSortedCart([]);
    };

    const closeModal = () => {
        setShowModal(false);
        navigate("/");
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <h2 className="text-[24px] font-bold">Cart</h2>
                <div className="flex items-center gap-4">
                    <h2 className="font-bold">Total cost: {totalCost.toFixed(2)}</h2>
                    <button onClick={sortByPrice} class="btn btn-outline btn-primary">Sort by Price</button>
                    <button
                        onClick={handlePurchase}
                        disabled={cart.length === 0 || totalCost === 0}
                        className="btn text-white btn-primary">Purchase</button>
                </div>
            </div>
            <div>
                {sortedCart.length > 0 ? (
                    sortedCart.map((item) => (
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
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">🎉 Congratulations!</h2>
                        <p className="mb-6">Thank you for your purchase! Your cart is now empty.</p>
                        <button
                            onClick={closeModal}
                            className="btn btn-primary text-white"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;