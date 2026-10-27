import { getAllCards } from '@/lib/api';
import React from 'react';
import DisplayCards from './DisplayCards';

const AllCards = async () => {
    const data = await getAllCards();

    return (
        <div className='container mx-auto mt-4'>
            <h1 className='font-bold text-2xl'>THE LIBRARY</h1>
            <p className='text-white/30 mb-5'>Twelve lifts covering every major muscle group.</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    data.map((card) => (
                        <DisplayCards key={card.id} card={card} ></DisplayCards>
                    ))
                }
            </div>
        </div>
    );
};

export default AllCards;