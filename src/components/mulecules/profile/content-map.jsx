import React, { useEffect, useState } from 'react'
import Text from '../../atoms/text'
import Mapp from './mapp'
import useGetProfile from '../../../hooks/use-get-profile';
import axios from 'axios';

function ContentMap({ setAddressMapp }) {
    const {data} = useGetProfile();

    return (
        <div className='pr-4'>
            <div className='flex items-center gap-2'>
                <div className='border-2 border-BorderBlue bg-BorderBlue w-6 h-2 rounded-sm'/>
                <Text>آدرس خود را دقیق وارد کنید</Text>
            </div>
            <div className='mt-4 rounded-2xl'>
                <Mapp setAddressMapp={setAddressMapp} />
            </div>
        </div>
    )
}

export default ContentMap
