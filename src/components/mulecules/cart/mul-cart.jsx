import React, { useState } from 'react'
import TempBoxMain from '../../template/temp-box-main'
import TempHeader from '../../template/temp-header'
import TempFooter from '../../template/temp-footer'
import ContentCart from './content-cart'
import TempBoxWhite from '../../template/temp-box-white'

function MulCart() {
    return (
        <div>
            <TempBoxMain>
                <TempHeader/>
                <TempBoxWhite>
                    <ContentCart/>
                </TempBoxWhite>
                <TempFooter/>
            </TempBoxMain>
        </div>
    )
}

export default MulCart
