import React from 'react'
import OrdersList from './orders-list'
import AddressLeft from './address-left'

function ContentCart() {
    return (
        <div className='grid grid-cols-2'>
            <OrdersList/>
            <AddressLeft/>
        </div>
    )
}

export default ContentCart
