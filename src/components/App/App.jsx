import Title from "../Title";
import "./_base.scss"
import "./_reset.scss"
import "./_vars.scss"
import "./_section-cart.scss"



function App() {
  return (
    <section className="section-cart">
        <header className="section-cart__header">
            <div className="container">
              <Title />
            </div>
          
        </header>
        <div className="section-cart__body">
            
            <div className="container">

                <section className="cart">
                    <header className="cart-header">
                        <div className="catr-header__title"> Item</div>
                        <div className="cart-header__count">Quantity</div>
                        <div className="cart-headre__cost">Prise</div>
                    </header>

                    <section className="product">
                        <div className="product__img">
                            <img src="./img/products/Computer.jpg" alt="Apple MacBook Air 13" />                            
                        </div>
                        <div className="product__title">
                            Apple MacBook Air 13
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
                            2000 $
                        </div>
                        <div className="product__control">
                            <button type="button">
                                <img src="./img/icons/x.jpg" alt="Delete" />
                            </button>
                        </div>
                    </section>

                    <section className="product">
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
                    </section>

                    <footer className="cart-footer">
                        <div className="cart-footer__count">3 items</div>
                        <div className="cart-footer__prise"> 6000 $</div>                      
                    </footer>
                </section>

            </div> 
        </div>
    </section>
  );
}

export default App;
