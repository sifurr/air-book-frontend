import { MouseEventHandler } from "react";

export type CustomButtonProps = {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    isDisabled?: boolean;
}