import React from 'react'
import TempHeader from '../../template/temp-header'
import useGetCategory from '../../../hooks/use-get-category';
import useGetParentCategory from '../../../hooks/use-get-parent-category';
import AvatarButton from '../avatar-button';
import { useNavigate } from 'react-router-dom';

function ItemCategory() {
    // const {data} = useGetCategory();
    const {data} = useGetParentCategory();
    const navigate = useNavigate()
    // const mainCategoriesOrder = data?.results?.filter(item => item?.order !== 0);
    
    console.log(data)
    // console.log(data)
    const handleClick = (id) => {
        navigate(`/product-list/${id}`);
    }

    return (
        <div className='grid grid-cols-4 gap-[14px] mt-[210px] px-4'>
            {data?.map((item, index) => (
                <AvatarButton
                    key={item?.id || index}
                    onTap={() => handleClick(item?.id)}
                    width="79px"
                    className={`w-max h-max`}
                    height="79px"
                    borderRadius="8px"
                    borderRadiusImage="4px"
                    check={true}
                    image={item?.image}
                    boxFit="cover"
                    text={item?.om_name}
                    marginBottom="7px"
                />
            ))}
        </div>
    )
}

export default ItemCategory
