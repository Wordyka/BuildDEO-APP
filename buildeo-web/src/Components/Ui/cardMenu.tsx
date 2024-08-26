import React from 'react';
import cover from '/cover.png'

interface CardProps {
    title: string;
    company: string;
    price: string;
}

const Card: React.FC<CardProps> = ({ title, company, price }) => (
    <div className="card bg-white rounded-[10px] w-[213px] p-[12px] shadow">
        <img src={cover} alt="Cover" className="rounded-[10px]" />
        <div className="font-bold text-[18px] mt-[12px]">{title}</div>
        <div className="text-[12px] text-[#9586A8] mt-[4px]">{company}</div>
        <div className="text-[12px] text-[#9586A8] mt-[20px]">start from:</div>
        <div className="font-bold text-[18px] text-[#FF460A]">{price}</div>
    </div>
);

export default Card;
