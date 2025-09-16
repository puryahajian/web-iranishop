import React, { useState } from 'react'
import Text from '../../atoms/text'

import Input from '../../atoms/input'
import Button from '../../atoms/button'
import { useCart } from '../../../context/CartContext'
import Cookies from "js-cookie";
import toast from 'react-hot-toast'
import useGetProfile from '../../../hooks/use-get-profile'
import { useNavigate } from 'react-router-dom'
import Rial from '../../../assets/image/Iconly/Iconly/Bold/Frame.png'

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
        const productData = item?.data;
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
        <div className='border-r max-[480px]:border-none border-BorderGray pr-6 max-[480px]:pr-0'>
            

            <hr className='w-[95%] m-auto my-4 hidden max-[480px]:block'/>

            {/* discount */}
            <div className={!access && 'hidden'}>
                <div className='flex items-center gap-2'>
                    <div className='border-2 border-BorderCustom bg-BorderCustom w-6 h-2 rounded-sm'/>
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
            </div>

            <hr className='w-[95%] m-auto my-4 hidden max-[480px]:block'/>

            {/* فاکتور قیمت‌ها */}
            <div className='flex justify-between items-center mt-6'>
                <Text>إجمالي السعر : </Text>
                <Text className={`flex gap-2 items-center`}>{total.toLocaleString('fa-IR')} <img src={Rial} alt="" srcset="" /></Text>
            </div>

            <div className='flex justify-between items-center mt-3'>
                <Text>ضريبة القيمة المضافة : </Text>
                <Text className={`flex gap-2 items-center`}>{tax.toLocaleString('fa-IR')} <img src={Rial} alt="" srcset="" /></Text>
            </div>

            {discountAmount > 0 && (
                <div className='flex justify-between items-center mt-3 text-green-600'>
                    <Text>الخصم : </Text>
                    <Text className={`flex gap-2 items-center`}>-{discountAmount.toLocaleString('fa-IR')} <img src={Rial} alt="" srcset="" /></Text>
                </div>
            )}

            <hr className='border border-Gray1 my-4 w-[93%] m-auto'/>

            <div className='flex justify-between items-center mt-3 font-bold text-lg'>
                <Text>السعر الإجمالي : </Text>
                <Text className={`flex gap-2 items-center`}>{finalTotal.toLocaleString('fa-IR')} <img src={Rial} alt="" srcset="" /></Text>
            </div>

            <div className=' max-[480px]:fixed max-[480px]:bottom-0 max-[480px]:right-0 w-full max-[480px]:p-4 mt-8'>
                <Button onClick={() => {
                    if (!access) {
                        toast.error('الرجاء تسجيل الدخول');
                    }
                    }} className={`w-full py-4 ${!access ? 'bg-gray-400 cursor-not-allowed max-[480px]:hidden' : 'max-[480px]:flex max-[480px]:justify-center'}`}>
                    عرض الطلب
                </Button>
            </div>
        </div>
    )
}

export default AddressLeft
