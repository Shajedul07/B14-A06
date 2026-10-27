import React from 'react';
import Logo from '../../public/logo.png'
import Image from 'next/image'
const Footer = () => {
    return (
        <div className='container mx-auto mt-4 bg-[#15171d] p-5'>
            <div className='flex gap-2'>
                <Image
                    src={Logo}
                    alt='FitLog Logo'
                />
                <div>
                    <h3>FITLOG</h3>
                </div>
                <div className='ms-auto text-white/30'>
                    <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;