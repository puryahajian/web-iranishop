import React, { useEffect } from 'react'
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
import useGetProfile from '../../../hooks/use-get-profile'
import { RiEdit2Fill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import DocumentIcon from '../../../assets/image/Iconly/Iconly/Bold/Document.png'
import ArrowLeftIcon from '../../../assets/image/Iconly/Iconly/Bold/Arrow - Left 2.png'
import ModalGeneral from '../modal-general'
import Input from '../../atoms/input'
import usePatchProfile from '../../../hooks/use-patch-profile'
import Mapp from './mapp'
import toast from 'react-hot-toast'
import Loading from '../../atoms/loading'
import ModalGeneralBottom from '../modal-general-bottom'
import Cookies from "js-cookie";
import { Link, useNavigate } from 'react-router-dom'
import Rial from '../../../assets/image/Iconly/Iconly/Bold/Frame.png'
import IconInfo from '../../../assets/image/Iconly/file.png'
import IconSupport from '../../../assets/image/Iconly/support (1).png'


function MulProfile() {
    const {data} = useGetOrders();
    // console.log(data)
    const {mutate, isPending} = usePatchProfile();
    const [addressMapp, setAddressMapp] = useState("");
    const {data: dataProfile} = useGetProfile();
    const [addressPreview, setAddressPreview] = useState("");
    const [modalEditMobile, setModalEditMobile] = useState(false)
    const [modalEditLocationMobile, setModalEditLocationMobile] = useState(false)
    const [modalExitMobile, setModalExitMobile] = useState(false)
    const [name, setName] = useState();
    const [family, setFamily] = useState();
    const [address, setAddress] = useState(dataProfile?.address);
    const [addressLat, setAddressLat] = useState(null);
    const [addressLng, setAddressLng] = useState(null);
    const [location, setLocation] = useState(null);
    const navigate = useNavigate()

    // اگر addressMapp تغییر کرد، مقدار input آدرس را با آن مقدار به‌روزرسانی کن
    useEffect(() => {
        if (addressPreview) {
            // نمایش آدرس به صورت رشته فارسی (مثلاً road, city, state, country)
            const addressString = [
                addressPreview.region,    // استان
                addressPreview.locality,  // شهر
                addressPreview.street,    // خیابان
                addressPreview.name  
            ].filter(Boolean).join('، ');
            setAddress(addressString);
            // console.log(addressString)
        }
    }, [addressPreview]);

    useEffect(() => {
        if (dataProfile) {
            if (dataProfile?.name) setName(dataProfile.name);
            if (dataProfile?.family) setFamily(dataProfile.family);
            if (dataProfile?.address) setAddress(dataProfile.address);
            if (dataProfile?.addressLat) setAddressLat(dataProfile.addressLat);
            if (dataProfile?.addressLng) setAddressLng(dataProfile.addressLng);
        }
    }, [dataProfile]);

    const handleSuccess = () => {
        // console.log(location)
        mutate(
            {
                name, address, addressLat, addressLng, family, location
            },
            {
                onSuccess: () => {
                    toast.success('تم تحديث الملف الشخصي')
                    setModalEditLocationMobile(false)
                    setModalEditMobile(false)
                },
                onError: (err) => {
                    // console.log(err)
                }
            }
        );
    }

    const handleExit = () => {
        Cookies.remove('access');
        Cookies.remove('refresh');
        navigate('/')
    }

    const stateLabels = {
        0: "قيد الانتظار",
        1: "تم الدفع",
        2: "تم القبول",
        3: "مرفوض",
        4: "قيد المعالجة",
        5: "جاري التغليف",
        6: "قيد التوصيل",
        7: "ملغي",
        8: "مكتمل",
    };
    const stateColors = {
        0: "text-yellow-500",  // pending
        1: "text-blue-500",    // paid
        2: "text-green-600",   // accepted
        3: "text-red-600",     // rejected
        4: "text-orange-500",  // in progress
        5: "text-purple-500",  // packing
        6: "text-sky-500",     // delivering
        7: "text-gray-500",    // canceled
        8: "text-emerald-600", // completed
    };

    return (
        <div>
            <TempHeader/>
            
            {/* desktop */}
            <TempBoxMain className={`max-[480px]:hidden`}>
                <TempBoxWhite>
                    <div className='items-center gap-2 hidden max-[480px]:flex'>
                        <div className='border-2 border-BorderCustom bg-BorderCustom w-6 h-2 rounded-sm'/>
                        <Text className={`font-bold !text-base`}>الملف الشخصي</Text>
                    </div>
                    <div className='grid grid-cols-2 max-[480px]:mt-6'>
                        <ContentForm addressPreview={addressPreview} location={location}/>
                        <ContentMap setAddressPreview={setAddressPreview} setLocation={setLocation}/>
                    </div>
                </TempBoxWhite>

                {/* الطلبات */}
                <TempBoxWhite className='mt-4'>
                    <div className='flex items-center gap-2 mb-4'>
                        <div className='border-2 border-BorderCustom bg-BorderCustom w-6 h-2 rounded-sm'/>
                        <Text className='font-bold !text-base'>الطلبات</Text>
                    </div>
                    <div className='overflow-x-auto'>
                        <table className='min-w-full text-center border-separate border-spacing-y-3'>
                            <thead>
                                <tr className='text-gray-500 text-sm '>
                                    <th>الرقم</th>
                                    <th>الطلب</th>
                                    <th>رمز الطلب</th>
                                    <th>السعر</th>
                                    {/* <th>سفارش دهنده</th> */}
                                    <th>التاريخ والوقت</th>
                                    <th>حالة الطلب</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.results?.map((item, index) => (
                                    <tr key={item?.id} className={`bg-white border py-4 border-black rounded-lg `}>
                                        <td className='ns'>{index + 1}</td>
                                        <td>{item?.items?.map((n) => n?.product?.name)}</td>
                                        <td>{item?.order_code}</td>
                                        <td className='flex justify-center items-center'>{item?.final_price !== undefined ? Math.floor(item.final_price).toLocaleString('fa-IR') : ''} <img src={Rial} alt="" /></td>
                                        {/* <td>علی حاجیان</td> */}
                                        <td>
                                            {item?.created_at ? (
                                                <>
                                                    {moment(item.created_at).format('jYYYY/jMM/jDD')} <span className="text-gray-400">|</span> {moment(item.created_at).format('HH:mm')}
                                                </>
                                            ) : ''}
                                        </td>
                                        <td className={`${stateColors[item?.state] || "text-black"} font-bold ne`}>
                                            {stateLabels[item?.state] || "غير معروف"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </TempBoxWhite>
                <TempFooter/>
            </TempBoxMain>
            
            {/* mobile */}
            <div className='border mt-20 mx-4 rounded-lg p-4 hidden max-[480px]:block'>
                <div className='flex justify-between items-center'>
                    <div>
                        <Text>{!dataProfile?.name ? 'لا اسم' : dataProfile?.name} {!dataProfile?.family ? '' : dataProfile?.family}</Text>
                        <Text className={`text-gray-400 mt-1`}>{dataProfile?.phone}</Text>
                    </div>

                    <div className='flex items-center gap-2' onClick={() => setModalEditMobile(true)}> 
                        <Text className={`!text-red-500`}>تعدیل</Text>
                        <RiEdit2Fill className='text-red-500 text-xl'/>
                    </div>
                </div>

                <hr className='my-4'/>

                <div>
                    <div className='flex items-center gap-2 mb-4'>
                        <div className='border-2 border-BorderCustom bg-BorderCustom w-6 h-2 rounded-sm'/>
                        <Text className='font-bold !text-base'>العنوان</Text>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            {/* <Text className={`text-gray-400 mt-1`}>{dataProfile?.phone}</Text> */}
                            <FaLocationDot/>
                            <Text>{address || dataProfile?.address || 'أدخل العنوان'}</Text>
                        </div>

                        <div className='flex items-center gap-2' onClick={() => setModalEditLocationMobile(true)}> 
                            <Text className={`!text-red-500`}>تعدیل</Text>
                            <RiEdit2Fill className='text-red-500 text-xl'/>
                        </div>
                    </div>
                </div> 
            </div>

            <hr className='my-4 w-[83%] m-auto'/>
            
            <Link to="/transaction">
                <div className='border mx-4 rounded-lg p-4 hidden max-[480px]:flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <img src={DocumentIcon} className='w-6 h-6' alt="" />
                        <Text>المعاملات المالیه</Text>
                    </div>

                    <img src={ArrowLeftIcon} alt="" />
                </div>
            </Link>

            <Link to="/about-us">
                <div className='border mx-4 rounded-lg p-4 hidden max-[480px]:flex justify-between items-center mt-4'>
                    <div className='flex gap-3 items-center'>
                        <img src={IconInfo} className='w-6 h-6' alt="" />
                        <Text>معلومات عنا</Text>
                    </div>

                    <img src={ArrowLeftIcon} alt="" />
                </div>
            </Link>

            <Link to="/content-us">
                <div className='border mx-4 rounded-lg p-4 hidden max-[480px]:flex justify-between items-center mt-4'>
                    <div className='flex gap-3 items-center'>
                        <img src={IconSupport} className='w-6 h-6' alt="" />
                        <Text>اتصل بنا</Text>
                    </div>

                    <img src={ArrowLeftIcon} alt="" />
                </div>
            </Link>

            {/* btn exit */}
            <div className='fixed bottom-0 right-0 w-full p-2 hidden max-[480px]:block'>
                <div className='border border-red-500 mt-20 py-3 flex justify-center items-center rounded-lg' onClick={() => setModalExitMobile(true)}>
                    <Text className={`text-red-500 !font-bold`}>تسجیل الخروج</Text>
                </div>
            </div>

            {/* modal edit name & family */}
            <ModalGeneral
                close={() => setModalEditMobile(false)}
                isOpen={modalEditMobile}
                handleClose={() => setModalEditMobile(false)}
                onSuccess={handleSuccess}
                // Title="هل تريد الخروج؟"
                textAccept={isPending ? <Loading/> : 'یحرر'}
                classBtns={`grid grid-cols-2 gap-2`}
                classModal={`w-[80%]`}
                classAccess={`py-4`}
                >
                    <div>
                        <div className='flex items-center gap-2'>
                            <div className='border-2 border-BorderCustom bg-BorderCustom w-6 h-2 rounded-sm'/>
                            <Text className={``}>الاسم </Text>
                        </div>
                        <Input
                            classIcon={`hidden`}
                            className={`bg-transparent pr-5 placeholder:text-sm mt-[10px]`}
                            placeholder={`الاسم `}
                            defaultValue={dataProfile?.name}
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className='mt-4'>
                        <div className='flex items-center gap-2'>
                            <div className='border-2 border-BorderCustom bg-BorderCustom w-6 h-2 rounded-sm'/>
                            <Text className={``}>اسم العائلة</Text>
                        </div>
                        <Input
                            classIcon={`hidden`}
                            className={`bg-transparent pr-5 placeholder:text-sm mt-[10px]`}
                            placeholder={`اسم العائلة`}
                            defaultValue={dataProfile?.family}
                            name="family"
                            value={family}
                            onChange={(e) => setFamily(e.target.value)}
                        />
                    </div>
            </ModalGeneral>

            {/* modal edit location */}
            <ModalGeneral
                close={() => setModalEditLocationMobile(false)}
                isOpen={modalEditLocationMobile}
                handleClose={() => setModalEditLocationMobile(false)}
                onSuccess={() => handleSuccess()}
                // Title="هل تريد الخروج؟"
                textAccept={isPending ? <Loading/> : 'احفظ عنوانك'}
                classCanceled={`hidden`}
                classAccess={`py-3 ${!address ? 'bg-gray-400 cursor-not-allowed' : ''}`}
                classBtns={`grid grid-cols-1 gap-2`}
                classModal={`!w-[90%]`}
                >
                <div className='flex items-center gap-2 mb-2'>
                    <div className='border-2 border-BorderCustom bg-BorderCustom w-6 h-2 rounded-sm'/>
                    <Text className={``}>الرجاء إدخال موقعك الجغرافي</Text>
                </div>

                <Mapp setAddressPreview={setAddressPreview} setLocation={setLocation} />

                <div className='flex items-center gap-2 mt-4 mb-2'>
                    <div className='border-2 border-BorderCustom bg-BorderCustom w-6 h-2 rounded-sm'/>
                    <Text className={``}>أدخل عنوانًا أكثر تحديدًا</Text>
                </div>

                <Input 
                    className={`w-full pr-2`} 
                    classIcon={`hidden`}
                    value={address}
                    // defaultValue={dataProfile?.address}
                    onChange={(e) => setAddress(e.target.value)}
                />

            </ModalGeneral>

            {/* modal exit */}
            <ModalGeneralBottom
                close={() => setModalExitMobile(false)}
                isOpen={modalExitMobile}
                handleClose={() => setModalExitMobile(false)}
                onSuccess={handleExit}
                Title="هل تريد الخروج؟"
                textAccept={isPending ? <Loading/> : 'الخروج'}
                classBtns={`grid grid-cols-1 gap-2`}
                >
            </ModalGeneralBottom>

        </div>
    )
}

export default MulProfile
