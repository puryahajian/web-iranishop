import React from 'react'
import Text from '../atoms/text';
import { Link, useLocation } from 'react-router-dom';

function TempMenuBottomMobile() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isActiveOrder = location.pathname.startsWith('/active-order');
    const isActiveCategory = location.pathname.startsWith('/category-mobile');
    const isActiveAboutMe = location.pathname.startsWith('/about-us');
    const isActiveContentUs = location.pathname.startsWith('/content-us');


    return (
        <div className={`fixed bottom-0 right-0 w-full bg-white py-4 hidden max-[480px]:block 
            ${location.pathname === '/login' && 'max-[480px]:hidden'} 
            ${location.pathname === '/profile' && 'max-[480px]:hidden'}
            ${location.pathname === '/transaction' && 'max-[480px]:hidden'}
            ${location.pathname === '/cart' && 'max-[480px]:hidden'}
            ${location.pathname.startsWith("/product-list") && 'max-[480px]:hidden'}
            ${location.pathname.startsWith("/product-detail") && 'max-[480px]:hidden'}
            ${location.pathname === '/content-us' && 'max-[480px]:hidden'}
            ${location.pathname === '/about-us' && 'max-[480px]:hidden'}
            `}>
            <div className='grid grid-cols-4 px-2 gap-[16px]'>
                <Link to="/" aria-current={isHome ? 'page' : undefined}>
                    <div className={`text-center ${isHome ? 'text-[#2b2b2b]' : 'text-gray-400'}`}>
                        <svg 
                            width="25" 
                            height="25" 
                            className='m-auto'
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    d="M9.385 21.012v-3.058c0-.78.637-1.413 1.423-1.413h2.875c.377 0 .74.149 1.006.414.267.265.417.624.417.999v3.058c-.002.324.126.636.356.867.23.23.544.36.87.36h1.962a3.46 3.46 0 002.443-1 3.41 3.41 0 001.013-2.423v-8.71c0-.735-.328-1.432-.895-1.903l-6.671-5.289a3.097 3.097 0 00-3.949.071L3.717 8.203a2.474 2.474 0 00-.967 1.902v8.702c0 1.895 1.547 3.431 3.456 3.431h1.916c.68 0 1.231-.543 1.236-1.217l.027-.01z" 
                                    fill={isHome ? '#2b2b2b' : '#9ca3af'}
                                />
                        </svg>
                        <Text className={`mt-1 text-[12px] ${isHome ? ' !font-bold' : '!text-gray-400'}`}>بیت</Text>
                    </div>
                </Link>

                <Link to="/active-order" aria-current={isActiveOrder ? 'page' : undefined}>
                    <div className={`text-center ${isActiveOrder ? 'text-[#2b2b2b]' : 'text-gray-400'}`}>
                        <svg 
                            width="25" 
                            className='m-auto'
                            height="25" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    fill-rule="evenodd" 
                                    clip-rule="evenodd" 
                                    d="M8.56 2.238h8.381c3.089 0 4.809 1.78 4.809 4.83v10.33c0 3.1-1.72 4.84-4.809 4.84H8.56c-3.04 0-4.81-1.74-4.81-4.84V7.068c0-3.05 1.77-4.83 4.81-4.83zm.27 4.66v-.01h2.989c.431 0 .781.35.781.78 0 .44-.35.79-.781.79H8.83a.78.78 0 010-1.56zm0 6.08h7.84a.781.781 0 000-1.56H8.83a.781.781 0 000 1.56zm0 4.57h7.84c.399-.04.7-.38.7-.78 0-.41-.301-.75-.7-.79H8.83a.795.795 0 00-.75 1.21c.16.25.45.4.75.36z" 
                                    fill={isActiveOrder ? '#2b2b2b' : '#9ca3af'}
                                />
                        </svg>
                        <Text className={`mt-1 text-[12px] ${isActiveOrder ? ' !font-bold' : '!text-gray-400'}`}>طلبات</Text>
                    </div>
                </Link>

                <Link to="/category-mobile" aria-current={isActiveCategory ? 'page' : undefined}>
                    <div className={`text-center ${isActiveCategory ? 'text-[#2b2b2b]' : 'text-gray-400'}`}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width={25} 
                            height={25}
                            className='m-auto'
                            viewBox="0 0 24 24">
                                <path 
                                    fillRule="evenodd" 
                                    clipRule="evenodd"
                                    d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2" 
                                    fill={isActiveCategory ? '#2b2b2b' : '#9ca3af'}
                                    >
                                </path>
                        </svg>
                        <Text className={`mt-1 text-[12px] ${isActiveCategory ? ' !font-bold' : '!text-gray-400'}`}>فئات </Text>
                    </div>
                </Link>

                <Link to="/about-us" aria-current={isActiveAboutMe ? 'page' : undefined}>
                    <div className={`text-center ${isActiveAboutMe ? 'text-[#2b2b2b]' : 'text-gray-400'}`}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width={25} 
                            height={25} 
                            className='m-auto'
                            viewBox="0 0 24 24">
                                <path 
                                    fill={isActiveAboutMe ? '#2b2b2b' : '#9ca3af'} 
                                    d="M15 12h2a5 5 0 0 0-5-5v2a3 3 0 0 1 3 3m4 0h2c0-5-4.03-9-9-9v2c3.86 0 7 3.13 7 7m1 3.5c-1.25 0-2.45-.2-3.57-.57c-.35-.11-.74-.03-1.02.25l-2.2 2.2a15.1 15.1 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1">
                                </path>
                        </svg>
                        <Text className={`mt-1 text-[12px] ${isActiveAboutMe ? ' !font-bold' : '!text-gray-400'}`}> يدعم </Text>
                    </div>
                </Link>

                {/* <Link to="/content-us" aria-current={isActiveContentUs ? 'page' : undefined}>
                    <div className={`text-center ${isActiveContentUs ? 'text-[#2b2b2b]' : 'text-gray-400'}`}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width={25} 
                            className='m-auto'
                            height={25} 
                            viewBox="0 0 512 512">
                                <path 
                                    fill={isActiveContentUs ? '#2b2b2b' : '#9ca3af'} 
                                    d="M331 374.8c-8.2-16.9-18.8-29.2-37.1-21.7l-36.1 13.4c-28.9 13.4-43.3 0-57.8-20.2l-65-147.8c-8.2-16.9-3.9-32.8 14.4-40.3l50.5-20.2c18.3-7.6 15.4-23.4 7.2-40.3L164 17.1c-8.2-16.9-25-21-43.3-13.5c-36.7 15.1-67 38.8-86.6 73.9c-24 42.9-12 102.6-7.2 127.7s21.6 69.1 43.3 114.2c21.7 45.2 40.7 80.7 57.8 100.8c17 20.1 57.8 75.1 108.3 87.4c41.4 10 86.1 1.6 122.7-13.5c18.3-7.5 18.4-23.4 10.2-40.4zM305.3 256c16.3 0 29.6-13.2 29.6-29.6c0-16.3-13.2-29.6-29.6-29.6c-16.3 0-29.6 13.2-29.6 29.6c0 16.3 13.3 29.6 29.6 29.6m78.8-59.2c-16.3 0-29.6 13.2-29.6 29.6c0 16.3 13.2 29.6 29.6 29.6c16.3 0 29.6-13.2 29.6-29.6c-.1-16.3-13.3-29.6-29.6-29.6m78.8 0c-16.3 0-29.6 13.2-29.6 29.6c0 16.3 13.2 29.6 29.6 29.6c16.3 0 29.6-13.2 29.6-29.6c-.1-16.3-13.3-29.6-29.6-29.6">
                                    </path>
                        </svg>

                        <Text className={`mt-1 text-[12px] ${isActiveContentUs ? ' !font-bold' : '!text-gray-400'}`}>اتصل بنا </Text>
                    </div>
                </Link> */}
            </div>
        </div>
    )
}

export default TempMenuBottomMobile
