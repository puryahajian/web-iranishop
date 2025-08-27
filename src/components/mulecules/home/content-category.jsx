import React from 'react'
import Text from '../../atoms/text'
import AvatarButton from '../avatar-button'
import Category from '../../../assets/image/category.png'
import useGetCategory from '../../../hooks/use-get-category'
import { useNavigate } from 'react-router-dom';

function ContentCategory() {
    const {data} = useGetCategory();
    console.log(data)
    const navigate = useNavigate();

    // const mainCategories = data?.filter(item => item?.parent === null || '' );
    const mainCategoriesOrder = data?.filter(item => item?.order !== 0);
    // console.log(mainCategoriesOrder)

    const handleClick = (id) => {
        navigate(`/product-list/${id}`);
    }
    return (
        <div className=''>
            <div className='flex items-center gap-2'>
                <div className='border-2 border-BorderBlue bg-BorderBlue w-6 h-2 rounded-lg'/>
                <Text className={`font-bold`}>التصنيفات</Text>
            </div>

            {/* items category */}
            <div className='flex gap-6 flex-wrap mt-4'>
                {mainCategoriesOrder?.map((item) => (
                    <AvatarButton
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
        </div>
    )
}

export default ContentCategory
