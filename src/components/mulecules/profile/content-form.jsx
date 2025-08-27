import React, { useEffect, useState } from 'react'
import Text from '../../atoms/text'
import Input from '../../atoms/input'
import Button from '../../atoms/button'
import useGetProfile from '../../../hooks/use-get-profile'
import usePatchProfile from '../../../hooks/use-patch-profile'
import Loading from '../../atoms/loading'
import toast from 'react-hot-toast'


function ContentForm({ addressMapp }) {
    const {data} = useGetProfile();
    // console.log(addressMapp)
    const {mutate, isPending} = usePatchProfile();
    const [name, setName] = useState();
    const [family, setFamily] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const addressLat = addressMapp.latitude;
    const addressLng = addressMapp.longitude;


    useEffect(() => {
        if (data) {
            setName(data.name || '');
            setPhone(data.phone || '');
            setAddress(data.address || '');
            setFamily(data.family || '')
        }
    }, [data]);

    // اگر addressMapp تغییر کرد، مقدار input آدرس را با آن مقدار به‌روزرسانی کن
    useEffect(() => {
        if (addressMapp) {
            // نمایش آدرس به صورت رشته فارسی (مثلاً road, city, state, country)
            const addressString = [
                // addressMapp.address.country,
                // addressMapp.address.state,
                addressMapp.address.city,
                addressMapp.address.suburb,
                addressMapp.address.neighbourhood,
                addressMapp.address.road,
            ].filter(Boolean).join('، ');
            setAddress(addressString);
        }
    }, [addressMapp]);

    const handleSubmit = (e) => {
        mutate(
            {
                name, phone, address, addressLat, addressLng, family
            },
            {
                onSuccess: () => {
                    toast.success('تم تحديث الملف الشخصي')
                }
            }
        );
    };

    return (
        <div className='border-l border-BorderGray pl-6'>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <div className='flex items-center gap-2'>
                            <div className='border-2 border-BorderBlue bg-BorderBlue w-6 h-2 rounded-sm'/>
                            <Text className={``}>الاسم </Text>
                        </div>
                        <Input
                            classIcon={`hidden`}
                            className={`bg-transparent pr-5 placeholder:text-sm mt-[10px]`}
                            placeholder={`الاسم `}
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <div className='flex items-center gap-2'>
                            <div className='border-2 border-BorderBlue bg-BorderBlue w-6 h-2 rounded-sm'/>
                            <Text className={``}>اسم العائلة</Text>
                        </div>
                        <Input
                            classIcon={`hidden`}
                            className={`bg-transparent pr-5 placeholder:text-sm mt-[10px]`}
                            placeholder={`اسم العائلة`}
                            name="family"
                            value={family}
                            onChange={(e) => setFamily(e.target.value)}
                        />
                    </div>
                </div>

                <div className='flex items-center gap-2 mt-4'>
                    <div className='border-2 border-BorderBlue bg-BorderBlue w-6 h-2 rounded-sm'/>
                    <Text className={``}>رقم الجوال</Text>
                </div>
                <Input
                    classIcon={`hidden`}
                    className={`bg-transparent pr-5 placeholder:text-sm mt-[10px]`}
                    placeholder={`رقم الجوال`}
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <div className='flex items-center gap-2 mt-4'>
                    <div className='border-2 border-BorderBlue bg-BorderBlue w-6 h-2 rounded-sm'/>
                    <Text className={``}>العنوان</Text>
                </div>
                <Input
                    classIcon={`hidden`}
                    className={`bg-transparent pr-5 placeholder:text-sm mt-[10px]`}
                    placeholder={`العنوان`}
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <Button onClick={(e) => {
                    e.preventDefault();
                    handleSubmit()
                }} className={`mt-10 w-full py-4`}>
                    {isPending ? <Loading/> : 'تحديث العنوان'}
                </Button>
            </form>
        </div>
    )
}

export default ContentForm
