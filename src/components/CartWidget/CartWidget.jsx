import React from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/CarritoContext';

const CartWidget = ({ cantCarrito }) => {
    const { getItemQuantity } = useCarritoContext()

    return (
            <Link className='nav-link text-center' to={"/cart"}>
                <img className='cart' src={"https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/cart.png?alt=media&token=4a697066-7b82-4f82-a06c-984fa8f11c93"} alt="" />
                {getItemQuantity() > 0 && <p className='contador'>{getItemQuantity()}</p>}
            </Link>
    );
}

export default CartWidget;
