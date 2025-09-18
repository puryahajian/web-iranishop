import React, { useState, useEffect } from 'react'
import AvatarButtonHeader from '../mulecules/avatar-button-header'
import MenuHeader from '../utilits/menu-header'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Text from '../atoms/text'
import Bag from '../../assets/image/Iconly/Iconly/Bold/Bag.png'
import useGetOption from '../../hooks/use-get-option'
import useGetProfile from '../../hooks/use-get-profile'
import MegaMenu from '../../lib/mega-menu'
import { useCart } from '../../context/CartContext'
import ModalGeneral from '../mulecules/modal-general'
import ContentSearch from '../mulecules/seach/content-search'
import ContentResponsSearch from '../mulecules/seach/content-respons-search'
import UserIcon from '../../assets/image/Iconly/Profile.png'
import User from '../../assets/image/Iconly/user (1).png'
import IconArrow from '../../assets/image/Iconly/Iconly/Bold/Iconly/Bold/Arrow - Left 2.png'
import BagWhite from '../../assets/image/Iconly/Iconly/Bold/Iconly/Bold/Bag-white.png'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import '../../App.css'
import Cookies from "js-cookie";
import DropDownMenu from '../mulecules/drop-down-menu'

function TempHeader({ setModalLogOut }) {
    const {data} = useGetOption();
    const {data: dataProfile} = useGetProfile()
    // console.log(data)
    const { cart } = useCart();
    const [shadowSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    const [search, setSearch] = useState(null);
    const boxRef = useRef(null);
    const accessToken = Cookies.get('access');
    const location = useLocation();


    useEffect(() => {
        function handleClickOutside(event) {
            if (boxRef.current && !boxRef.current.contains(event.target)) {
                setShowSearch(false); // وقتی بیرون کلیک شد
            }
        }

        if (shadowSearch) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [shadowSearch]);    

    const handleLogout = () => {
        try {
            document.dispatchEvent(new Event('openLogoutModal'));
        } catch (e) {
            // fallback: navigate to profile if event fails
        }
    };


    return (
        <div className={`fixed top-0 w-full right-0 shadow-md max-[480px]:shadow-none px-[62px] max-[835px]:px-[24px] max-[480px]:px-[16px] z-50 bg-white `}>
            {/* هدر بالا */}
            <div className={`justify-between flex items-center relative z-20 bg-white max-[480px]:pb-4 pt-3 `}>
                <div className='w-full max-[480px]:w-max flex items-center gap-[16px]'>
                    {/* logo -> mobile */}
                    <div className='hidden max-[480px]:block'>
                        {location.pathname === "/" ? (
                            <Link to='/'>
                                <img src={data?.results[0]?.logo} className='w-[175px] h-[40px] rounded-lg object-cover'/>
                            </Link>
                        ) : location.pathname === "/cart" ? (
                            <Text>سلة التسوق</Text>
                        ) : location.pathname === "/profile" ? (
                            <Text>الملف الشخصي</Text>
                        ) : location.pathname === "/active-order" ? (
                            <Text>الطلبات</Text>
                        ) : location.pathname === "/transaction" ? (
                            <Text>المعاملات المالية</Text>
                        ) : location.pathname.startsWith("/product-list") ? (
                            <Text>منتجات</Text>
                        ) : location.pathname === "/about-us" ? (
                            <Text>معلومات عنا</Text>
                        ) : location.pathname === "/content-us" ? (
                            <Text>اتصل بنا</Text>
                        ) : location.pathname.startsWith("/product-detail") ? (
                            <Text>منتج</Text>
                        ) : location.pathname.startsWith("/category-mobile") ? (
                            <Text>فئات</Text>
                        ) : (
                            ''
                        )}
                    </div>

                    {/* logo -> desktop */}
                    <div className='block max-[480px]:hidden'>
                        <Link to='/'>
                            <img src={data?.results[0]?.logo} className='w-[195px] h-[40px] rounded-lg object-cover'/>
                        </Link>
                    </div>
                    <div className={`w-full ${location.pathname === '/' ? 'max-[480px]:fixed max-[480px]:top-[70px] max-[480px]:right-[0px] max-[480px]:px-4' : 'max-[480px]:hidden'}`}>
                        <div className={`w-full ${location.pathname === '/' ? 'max-[480px]:fixed max-[480px]:top-[67px] max-[480px]:right-[0px] max-[480px]:px-4' : 'max-[480px]:hidden'}`}>
                            <div className="relative w-full">
                                {/* Input جستجو */}
                                <input
                                    onClick={() => setShowSearch(true)}
                                    type="text"
                                    placeholder="البحث في المنتجات..."
                                    className={`w-full rounded-lg border border-gray-300 bg-white py-[9px] pl-10 pr-4 text-sm outline-none`}
                                />
                                
                                {/* آیکون سرچ */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    className="absolute top-3 left-3"
                                    viewBox="0 0 16 16"
                                    >
                                    <path
                                        fill="#f15923"
                                        d="m11.271 11.978l3.872 3.873a.5.5 0 0 0 .708 0a.5.5 0 0 0 0-.708l-3.565-3.564c2.38-2.747 2.267-6.923-.342-9.532c-2.73-2.73-7.17-2.73-9.898 0s-2.728 7.17 0 9.9a6.96 6.96 0 0 0 4.949 2.05a.5.5 0 0 0 0-1a5.96 5.96 0 0 1-4.242-1.757a6.01 6.01 0 0 1 0-8.486a6.004 6.004 0 0 1 8.484 0a6.01 6.01 0 0 1 0 8.486a.5.5 0 0 0 .034.738"
                                    ></path>
                                </svg>

                                {/* Popup جستجو */}
                                {shadowSearch && (
                                <div>
                                    {/* بک‌دراپ */}
                                    <div
                                    className="fixed inset-0 bg-black/40 backdrop-blur-sm index"
                                    onClick={() => setShowSearch(false)}
                                    ></div>

                                    {/* باکس popup */}
                                    <div className="absolute -top-1 left-0 mt-1 w-full  bg-white z-[21] rounded-lg p-3 pt-0 shadow-lg transition-all ease-in-out transform duration-200">
                                        <ContentSearch setSearch={setSearch} />
                                        <ContentResponsSearch search={search} />
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* btns profile & shop --> mobile */}
                <div className=' gap-4 hidden max-[480px]:flex max-[480px]:items-center'>
                    {location.pathname === "/" ? (
                        <>
                        {accessToken ? (
                            <div>
                                <div className='max-[480px]:hidden'>
                                    <DropDownMenu
                                        buttonMenu={
                                            <img src={UserIcon} className={`w-10 h-10 rounded-lg border bg-Gray1 border-BorderCustom `} alt="" srcset="" />
                                        }
                                        classText={`hidden`}
                                        // text={`${dataProfile?.name === null ? 'غير معروف' : dataProfile?.name} ${dataProfile?.family === null ? '' : dataProfile?.family}`}
                                        buttonTop='وتعديل المعلومات'
                                        buttonbottom='خروج'
                                        onClickEdit={() => navigate('/profile')}
                                        onClickExit={handleLogout}
                                    />
                                </div>
                                <AvatarButtonHeader
                                    onClick={() => navigate('/profile')}
                                    src={UserIcon}
                                    className={`flex items-center bg-Gray1 rounded-lg gap-4 border border-BorderCustom font-bold cursor-pointer`}
                                    classText={`hidden`}
                                    // text={`${dataProfile?.name === null ? 'غير معروف' : dataProfile?.name} ${dataProfile?.family === null ? '' : dataProfile?.family}`}
                                />
                            </div>
                        ) : (
                            <AvatarButtonHeader
                                onClick={() => navigate('/login')}
                                src={User}
                                className={`flex items-center bg-Gray1 rounded-lg gap-4 font-bold cursor-pointer`}
                                classText={`hidden`}
                                // text={`${dataProfile?.name === null ? 'غير معروف' : dataProfile?.name} ${dataProfile?.family === null ? '' : dataProfile?.family}`}
                            />
                        )}

                        <Link to='/cart' className="relative ">
                            <AvatarButtonHeader
                                src={BagWhite}
                                className="flex items-center w-max rounded-[8px] font-bold !bg-BgCustom"
                                classImg="p-[10px] border-transparent"
                            />
                            <span className={`absolute -top-1 flex justify-center items-center -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full transition-all ease-in-out ${cart?.length === 0 ? 'hidden' : ''}`}>
                                {cart?.length}
                            </span>
                        </Link>
                        </>
                    ) : (
                        <button onClick={() => navigate(-1)}>
                            <AvatarButtonHeader
                                src={IconArrow}
                                className="flex items_center w-max rounded-[8px] font-bold bg-BgCustom"
                                classImg="p-[8px] border-transparent"
                            />
                        </button>
                    )}
                </div>
            </div>

            {/* هدر پایین */}
            <div className='max-[480px]:hidden'>
                <div
                    // ref={bottomHeaderRef}
                    className={` rounded-lg flex justify-between items-center z-10  ${location.pathname !== '/' ? 'bg-transparent' : 'bg-white'}`}
                >
                    {/* menu */}
                    <div className='flex gap-14 items-center'>
                        {MenuHeader.map((item, index) => (
                            item.mega ? (
                                <MegaMenu key={index} />
                            ) : (
                            <Link key={index} to={item?.link}>
                                <Text className="!text-gray-500">{item?.label}</Text>
                            </Link>
                            )
                        ))}
                    </div>

                    {/* btn profile - shop */}
                    <div className='flex gap-4 items-center max-[480px]:hidden'>
                        {/* <Text className="flex items-center gap-1 max-[480px]:hidden">
                            {data?.results[0]?.open_time === null ? (
                                ''
                            ) : (
                                <div className='flex items-center gap-1'>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width={24} 
                                        height={24} 
                                        viewBox="0 0 24 24">
                                            <path 
                                                fill="#f15923" 
                                                d="M6.53 3.47a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0">
                                                    </path>
                                                    <path 
                                                    fill="#f15923" 
                                                    fillRule="evenodd" 
                                                    d="M12 4.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17m.75 3.5a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 .352.636l3 1.875a.75.75 0 1 0 .796-1.272l-2.648-1.655z" 
                                                    clipRule="evenodd">
                                                        </path>
                                                        <path 
                                                        fill="#f15923" 
                                                        d="M17.47 4.53a.75.75 0 0 1 1.06-1.06l2.5 2.5a.75.75 0 0 1-1.06 1.06z">
                                            </path>
                                    </svg>
                                    ساعات العمل من الساعة
                                    <span className="text-BgCustom">{data?.results[0]?.open_time?.slice(0, -3)}</span>
                                    الی الساعة
                                    <span className="text-BgCustom">{data?.results[0]?.close_time?.slice(0, -3)}</span>
                                </div>
                            )}
                        </Text> */}

                        <Link to='/cart' className="relative">
                            <AvatarButtonHeader
                                src={Bag}
                                className="flex items-center w-max rounded-[8px] font-bold !bg-Gray1"
                                classImg="p-[10px] border-transparent"
                            />
                            <span className={`absolute -top-1 flex justify-center items-center -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full transition-all ease-in-out ${cart?.length === 0 ? 'hidden' : ''}`}>
                                {cart?.length}
                            </span>
                        </Link>

                        {accessToken ? (
                            <DropDownMenu
                                buttonMenu={
                                    <img src={UserIcon} className={`w-10 h-10 rounded-lg border bg-Gray1 border-BorderCustom `} alt="" srcset="" />
                                }
                                text={`${dataProfile?.name === null ? 'غير معروف' : dataProfile?.name} ${dataProfile?.family === null ? '' : dataProfile?.family}`}
                                buttonTop='وتعديل المعلومات'
                                buttonbottom='خروج'
                                onClickEdit={() => navigate('/profile')}
                                onClickExit={handleLogout}
                            />
                        ) : (
                            <AvatarButtonHeader
                                onClick={() => navigate('/login')}
                                src={User}
                                className={`flex items-center bg-Gray1 rounded-lg gap-4 font-bold cursor-pointer`}
                                classText={`hidden`}
                                // text={`${dataProfile?.name === null ? 'غير معروف' : dataProfile?.name} ${dataProfile?.family === null ? '' : dataProfile?.family}`}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TempHeader
