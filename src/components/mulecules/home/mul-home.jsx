import React, { useState } from 'react'
import TempHeader from '../../template/temp-header'
import TempBoxMain from '../../template/temp-box-main'
import AvatarButton from '../avatar-button'
import Banner1 from '../../../assets/image/banner-1.png'
import ContentCategory from './content-category'
import ContentDoubleBanner from './content-double-banner'
import ContentDiscount from './content-discount'
import BestSeller from './best-seller'
import TempFooter from '../../template/temp-footer'
import useGetOption from '../../../hooks/use-get-option'
import StoryCarousel from './stories'
import ContentFourBanner from './content-four-banner'
import ContentSupport from './content-support'



function MulHome({setModalLogOut}) {
    const {data} = useGetOption();
    const getData = data?.results[0]

    return (
        <div>
            <TempHeader setModalLogOut={setModalLogOut} />   

            <TempBoxMain className={`mt-0`}>
                <StoryCarousel/>
            </TempBoxMain>

            <AvatarButton
                // onTap={handleClick}
                width="100%"
                className={`w-full mt-3 h-[400px]`}
                height="100%"
                padding={0}
                borderRadius="0"
                border='white'
                borderRadiusImage="0"
                check={true}
                image={getData?.banner_one}
                boxFit="cover"
            />

            <TempBoxMain className={`!mt-[72px]`}>

                <ContentCategory/>

                <ContentDoubleBanner/>

                <ContentDiscount/>

                <AvatarButton
                    // onTap={handleClick}
                    width="100%"
                    className={`w-full h-[500px]`}
                    height="100%"
                    borderRadius="8px"
                    borderRadiusImage="4px"
                    check={true}
                    image={getData?.banner_two}
                    boxFit="cover"
                />

                <BestSeller/>

                <ContentFourBanner/>

                <ContentSupport/>
                
                <TempFooter/>
            </TempBoxMain>

        </div>
    )
}

export default MulHome
