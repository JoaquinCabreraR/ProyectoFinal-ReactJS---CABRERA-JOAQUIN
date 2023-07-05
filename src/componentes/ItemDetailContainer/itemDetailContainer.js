import { useState, useEffect } from "react";
import { getProductsById } from "../../AsyncMock";
import ItemDetail from "../ItemDetail/itemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null);
    const {itemId} = useParams()

    useEffect(() => {
        getProductsById(itemId)
            .then(response =>{
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [itemId])


    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;
