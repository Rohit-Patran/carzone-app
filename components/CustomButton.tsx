"use client";
import { CustomProps } from "@/types/types";
import Image from "next/image";

const CustomButton = ({title , containerStyles , rightIcon ,  handleClick} : CustomProps) => {
  return (
    <button
        disabled = {false}
        type={`button`}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span
            className={`flex-1`}
        >
            {title}
        </span>
        {rightIcon && <div className="relative w-6 h-6 ">
          <Image src={rightIcon} fill alt="arrow icon" className="object-contain"/>
        </div>}
    </button>
  )
}

export default CustomButton