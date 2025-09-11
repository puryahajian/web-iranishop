import React from "react"
import Text from "../../atoms/text"
import Rial from "../../../assets/image/Iconly/Iconly/Bold/Frame.png"

function ItemCardActiveOrderMobile ({
    name,
    count,
    price,
    src
    }) {

    return(
        <div className="border rounded-xl p-2">
            <div className="bg-Gray1 p-2 flex rounded-lg items-center gap-4">
                <img src={src} className="w-[85px] h-[85px] rounded-lg" alt="" />

                <div className="grid gap-1">
                    <Text>{name}</Text>
                    <Text>الكمية : {count}</Text>
                    <Text className={`flex items-center gap-1`}>سعر الوحدة : {price} <img src={Rial} alt="" /></Text>
                </div>
            </div>
        </div>
    )
}

export default ItemCardActiveOrderMobile