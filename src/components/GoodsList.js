import GoodsItem from "./GoodsItem";

const GoodsList = (props) => {

    const { goods, setOrder } = props;

    return(
        <div>
            <div>
                {goods.map(item => (
                    <GoodsItem key={item.id} setOrder={setOrder}  {...item}/>
                ))}
            </div>
        </div>
    )
}

export default GoodsList;