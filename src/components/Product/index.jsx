import ButtonDelete from "../ButtonDelete";
import Count from "../Count";
import "./style.scss"

const Product = ({product}) => {
    return ( 
        <section className="product">
        <div className="product__img">
            <img src="./img/products/Computer.jpg" alt="Apple MacBook Air 13" />                            
        </div>
        <div className="product__title">
            {product.title}
        </div>

        <div className="product__count">
            {/* <Count /> */}
        </div> 

        <div className="product__price">
            {product.prise} $
        </div>
        <div className="product__control">
            <ButtonDelete />
        </div>
    </section>
    );
}
 
export default Product;