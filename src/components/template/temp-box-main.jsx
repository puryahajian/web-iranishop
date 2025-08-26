import React from 'react'

function TempBoxMain({children, className}) {
    return (
        <div className={`px-[64px] mt-[120px] max-[990px]:px-6 ${className}`}>
            {children}
        </div>
    )
}

export default TempBoxMain
