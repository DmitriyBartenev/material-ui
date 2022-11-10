
const GoodItem = (props) => {

    const {name, price, setOrder} = props;

    return(
        <div>
            <div>
                <img 
                    src={`https://via.placeholder.com/300x150.png`}
                    alt={name}/>
            </div>
            <div>
                <h5>{name}</h5>
                <p>Price: {price} руб.</p>
                <button
                    onClick={() => {
                        setOrder({
                            id:props.id,
                            name:props.name,
                            price:props.price
                        })
                    }}
                >
                    Купить
                </button>
            </div>
        </div>
    )
}

export default GoodItem;