import React from 'react';
import Logo from '../../public/logo.png'
import Image from 'next/image'
const Footer = () => {
    return (
        <div className=' mt-4 bg-[#15171d] p-8'>
            <div className='flex gap-2 container mx-auto'>
                <Image
                    src={Logo}
                    alt='FitLog Logo' 
                />
                <div>
                    <h3 className='uppercase' >FITLOG </h3>
                </div>
                <div className='ms-auto text-white/30'>
                    <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;