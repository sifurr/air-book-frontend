"use client"

import { CustomButtonProps } from "@/types"

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles }: CustomButtonProps) => {

    return (
        <button
            disabled={false}
            onClick={handleClick}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
        >
            <span className={`flex-1 ${textStyles}`}>{title}</span>
        </button>
    )
}

export default CustomButton