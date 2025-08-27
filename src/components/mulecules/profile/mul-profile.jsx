import React from 'react'
import TempBoxMain from '../../template/temp-box-main'
import TempHeader from '../../template/temp-header'
import TempFooter from '../../template/temp-footer'
import TempBoxWhite from '../../template/temp-box-white'
import ContentForm from './content-form'
import Text from '../../atoms/text'
import ContentMap from './content-map'
import { useState } from 'react';
import '../../../App.css'
import useGetOrders from '../../../hooks/use-get-orders'
import moment from 'moment-jalaali'

function MulProfile() {
    const {data} = useGetOrders();
    const [addressMapp, setAddressMapp] = useState("");
    return (
        <div>
            <TempBoxMain>
                <TempHeader/>
                <TempBoxWhite>
                    <div className='flex items-center gap-2'>
                        <div className='border-2 border-BorderBlue bg-BorderBlue w-6 h-2 rounded-sm'/>
                        <Text className={`font-bold !text-base`}>پروفایل</Text>
                    </div>
                    <div className='grid grid-cols-2 mt-6'>
                        <ContentForm addressMapp={addressMapp}/>
                        <ContentMap setAddressMapp={setAddressMapp}/>
                    </div>
                </TempBoxWhite>

                {/* سفارش‌ها */}
                <TempBoxWhite className='mt-4'>
                    <div className='flex items-center gap-2 mb-4'>
                        <div className='border-2 border-BorderBlue bg-BorderBlue w-6 h-2 rounded-sm'/>
                        <Text className='font-bold !text-base'>سفارش‌ها</Text>
                    </div>
                    <div className='overflow-x-auto'>
                        <table className='min-w-full text-center border-separate border-spacing-y-3'>
                            <thead>
                                <tr className='text-gray-500 text-sm '>
                                    <th>شماره</th>
                                    <th>سفارش</th>
                                    <th>کد سفارش</th>
                                    <th>قیمت</th>
                                    <th>تاریخ و ساعت</th>
                                    <th>وضعیت سفارش</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.results?.map((item, index) => (
                                    <tr key={item?.id} className={`bg-white border py-4 border-black rounded-lg ${item?.state !== 8 ? 'hidden' : ''}`}>
                                        <td className='ns'>{index + 1}</td>
                                        <td>{item?.items?.map((n) => n?.product?.name)}</td>
                                        <td>{item?.order_code}</td>
                                        <td>{item?.final_price !== undefined ? Math.floor(item.final_price).toLocaleString('fa-IR') : ''} ریال</td>
                                        <td>
                                            {item?.created_at ? (
                                                <>
                                                    {moment(item.created_at).format('jYYYY/jMM/jDD')} <span className="text-gray-400">|</span> {moment(item.created_at).format('HH:mm')}
                                                </>
                                            ) : ''}
                                        </td>
                                        <td className='text-red-600 font-bold ne'>{item?.state === 8 && 'ارسال شد'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </TempBoxWhite>
                <TempFooter/>
            </TempBoxMain>
        </div>
    )
}

export default MulProfile
