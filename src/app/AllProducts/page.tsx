import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Image1 from "../public/PImage (1).png"
import Image2 from "../public/PImage (2).png"
import Image3 from "../public/PImage (3).png"
import Image4 from "../public/PImage (4).png"
import Image5 from "../public/PImage (5).png"
import Image6 from "../public/PImage (6).png"
import Image7 from "../public/PImage (7).png"
import Image8 from "../public/PImage (8).png"
import Image9 from "../public/PImage (9).png"

// Sidebar Props Interface
interface SidebarProps {
    categories: string[];
}

// Sidebar Component
const Sidebar: React.FC<SidebarProps> = ({ categories }) => {
    return (
        <div className="w-full lg:w-[250px] bg-white border-r border-gray-300">
            <ul className="list-none p-4">
                {categories.map((category, index) => (
                    <li key={index} className="text-gray-700 mb-2">
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

// ProductCard Props Interface
interface ProductCardProps {
    image: StaticImageData;
    altText: string;
    label: string;
    name: string;
    category: string;
    additionalCategory: string;
    price: string;
}

// ProductCard Component
const ProductCard: React.FC<ProductCardProps> = ({
    image,
    altText,
    label,
    name,
    category,
    additionalCategory,
    price,
}) => {
    return (
        <div className="w-full lg:w-[240px] xl:w-[260px] h-auto bg-white border border-gray-300 rounded-lg shadow-lg p-4 lg:p-6">
            {/* Product Image */}
            <Image
                src={image}
                alt={altText}
                className="w-full h-[160px] lg:h-[200px] object-cover rounded-md"
            />

            {/* Texts below the image */}
            <div className="mt-4">
                <h3 className="text-red-600 text-xs lg:text-sm font-semibold">{label}</h3>
                <h1 className="text-lg lg:text-xl font-bold mt-1">{name}</h1>
                <p className="text-[#757575] text-sm lg:text-base mt-1">{category}</p>
                <p className="text-[#757575] text-sm lg:text-base mt-1">{additionalCategory}</p>
                <h1 className="text-lg lg:text-xl font-bold mt-1">MRP: {price}</h1>
            </div>
        </div>

    );
};

// ProductPage Component
const ProductPage: React.FC = () => {
    const categories: string[] = [
        'Shoes',
        'Sports Bras',
        'Tops & T-Shirts',
        'Hoodies & Sweatshirts',
        'Jackets',
        'Trousers & Tights',
        'Shorts',
        'Tracksuits',
        'Jumpsuits & Rompers',
        'Skirts & Dresses',
        'Socks',
        'Accessories & Equipment',
    ];

    const products: ProductCardProps[] = [
        {
            image: Image1,
            altText: "Nike Air Force 1 Mid '07",
            label: 'Just In',
            name: "Nike Air Force 1 Mid '07",
            category: "Men's Shoes",
            additionalCategory: '1 Colour',
            price: '₹ 10 795.00',
        },
        {
            image: Image2,
            altText: "Nike Court Vision Low Next Nature",
            label: 'Just In',
            name: "Nike Court Vision Low Next Nature",
            category: "Men's Shoes",
            additionalCategory: '1 Colour',
            price: '₹ 4 995.00',
        },
        {
            image: Image3,
            altText: "Nike Air Force 1 Mid '07",
            label: 'Just In',
            name: "Nike Air Force 1 Mid '07",
            category: "Women's Shoes",
            additionalCategory: '1 Colour',
            price: '₹ 8 695.00',
        },
        {
            image: Image4,
            altText: "Nike Air Force 1 React",
            label: 'Just In',
            name: "Nike Air Force 1 React",
            category: "Men's Shoes",
            additionalCategory: '1 Colour',
            price: '₹ 13 295.00',
        },
        {
            image: Image5,
            altText: "Air Jordan 1 Elevate Low",
            label: 'Promo Exclusion',
            name: "Air Jordan 1 Elevate Low",
            category: "Women's Shoes",
            additionalCategory: '1 Colour',
            price: '₹ 11 895.00',
        },
        {
            image: Image6,
            altText: "Nike Standard Issue",
            label: 'Just In',
            name: "Nike Standard Issue",
            category: "Women's Basketball Jersey",
            additionalCategory: '1 Colour',
            price: '₹ 2 895.00',
        },
        {
            image: Image7,
            altText: "Nike Dunk Low Retro SE",
            label: 'Promo Exclusion',
            name: "Nike Dunk Low Retro SE",
            category: "Men's Shoes",
            additionalCategory: '1 Colour',
            price: '₹ 9 695.00',
        },
        {
            image: Image8,
            altText: "Nike Dri-FIT UV Hyverse",
            label: 'Sustainable Materials',
            name: "Nike Dri-FIT UV Hyverse",
            category: "Men's Short-Sleeve Graphic Fitness Top",
            additionalCategory: '1 Colour',
            price: '₹ 2 495.00',
        },
        {
            image: Image9,
            altText: "Nike Court Vision Low",
            label: 'Just In',
            name: "Nike Court Vision Low",
            category: "Men's Shoes",
            additionalCategory: '1 Colour',
            price: '₹ 5 695.00',
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row p-6 space-x-0 lg:space-x-4">
            {/* Sidebar */}
            <Sidebar categories={categories} />

            {/* Vertical Separator */}
            <div className="border-l border-gray-300 h-full lg:block hidden mx-4"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>



        </div>
    );
};

export default ProductPage;
