import React, {useState} from 'react'
import TempHeader from '../../template/temp-header'
import useGetCategory from '../../../hooks/use-get-category';
import useGetParentCategory from '../../../hooks/use-get-parent-category';
import ItemCategory from './item-category';
import InputSelector from '../input-selector';

function MulCategoryMobile() {
    const [selectedParentId, setSelectedParentId] = useState('');
    const [page, setPage] = useState(1);
    const {data: parentCategories} = useGetCategory(); // برای دسته‌بندی‌های اصلی
    const {data: subCategories} = useGetParentCategory(selectedParentId, page); // برای زیردسته‌ها
    console.log(subCategories)
    const mainCategoriesOrder = parentCategories?.filter(item => item?.order !== 0);
    console.log(mainCategoriesOrder)

    const handleParentChange = (e) => {
        const selectedId = e.target.value;
        setSelectedParentId(selectedId);
        setPage(1); // هر بار که دسته اصلی تغییر می‌کند، صفحه را ریست می‌کنیم
    }

    return (
        <div>
            <TempHeader/>
            <div className='fixed top-[60px] h-max right-0 w-full pb-4 bg-white'>
                <InputSelector
                    itemOne={`دسته بندی اصلی مورد نظر خود را انتخاب کنید`}
                    onChange={handleParentChange}
                    value={selectedParentId}
                >
                    {/* <option value="">دسته بندی اصلی مورد نظر خود را انتخاب کنید</option> */}
                    {mainCategoriesOrder?.map((item) => (
                        <option key={item.id} value={item.id}>{item.om_name}</option>
                    ))}
                </InputSelector>
                <InputSelector
                    className={`mt-4`}
                    itemOne={`زیر دسته بندی مورد نظر خود را انتخاب کنید`}
                    disabled={!selectedParentId}
                >
                    {/* <option value="">انتخاب کنید</option> */}
                    {subCategories?.results?.map((item) => (
                        <option key={item.id} value={item.id}>{item.om_name}</option>
                    ))}
                </InputSelector>
            </div>
            <ItemCategory/>
        </div>
    )
}

export default MulCategoryMobile
