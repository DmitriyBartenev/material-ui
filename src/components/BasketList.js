
import BasketItem from './BasketItem';

const BasketList = (props) => {

    const {order, setOrder} = props;

    if(!order.length){
        return(
            <ul>
                <li>Корзина</li>
                <li>Товаров нет</li>
            </ul>
        );
    }

    return(
        <ul>
            <li>Корзина</li>
            {order.map((item, index) => 
                <BasketItem key={index} setOrder={setOrder} {...item}/>
            )}
            <li>
                Общая стоимость:{' '}
                {order.reduce((acc, item) => {
                    return acc + item.price * item.quantity;
                }, 0)}{' '}
                рублей.
            </li>
        </ul>
    )
}

export default BasketList;