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
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: ++product.count,
                        priceTotal: product.count * product.price
                    }
                }
                return product      
            })
        })

    } 
    const decrease = (id) => { 
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {

                    const newCount = product.count - 1 > 1 ? product.count -1 : 1

                    return {
                        ...product,
                        count: newCount,
                        priceTotal: newCount * product.price
                    }
                }
                return product      
            })
        })

    } 

    const changeValue = (id, value) => {
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {
                    return {
                         ...product,
                        count: value,
                        priceTotal: value * product.price
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
                decrease={decrease}
                changeValue={changeValue}
            />)
    }) 

     
    return ( 
        <section className="cart">
            <CartHeader />
            {products}
            <CartFooter />
        </section>
     );
}

export default Cart ;
