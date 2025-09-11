import React, { useState } from "react";
import Text from "../../atoms/text";
import TempHeader from "../../template/temp-header";
import TempBoxMain from "../../template/temp-box-main";
import CardActiveOrderMobile from "./card-active-order-mobile";
import Burron from '../../atoms/button'
import ModalGeneralBottom from '../modal-general-bottom'
import ItemCardActiveOrderMobile from "./item-card-active-order-mobile";
import Img from '../../../assets/image/item-discount.png'
import moment from "moment-jalaali";
import Rial from "../../../assets/image/Iconly/Iconly/Bold/Frame.png"


function ActiveOrderMobile () {
    const [modalDetailOrder, setModalDetailOrder] = useState(false);
    const [getData , setGetData] = useState();
    console.log(getData)

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
        0: "bg-yellow-500",  // pending
        1: "bg-blue-500",    // paid
        2: "bg-green-600",   // accepted
        3: "bg-red-600",     // rejected
        4: "bg-orange-500",  // in progress
        5: "bg-purple-500",  // packing
        6: "bg-sky-500",     // delivering
        7: "bg-gray-500",    // canceled
        8: "bg-emerald-600", // completed
    };

    const formatPrice = (price) => {
        if (!price) return "0";
      
        // تبدیل رشته یا عدد به Number و حذف اعشار اضافی
        const numberPrice = Number(price);
      
        // تبدیل به رشته با جداکننده هزار و اعداد عربی
        const formatted = numberPrice.toLocaleString("ar-EG");
      
        return formatted;
    };
    return(
        <>
            <TempHeader/>
            <div className={`mt-[80px] mx-4`}>
                <CardActiveOrderMobile 
                    setModalDetailOrder={setModalDetailOrder}
                    setGetData={setGetData}
                />
            </div>

            {/* modal view order */}
            <ModalGeneralBottom
                close={() => setModalDetailOrder(false)}
                isOpen={modalDetailOrder}
                handleClose={() => setModalDetailOrder(false)}
                classTitle={`hidden`}
                // classContent={`max-h-[700px] overflow-y-auto`}
                // onSuccess={handleExit}
                Title=""
                // textAccept={isPending ? <Loading/> : 'الخروج'}
                classBtns={`hidden`}
                >
                {/* header */}
                <div className="flex justify-between pb-4 items-center">
                    <Text>تفاصيل الطلب : {getData?.order_code}</Text>

                    <Burron className={`p-2`} onClick={() => setModalDetailOrder(false)}>
                        <svg 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg">
                                <path 
                                fill-rule="evenodd" 
                                clip-rule="evenodd" 
                                d="M5.293 5.293a1 1 0 011.414 0L12 10.586l5.293-5.293a1 1 0 111.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707a1 1 0 010-1.414z" 
                                fill="white"/>
                        </svg>
                    </Burron>
                </div>

                <div className="max-h-[620px] overflow-y-auto">
                    {/* order status */}
                    <div className="flex justify-between items-center">
                        <Text className={`!font-bold`}>تفاصيل الطلب</Text>

                        <div className={`p-2 px-3 rounded-lg ${stateColors[getData?.state]}`}>
                            <Text className={`text-white`}>{stateLabels[getData?.state]}</Text>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <Text>تاريخ تسجيل الطلب</Text>

                        <Text className={`text-gray-500`}>
                            {getData?.created_at ? (
                                <>
                                    {moment(getData.created_at).format('jYYYY/jMM/jDD')} 
                                </>
                            ) : ''}
                        </Text>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <Text>تفاصيل الطلب</Text>

                        <Text className={`text-gray-500`}>{getData?.order_code}</Text>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <Text>عدد العناصر</Text>

                        <Text className={`text-gray-500`}>
                            {getData?.items?.length}
                        </Text>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <Text>المبلغ الإجمالي</Text>

                        <Text className={`text-gray-500 flex items-center gap-1`}>{Number(getData?.final_price).toLocaleString("ar-EG")} <img src={Rial} alt="" /> </Text>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <Text>الخصم</Text>

                        <Text className={`text-gray-500`}>{formatPrice(getData?.discount)} %</Text>
                    </div>

                    <hr className="border border-gray-200 w-[95%] m-auto my-6" />

                    {/* info payment */}
                    <div className="bg-Gray1 p-4 rounded-lg">
                        <Text className={`!font-bold mb-4`}>معلومات الدفع</Text>

                        <div className="flex justify-between items-center">
                            <Text className={`text-sm`}>طريقة الدفع</Text>

                            <Text className={`text-gray-500`}>{getData?.payment_method === 0 ? 'نقداً' : "عبر الإنترنت"}</Text>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <Text className={`text-sm`}>وقت الدفع</Text>

                            <Text className={`text-gray-500`}>
                                {getData?.payment_time ? moment(getData?.payment_time).format('HH:mm') : 'غير متوفر'}
                            </Text>
                        </div>

                        <hr className="border border-gray-200 w-[95%] m-auto my-6" />

                        {/* info address */}
                        <Text className={`!font-bold mb-4`}>معلومات التوصيل</Text>

                        <div className="flex justify-between items-center">
                            <Text className={`text-sm`}>طريقة التوصيل</Text>

                            <Text className={`text-gray-500`}>{getData?.delivery_method === 0 ? 'المندوب' : 'حضورياً'}</Text>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <Text className={`text-sm`}>وقت التسليم</Text>

                            <Text className={`text-gray-500`}>{getData?.payment_time ? moment(getData?.delivered_time).format('HH:mm') : 'غير متوفر'}</Text>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <Text className={`text-sm`}>العنوان</Text>

                            <Text className={`text-gray-500`}>{getData?.delivery_address}</Text>
                        </div>
                    </div>

                    <hr className="border border-gray-200 w-[95%] m-auto my-6" />

                    {/* item order */}
                    <div className="grid gap-2">
                        {getData?.items?.map((product) => (
                            <ItemCardActiveOrderMobile
                                count={product?.quantity}
                                name={product?.product?.om_name}
                                price={product?.product?.price .toLocaleString('fa-IR')}
                                src={product?.product?.image}
                            />
                        ))}
                    </div>
                </div>


            </ModalGeneralBottom>
        </>
    )
}

export default ActiveOrderMobile;