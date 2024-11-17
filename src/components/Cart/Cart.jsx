import { useContext } from "react";
import { GadgetContext } from "../Root/Root";

const Cart = () => {
    const { cart } = useContext(GadgetContext);
    console.log(cart);

    return (
        <div>
            <h1>Cart</h1>
        </div>
    );
};

export default Cart;