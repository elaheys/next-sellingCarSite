import React from 'react';
import { useRouter } from 'next/router';
import CarsData from '@/data/CarsData';
import CarsList from '@/components/templates/CarsList';

const Filtering = () => {
    const router = useRouter();
    const slug = router.query.slugs[0] || [];
    const chosenCar = CarsData.filter(cars => cars.category === slug);

    return (
        <div>
            <CarsList data={chosenCar}/>
        </div>
    );
};

export default Filtering;