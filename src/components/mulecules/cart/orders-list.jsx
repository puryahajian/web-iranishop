import React from 'react'
import Text from '../../atoms/text'
import OrderItem from '../order-item';
import { CardShopProductWallet } from '../card-shop-product-wallet';
import { CardShopProductWallet2 } from '../cart-shop-product-wallet2';
import Plus from '../../../assets/image/plus.png'
import Delete from '../../../assets/image/Iconly/Bold/Delete.png'
import { useCart } from '../../../context/CartContext'
import toast from 'react-hot-toast';
import NotData from '../../../assets/image/undraw_no-data_ig65.svg'

function OrdersList() {
    const { cart, updateQuantity, removeFromCart } = useCart();
//    console.log(cart)
    return (
        <div className=' pl-6'>
            <div className='flex items-center gap-2 mb-4'>
                <div className='border-2 border-BorderBlue bg-BorderBlue w-6 h-2 rounded-sm'/>
                <Text className={`font-bold`}>قائمة الطلبات</Text>
            </div>

            <div className='grid gap-4'>
                {cart.map((item, index) => (
                    <CardShopProductWallet2
                        imageCard={item?.data?.data?.image ?? item?.data?.image}
                        product={item?.data?.data?.name ?? item?.data?.om_name}
                        price={`${item?.data?.data?.price ?? item?.data?.price.toLocaleString('fa-IR')} تومان`}
                        numberProduct={item?.quantity}
                        check={true}
                        avatarButtonConfigRemove={{ 
                            icon: item?.quantity === 1 ? (
                                <img onClick={() => {
                                    removeFromCart(item?.data?.data?.id ?? item?.data?.id)
                                    toast.success('تم إزالة المنتج من سلة التسوق')
                                }} src={Delete} alt="" />
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="white" fillRule="evenodd" d="M5 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1" clipRule="evenodd"></path></svg>
                            ), 
                            onTap: () => {
                                updateQuantity(item.data.id, item.quantity - 1);
                            } 
                        }}
                        avatarButtonConfigAdd={{ icon: <img src={Plus}/>, onTap: () => {
                            // if (item?.data?.id) {
                                updateQuantity(item.data.id, item.quantity + 1)
                            // }
                        }}}
                    />
                ))}
            </div>
            <div className='m-auto text-center mt-6'>
                {cart?.length === 0 ? (
                    <>
                        <img src={NotData} className='w-32 m-auto mb-6' alt="" srcset="" />
                        <Text>سلة التسوق الخاصة بك فارغة</Text>
                    </>
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}

export default OrdersList
