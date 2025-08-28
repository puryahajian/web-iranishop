import React, { useState } from 'react'
import Text from '../../atoms/text'
import Edit from '../../../assets/image/Iconly/Bold/Edit.svg'
import Location from '../../../assets/image/Iconly/Bold/Location.png'
import Input from '../../atoms/input'
import Button from '../../atoms/button'
import { useCart } from '../../../context/CartContext'
import Cookies from "js-cookie";
import toast from 'react-hot-toast'
import useGetProfile from '../../../hooks/use-get-profile'
import { useNavigate } from 'react-router-dom'

function AddressLeft() {
    const { cart, applyDiscount, discountError } = useCart();
    const {data} = useGetProfile();
    const [code, setCode] = useState('');
    const [discountAmount, setDiscountAmount] = useState(0);
    const tax = 0;
    const access = Cookies.get('access');
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => {
        // بررسی داده‌ها: اول item.data.data بعد item.data
        const productData = item?.data?.data ?? item?.data;
        const price = productData?.discounted_price ?? productData?.price ?? 0;
        return sum + price * item.quantity;
    }, 0);

    // 🟢 محاسبه قیمت نهایی بعد از تخفیف و مالیات
    const finalTotal = total + tax - discountAmount;

    const handleApplyDiscount = () => {
        if (!code) {
            setDiscountAmount(0); // 🔹 وقتی کد خالی باشه، تخفیف صفر میشه
            return;
        }

        const discountValue = applyDiscount(code); // اینجا مبلغ تخفیف برمی‌گرده
        setDiscountAmount(discountValue > 0 ? discountValue : 0);
    };


    return (
        <div className='border-r border-BorderGray pr-6'>
            {/* address */}
            {access ? (
                <>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <div className='border-2 border-BorderBlue bg-BorderBlue w-6 h-2 rounded-sm'/>
                        <Text className={`font-bold`}>عنوانك</Text>
                    </div>

                    <div className='flex gap-2 items-center cursor-pointer' onClick={() => navigate('/profile')}>
                        <Text className={`text-red-500`}>تعديل</Text>
                        <img src={Edit} alt="" />
                    </div>
                </div>

                <div className='flex items-center gap-2 mt-[9px]'>
                    <img src={Location} alt="" />
                    <Text className={`text-BorderGray`}>{data?.address === "" ? 'من فضلك أدخل العنوان' : data?.address}</Text>
                </div>

                <hr className='border border-Gray1 my-6 w-[93%] m-auto'/>
                </>
            ) : (
                ''
            )}

            {/* discount */}
            <div className='flex items-center gap-2'>
                <div className='border-2 border-BorderBlue bg-BorderBlue w-6 h-2 rounded-sm'/>
                <Text className={`font-bold`}>رمز الخصم</Text>
            </div>

            <div className='flex items-center gap-4 mt-2'>
                <Input 
                    classIcon={`hidden`} 
                    placeholder={`أدخل رمز الخصم`} 
                    className={`bg-transparent w-full pr-2`}
                    value={code} 
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                />

                <Button
                    onClick={handleApplyDiscount}
                    className={`px-10 py-3`}
                >
                    يتقدم
                </Button>
            </div>
            {discountError && <Text className="text-red-500 mt-1">{discountError}</Text>}

            {/* فاکتور قیمت‌ها */}
            <div className='flex justify-between items-center mt-6'>
                <Text>إجمالي السعر : </Text>
                <Text>{total.toLocaleString('fa-IR')} تومان</Text>
            </div>

            <div className='flex justify-between items-center mt-3'>
                <Text>ضريبة القيمة المضافة : </Text>
                <Text>{tax.toLocaleString('fa-IR')} تومان</Text>
            </div>

            {discountAmount > 0 && (
                <div className='flex justify-between items-center mt-3 text-green-600'>
                    <Text>الخصم : </Text>
                    <Text>-{discountAmount.toLocaleString('fa-IR')} تومان</Text>
                </div>
            )}

            <hr className='border border-Gray1 my-4 w-[93%] m-auto'/>

            <div className='flex justify-between items-center mt-3 font-bold text-lg'>
                <Text>السعر الإجمالي : </Text>
                <Text>{finalTotal.toLocaleString('fa-IR')} تومان</Text>
            </div>


            <Button onClick={() => {
                if (!access) {
                    toast.error('لطفا لاگین کنید');
                }
                }} className={`w-full mt-[40px] py-4 ${!access ? 'bg-gray-400 cursor-not-allowed' : ''}`}>
                عرض الطلب
            </Button>
        </div>
    )
}

export default AddressLeft
