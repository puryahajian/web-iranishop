import React from "react";
import TempHeader from "../../template/temp-header";
import Text from "../../atoms/text";
import useGetOption from "../../../hooks/use-get-option";
import AvatarButtonHeader from "../avatar-button-header";
import TempBoxMain from "../../template/temp-box-main";
import TempBoxWhite from "../../template/temp-box-white";
import ContentUsRight from "./content-us-right";
import ContentUsLeft from "./content-us-left";
import TempFooter from "../../template/temp-footer"


function MulContentUs() {
   

    return(
        <div>
            <TempHeader/>
            <div className="block max-[480px]:hidden">
                <TempBoxMain>
                    <TempBoxWhite>
                        <div className='flex gap-12 max-[480px]:grid max-[480px]:grid-cols-1'>
                            <ContentUsRight/>
                            <div className='w-full'>
                                <ContentUsLeft/>      
                            </div>
                        </div>
                    </TempBoxWhite>
                    <TempFooter/>
                </TempBoxMain>
            </div>

            
        </div>
    )
}

export default MulContentUs;