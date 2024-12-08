import React from 'react';
import Image from "next/image"
import MenShortSleeves from "../public/HomeImages/menShortSleeves.png"
import airJordanMid from "../public/airJordanMid.png"

const FreeDeliveryBanner: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md font-inter text-sm text-gray-900">
      <div className="flex flex-col gap-1">
        <div className="font-medium">Free Delivery</div>
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-normal">Applies to orders of ₹ 14,000.00 or more.</span>
          <a href="#" className="text-xs font-medium underline">View details</a>
        </div>
      </div>
    </div>
  );
};

interface ProductCardProps {
  imageId: string;
  name: string;
  description: string;
  color: string;
  price: string;
  size: string;
  quantity: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageId, name, description, color, price, size, quantity }) => {
  return (
    <div className="flex border p-6 w-[717px] bg-white/5">
      <Image 
        src={`${MenShortSleeves}`} 
        alt={name} 
        className="w-[150px] h-[150px] mr-8"
      />
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between mb-6">
          <div className="flex flex-col">
            <div className="font-medium text-base text-gray-900">{name}</div>
            <div className="text-base text-gray-500">{description}</div>
            <div className="text-base text-gray-500">{color}</div>
            <div className="flex items-center">
              <div className="text-base text-gray-500 mr-2.5">Size: {size}</div>
              <div className="text-base text-gray-500">Qty: {quantity}</div>
            </div>
          </div>
          <div className="text-base text-gray-900 text-right">{price}</div>
        </div>
        <div className="flex gap-4">
          <button className="w-6 h-6 bg-[url('./assets/frame-2.svg')] bg-no-repeat bg-center border-none cursor-pointer"></button>
          <button className="w-6 h-6 bg-[url('./assets/frame-3.svg')] bg-no-repeat bg-center border-none cursor-pointer"></button>
        </div>
      </div>
    </div>
  );
};

const SummarySection: React.FC = () => {
  return (
    <div className="w-[350.67px] p-5 bg-gray-900 text-white rounded-lg font-inter">
      <h2 className="text-lg font-medium mb-5">Summary</h2>
      <div className="flex justify-between items-center mb-2.5 text-base">
        <span>Subtotal</span>
        <span>₹ 20,890.00</span>
      </div>
      <div className="flex justify-between items-center mb-2.5 text-base">
        <span>Estimated Delivery & Handling</span>
        <span>Free</span>
      </div>
      <hr className="border-gray-300 my-5" />
      <div className="flex justify-between items-center mb-2.5 text-base">
        <span>Total</span>
        <span>₹ 20,890.00</span>
      </div>
      <button className="w-full py-4 bg-gray-900 text-white rounded-lg text-base font-medium cursor-pointer text-center">
        Member Checkout
      </button>
    </div>
  );
};

const RecommendationSection: React.FC = () => {
  return (
    <div className="flex flex-col p-5 w-[431.78px]">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-inter font-medium text-lg text-gray-900">You Might Also Like</h2>
        <div className="flex gap-3">
          <button className="w-12 h-12 bg-gray-100 rounded-full border-none cursor-pointer">◀</button>
          <button className="w-12 h-12 bg-gray-100 rounded-full border-none cursor-pointer">▶</button>
        </div>
      </div>
      <div className="flex items-center">
        <Image 
          src={`${airJordanMid}`} 
          alt="Product" 
          className="w-[431.78px] h-[431.78px] mr-5"
        />
        <div className="flex flex-col gap-2">
          <p className="font-inter font-medium text-base text-gray-900">Air Jordan 1 Mid SE Craft</p>
          <p className="font-inter font-normal text-base text-gray-500">Men's Shoes</p>
          <p className="font-inter font-medium text-base text-gray-900">MRP: ₹ 12,295.00</p>
        </div>
      </div>
    </div>
  );
};

const Cart: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 bg-black p-5 text-white">
      <FreeDeliveryBanner />
      <div className="flex justify-between">
        <div>
          <h2 className="font-inter text-lg font-medium text-white">Bag</h2>
          <ProductCard 
            imageId="1:5438" 
            name="Nike Dri-FIT ADV TechKnit Ultra" 
            description="Men's Short-Sleeve Running Top" 
            color="Ashen Slate/Cobalt Bliss" 
            price="MRP: ₹ 3,895.00" 
            size="L" 
            quantity={1} 
          />
          <ProductCard 
            imageId="1:5438" 
            name="Nike Air Max 97 SE" 
            description="Men's Shoes" 
            color="Flat Pewter/Light Bone/Black/White" 
            price="MRP: ₹ 16,995.00" 
            size="8" 
            quantity={1} 
          />
        </div>
        <SummarySection />
      </div>
      <RecommendationSection />
    </div>
  );
};

export default Cart;
