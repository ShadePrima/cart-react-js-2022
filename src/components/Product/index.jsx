import Count from "../Count";
import "./style.scss"

const Product = () => {
    return ( 
        <section className="product">
        <div className="product__img">
            <img src="./img/products/Computer.jpg" alt="Apple MacBook Air 13" />                            
        </div>
        <div className="product__title">
            Apple MacBook Air 13
        </div>

        <div className="product__count">
            <Count />
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
    );
}
 
export default Product;