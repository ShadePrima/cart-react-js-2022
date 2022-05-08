import "./style.scss"

function CartHeader () {
    return ( 
        <header className="cart-header">
            <div className="catr-header__title"> Item</div>
            <div className="cart-header__count">Quantity</div>
            <div className="cart-headre__cost">Prise</div>
        </header>
     );
}

export default CartHeader;