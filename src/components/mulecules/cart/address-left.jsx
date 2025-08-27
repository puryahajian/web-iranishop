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
    const tax = 10000;
    const access = Cookies.get('access');
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => {
        const productData = item?.data?.data ?? item?.data;
        const price = productData?.discounted_price ?? productData?.price ?? 0;
        return sum + price * item.quantity;
    }, 0);

    const finalTotal = total + tax - discountAmount;

    const handleApplyDiscount = () => {
        if (!code) {
            setDiscountAmount(0);
            return;
        }

        const discountValue = applyDiscount(code);
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
                        <Text className={`font-bold`}>آدرس شما</Text>
                    </div>

                    <div className='flex gap-2 items-center cursor-pointer' onClick={() => navigate('/profile')}>
                        <Text className={`text-red-500`}>ویرایش</Text>
                        <img src={Edit} alt="" />
                    </div>
                </div>

                <div className='flex items-center gap-2 mt-[9px]'>
                    <img src={Location} alt="" />
                    <Text className={`text-BorderGray`}>{data?.address === "" ? 'لطفاً آدرس خود را وارد کنید' : data?.address}</Text>
                </div>

                <hr className='border border-Gray1 my-6 w-[93%] m-auto'/>
                </>
            ) : (
                ''
            )}

            {/* discount */}
            <div className='flex items-center gap-2'>
                <div className='border-2 border-BorderBlue bg-BorderBlue w-6 h-2 rounded-sm'/>
                <Text className={`font-bold`}>کد تخفیف</Text>
            </div>

            <div className='flex items-center gap-4 mt-2'>
                <Input 
                    classIcon={`hidden`} 
                    placeholder={`کد تخفیف را وارد کنید`} 
                    className={`bg-transparent w-full pr-2`}
                    value={code} 
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                />

                <Button
                    onClick={handleApplyDiscount}
                    className={`px-10 py-3`}
                >
                    اعمال
                </Button>
            </div>
            {discountError && <Text className="text-red-500 mt-1">{discountError}</Text>}

            {/* فاکتور قیمت‌ها */}
            <div className='flex justify-between items-center mt-6'>
                <Text>مجموع قیمت : </Text>
                <Text>{total.toLocaleString('fa-IR')} تومان</Text>
            </div>

            <div className='flex justify-between items-center mt-3'>
                <Text>مالیات بر ارزش افزوده : </Text>
                <Text>{tax.toLocaleString('fa-IR')} تومان</Text>
            </div>

            {discountAmount > 0 && (
                <div className='flex justify-between items-center mt-3 text-green-600'>
                    <Text>تخفیف : </Text>
                    <Text>-{discountAmount.toLocaleString('fa-IR')} تومان</Text>
                </div>
            )}

            <hr className='border border-Gray1 my-4 w-[93%] m-auto'/>

            <div className='flex justify-between items-center mt-3 font-bold text-lg'>
                <Text>مبلغ نهایی : </Text>
                <Text>{finalTotal.toLocaleString('fa-IR')} تومان</Text>
            </div>


            <Button onClick={() => {
                if (!access) {
                    toast.error('لطفاً وارد حساب کاربری شوید');
                }
                }} className={`w-full mt-[40px] py-4 ${!access ? 'bg-gray-400 cursor-not-allowed' : ''}`}>
                ثبت سفارش
            </Button>
        </div>
    )
}

export default AddressLeft
