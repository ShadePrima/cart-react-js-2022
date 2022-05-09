const ButtonDelete = ({deleteProduct, id}) => {
    return (  
        <button type="button" onClick={() => {deleteProduct(id)}}>
            <img src="./img/icons/x.jpg" alt="Delete" />
        </button>
    );
}
 
export default ButtonDelete; 