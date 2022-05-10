import ButtonDelete from "../ButtonDelete";
import Count from "../Count";
import "./style.scss"

const Product = ({product, deleteProduct, increase, decrease}) => {
    const {img, title, priceTotal, count, id} = product
    return ( 
        <section className="product">
        <div className="product__img">
            <img src={`./img/products/${img}`} alt={title} />                            
        </div>
        <div className="product__title">
            {title}
        </div>

        <div className="product__count">
            <Count 
                count={count} 
                increase={increase}
                decrease={decrease}
                id={id}/>
        </div> 

        <div className="product__price">
            {priceTotal} $
        </div>
        <div className="product__control">
            <ButtonDelete deleteProduct = {deleteProduct} id={id}/>
        </div>
    </section>
    );
}
 
export default Product;