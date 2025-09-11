import React from "react";

const AvatarButton = ({
    onTap,
    width,
    height,
    className,
    padding = 8 || padding,
    border = "1px solid #ccc" || border,
    color = "white",
    text,
    classOut,
    classImg,
    marginBottom,
    // Image props
    paddingImage = 8,
    marginImage = "auto",
    image ,
    boxFit = "cover",

    // Icon props
    icon = "❄", // default = snowflake (Icons.ac_unit مشابه)
    colorIcon = "black",
    sizeIcon = 24,

    check = false
    }) => {
    return (
        <div style={{ textAlign: "center"}} className={className}>
            <div
                onClick={onTap || (() => {})}
                role="button"
                className="rounded-lg"
                style={{
                    width: width,
                    height: height,
                    padding: padding,
                    overflow: "hidden",
                    border: border,
                    backgroundColor: color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxSizing: "border-box",
                    // marginBottom: marginBottom,
                    margin: "auto",
                    textAlign: "center"
                }}
                >
                {check ? (
                    <div
                    className="rounded-[4px]"
                    style={{
                        padding: paddingImage,
                        margin: marginImage,
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${image})`,
                        backgroundSize: boxFit,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        boxSizing: "border-box",
                        
                    }}
                    ></div>
                ) : (
                    <span
                    style={{
                        fontSize: sizeIcon,
                        color: colorIcon
                    }}
                    >
                    {icon}
                    </span>
                )}
            </div>
            <span className={`text-sm block mt-2 w-[80px] truncate`}>
                {text}
            </span>
        </div>
    );
};

export default AvatarButton;
