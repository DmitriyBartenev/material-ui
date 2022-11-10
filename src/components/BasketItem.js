

const BasketItem = (props) => {
    return(
        <li>
            {props.name} {props.price}руб x{props.quantity}
            <button onClick={() => props.setOrder(props.id)}>
                Удалить из корзины
            </button>
        </li>
    )
}

export default BasketItem;