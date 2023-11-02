import React from 'react';
import { useRouter } from 'next/router';
import CarsData from '@/data/CarsData';
import CarsList from '@/components/templates/CarsList';

const filteredCars = () => {
    const router = useRouter()
    const [ min,max ] = router.query.slugs || [];
    
    const filteredData = CarsData.filter(car => car.price > min && car.price < max);
    
    if(!filteredData.length) return <h3 
    style={{margin:'auto',
            width:'100px',
            backgroundColor: '#befa00',
            padding:'15px',
            textAlign:'center',
            borderRadius:'5px',
            marginTop:'120px',
        }}>Not Found!</h3>
    
    return (
        <div>
           <CarsList data={filteredData}/>
           
        </div>
    );
};

export default filteredCars;