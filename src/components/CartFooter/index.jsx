import formatPrice from "../../utils/formatPrice";
import "./style.scss"

const CartFooter = ({total}) => {
    const{count, price} = total
    return ( 
        <footer className="cart-footer">
        <div className="cart-footer__count"> {count} items</div>
        <div className="cart-footer__prise">
            {formatPrice(price)} $
        </div>                      
    </footer>
     );
} 
 
export default CartFooter; 