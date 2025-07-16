import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface DefaultButtonProps {
    text: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick?: any; 
    className?: string ;
    isArrowIcon?: boolean;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ text, onClick, className , isArrowIcon = false }) => {
    return (
        <button className={` bg-red-600 text-white py-1 px-4 rounded cursor-pointer ${className}`} onClick={onClick}> {text} {isArrowIcon && (<FontAwesomeIcon icon={faAngleRight} />)}</button>
    )
}
export default DefaultButton;