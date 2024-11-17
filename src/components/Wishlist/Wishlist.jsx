import { useContext } from "react";
import { GadgetContext } from "../Root/Root";

const Wishlist = () => {
    const { wishlist, setWishList, cart, setCart } = useContext(GadgetContext);
    console.log(wishlist)

    const handleDelete = itemToRemove => {
        const updatedWishList = wishlist.filter(item => item.product_id !== itemToRemove.product_id);
        setWishList(updatedWishList);
    }

    const addToCart = item => {
        const isAlreadyInCart = cart.find(cartItem => cartItem.product_id === item.product_id);

        if (!isAlreadyInCart) {
            setCart([...cart, item]);
            alert(`${item.product_title} added to cart!`);
        } else {
            alert(`${item.product_title} is already in the cart.`);
        }
    }

    return (
        <div>
            <h2 className="text-[24px] font-bold">Wishlist</h2>
            <div>
                {wishlist.length > 0 ? (
                    wishlist.map((item) => (
                        <div key={item.product_id} className="flex items-center justify-between p-4 border-b">
                            <div className="flex items-center gap-7">
                                <img src={item.product_image} alt={item.product_title} className="w-16 h-16 object-cover" />
                                <div>
                                    <h3 className="font-bold">{item.product_title}</h3>
                                    <p className="font-light my-3">{item.description}</p>
                                    <p>Price: ${item.price}</p>
                                    <button onClick={() => addToCart(item)} className="btn bg-[#9538E2] text-white my-2">Add to Cart</button>
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
                    <p className="text-gray-500">Your Wishlist is empty.</p>
                )}
            </div>
        </div>
    );
};

export default Wishlist;