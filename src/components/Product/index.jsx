import ButtonDelete from "../ButtonDelete";
import Count from "../Count";
import "./style.scss"

const Product = ({product, deleteProduct}) => {
    const {img, title, prise, count, id} = product
    return ( 
        <section className="product">
        <div className="product__img">
            <img src={`./img/products/${img}`} alt={title} />                            
        </div>
        <div className="product__title">
            {title}
        </div>

        <div className="product__count">
            {/* <Count /> */}
        </div> 

        <div className="product__price">
            {prise} $
        </div>
        <div className="product__control">
            <ButtonDelete deleteProduct = {deleteProduct} id={id}/>
        </div>
    </section>
    );
}
 
export default Product;