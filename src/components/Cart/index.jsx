import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import Product from "../Product";

function Cart () { 
    return ( 
        <section className="cart">
            <CartHeader />
            <Product />
            <CartFooter /> 


        {/* <section className="product">
            <div className="product__img">
                <img src="./img/products/Apple watch.jpg" alt="Apple watch" />                            
            </div>
            <div className="product__title">
                Apple watch
            </div>

            <div className="product__count">
                <div className="count">
                    <div className="count__box">
                        <input type="number" className="count__input" min="1" max="100" value="1" />                                    
                    </div>
                    <div className="count__controls">
                        <button type="button" className="count__up">
                            <img src="./img/icons/icon-up.svg" alt="Increase" />
                        </button>
                        <button type="button" className="count__down">
                            <img src="./img/icons/icon-down.svg" alt="Decrease" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="product__price">
                1000 $
            </div>
            <div className="product__control">
                <button type="button">
                    <img src="./img/icons/x.jpg" alt="Delete" />
                </button>
            </div>
        </section>

        <section className="product">
            <div className="product__img">
                <img src="./img/products/Mac Pro.jpg" alt="Mac Pro" />                            
            </div>
            <div className="product__title">
                Mac Pro
            </div>

            <div className="product__count">
                <div className="count">
                    <div className="count__box">
                        <input type="number" className="count__input" min="1" max="100" value="1" />                                    
                    </div>
                    <div className="count__controls">
                        <button type="button" className="count__up">
                            <img src="./img/icons/icon-up.svg" alt="Increase" />
                        </button>
                        <button type="button" className="count__down">
                            <img src="./img/icons/icon-down.svg" alt="Decrease" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="product__price">
                3000 $
            </div>
            <div className="product__control">
                <button type="button">
                    <img src="./img/icons/x.jpg" alt="Delete" />
                </button>
            </div>
        </section> */}


    </section>
     );
}

export default Cart ;
