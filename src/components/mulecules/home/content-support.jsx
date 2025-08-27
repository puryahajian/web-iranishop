import React from 'react'
import Box from '../../../assets/image/package.svg'
import Pay from '../../../assets/image/undraw_pay-with-credit-card_77g6.svg'
import Talking from '../../../assets/image/undraw_talking-on-the-phone_lc9v.svg'
import Take from '../../../assets/image/undraw_take-out-boxes_n094.svg'
import Certi from '../../../assets/image/undraw_certification_i2m0.svg'
import Text from '../../atoms/text'

function ContentSupport() {
    const style = {
        width: '56px ',
        height: '56px',
        margin: '0 auto 8px',
    }
    const styleBox = {
        border: '1px solid #bcbcbc',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        borderRadius: '8px',
    }
    return (
        <div className='mt-[72px] grid grid-cols-5 max-[1200px]:grid-cols-2 gap-4'>
            <div style={styleBox}>
                <img src={Box} style={style} alt="" srcset="" />
                <Text>توصیل سریع</Text>
            </div>
            <div style={styleBox}>
                <img src={Pay} style={style} alt="" srcset="" />
                <Text>دفع در کنار</Text>
            </div>
            <div style={styleBox}>
                <img src={Talking} style={style} alt="" srcset="" />
                <Text>۲۴ / ۷</Text>
            </div>
            <div style={styleBox}>
                <img src={Take} style={style} alt="" srcset="" />
                <Text>۷ روز ضمانت بازگشت محصول</Text> 
            </div>
            <div style={styleBox}>
                <img src={Certi} style={style} alt="" srcset="" />
                <Text>ضمانت صحت محصول</Text>
            </div>

        </div>
    )
}

export default ContentSupport
