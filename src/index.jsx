"use strict";
import React from 'react';
import ReactDOM from 'react-dom/client';
import QRCode from './Images/image-qr-code.png';

const demo=ReactDOM.createRoot(document.getElementById("demo"));
demo.render(
  <React.StrictMode>

    {/*This content is only viewable on 'Desktop and Laptop' devices.*/}
    <div className='block Portable:hidden Tablet:hidden MobileLarge:hidden MobileSmall:hidden'>
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <div className='flex flex-col justify-center items-center h-auto w-72 p-3 m-5 bg-White rounded-2xl'>
          <img src={QRCode} alt={'QR-Code'} className='h-72 w-72 rounded-xl p-1' />
          <h1 className='text-xl font-Outfit font-bold text-center p-2 text-DarkBlue'>Improve your front-end skills by building projects</h1>
          <p className='text-sm text-center font-normal p-2 text-GrayishBlue'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>

    {/*This content is only viewable on 'Tablets' and 'Large Mobiles' devices. I used 'Portable' screen size to displaying in landscape view for 'Large Mobiles' and 'Tablets' devices.*/}
    <div className='hidden Portable:block Tablet:block MobileLarge:block MobileSmall:hidden'>
      <div className="flex flex-col justify-center items-center h-screen w-ful Portable:landscape:h-auto">
        <div className='flex flex-col justify-center items-center h-auto w-72 p-3 m-5 bg-White rounded-2xl'>
          <img src={QRCode} alt={'QR-Code'} className='h-72 w-72 rounded-xl p-1' />
          <h1 className='text-xl font-Outfit font-bold text-center p-2 text-DarkBlue'>Improve your front-end skills by building projects</h1>
          <p className='text-sm text-center font-normal p-2 text-GrayishBlue'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>

    {/*This content is only viewable on 'Small Mobiles' devices. I used 'Portable' screen size to displaying in landscape view for 'Small Mobiles' devices.*/}
    <div className='hidden MobileSmall:block'>
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <div className='flex flex-col justify-center items-center h-auto w-64 p-3 m-3 bg-White rounded-2xl'>
          <img src={QRCode} alt={'QR-Code'} className='h-64 w-64 rounded-xl p-1' />
          <h1 className='text-base w-56 font-Outfit font-bold text-center p-2 text-DarkBlue'>Improve your front-end skills by building projects</h1>
          <p className='text-xs w-56 text-center font-normal p-2 text-GrayishBlue'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
    
  </React.StrictMode>
);