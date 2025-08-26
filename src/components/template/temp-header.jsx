import React, { useState } from 'react'
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
import { useEffect } from 'react'
import { useRef } from 'react'
import Cookies from "js-cookie";
import DropDownMenu from '../mulecules/drop-down-menu'

function TempHeader({ setModalLogOut}) {
    const {data} = useGetOption();
    const {data: dataProfile} = useGetProfile()
    const { cart } = useCart();
    const [shadowSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
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

    return (
        <div className={`fixed top-0 pt-4 w-full right-0 !px-[62px] z-50 ${location.pathname !== '/' ? 'bg-Gray1' : 'bg-white'}`}>
            <div className='justify-between flex items-center'>
                <div className='w-full flex items-center gap-[16px]'>
                    <Link to='/'>
                        {/* <AvatarButtonHeader
                            src={data?.results[0]?.logo}
                            className={`flex items-center gap-4 font-bold`}
                            text={data?.results[0]?.name}
                        /> */}
                        <img src={data?.results[0]?.logo} className='w-[195px] h-[40px] rounded-lg object-cover'/>
                    </Link>

                    <div className="w-full">
                        <div className="relative w-full">
                            {/* Input جستجو */}
                            <input
                            onClick={() => setShowSearch(true)}
                            type="text"
                            placeholder="البحث في المنتجات..."
                            className="w-full rounded-lg border border-Gray1 bg-white py-[9px] pl-10 pr-4 text-sm outline-none"
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
                            <div className="z-20">
                                {/* بک‌دراپ */}
                                <div
                                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1]"
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
            <div className='bg-[#f2f2f2] mt-4 rounded-lg flex justify-between items-center pl-4'>
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
                <div className='flex gap-4 items-center'>
                    <Link to='/cart' className="relative">
                        <AvatarButtonHeader
                            src={Bag}
                            className="flex items-center rounded-[8px] font-bold !bg-Gray1"
                            classImg="p-[10px] border-transparent"
                        />

                        {/* عدد بالای سمت راست */}
                        <span className={`absolute -top-1 flex justify-center items-center -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full transition-all ease-in-out ${cart?.length === 0 ? 'hidden' : ''}`}>
                            {cart?.length}
                        </span>
                    </Link>

                    {accessToken ? (
                        <DropDownMenu
                            buttonMenu={
                                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' className={`w-10 h-10 rounded-lg border border-BorderBlue`} alt="" srcset="" />
                            }
                            text={`${dataProfile?.name === null ? 'غير معروف' : dataProfile?.name} ${dataProfile?.family === null ? '' : dataProfile?.family}`}
                            buttonTop='وتعديل المعلومات'
                            buttonbottom='خروج'
                            onClickEdit={() => navigate('/profile')}
                            onClickExit={() => console.log(setModalLogOut(true)) }
                        />
                    ) : (
                        <AvatarButtonHeader
                            onClick={() => navigate('/login')}
                            src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                            className={`flex items-center gap-4 font-bold cursor-pointer`}
                            text={`${dataProfile?.name === null ? 'غير معروف' : dataProfile?.name} ${dataProfile?.family === null ? '' : dataProfile?.family}`}
                        />
                    )}

                </div>
            </div>
            
        </div>
    )
}

export default TempHeader
