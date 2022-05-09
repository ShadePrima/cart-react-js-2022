import { useState } from "react";
import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import Product from "../Product";
import data from "./../../data";

function Cart () { 

    const [cart, setCart] = useState(data)

    const deleteProduct =  (id) => { 

        setCart((cart) => {
            return cart.filter((product) => { return id !== product.id })
        })
    }

    const products = cart.map((product) => {
        return (
            <Product 
                product={product} 
                key={product.id}
                deleteProduct = {deleteProduct}
            />)
    }) 

    console.log(cart)
      
    return ( 
        <section className="cart">
            <CartHeader />
            {products}
            <CartFooter />
        </section>
     );
}

export default Cart ;
