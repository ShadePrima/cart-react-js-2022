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

    const increase = (id) => { 
        console.log('Increase111', id)

        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: ++product.count,
                        priceTotal: product.count * product.priceTotal
                    }
                }
                return product
      
            })
        })

    } 

    const products = cart.map((product) => {
        return (
            <Product 
                product={product} 
                key={product.id}
                deleteProduct = {deleteProduct}
                increase={increase}
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
