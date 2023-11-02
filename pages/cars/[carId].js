import React from 'react';
import { useRouter } from 'next/router';
import CarsData from '@/data/CarsData';
import CarDetails from '@/components/templates/CarDetails';

const CarDetail = () => {
    const router = useRouter()
    const {carId} = router.query;
    const CardDetails = CarsData[carId - 1]
    
    return (
        <div>
            <CarDetails {...CardDetails}/>
        </div>
    );
};

export default CarDetail;