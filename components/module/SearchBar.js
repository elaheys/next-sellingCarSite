import {useState} from 'react';
import { useRouter } from 'next/router';
//style
import styles from './SearchBar.module.css';

const SearchBar = () => {
    const [ min,setMin ] = useState('');
    const [ max,setMax ] = useState('');
    const router = useRouter();

    const clickHandler = () => {
        if(min && max){
            router.push(`/filter/${min}/${max}`)
        }else{
            alert("Please enter MIN and MAX price!")
        }
    }
    return (
        <div className={styles.container}>
            <div>
                <input 
                placeholder='Enter min-price' 
                type='number'
                value={min}
                onChange={(e) => setMin(e.target.value)}
                />
                <input 
                placeholder='Enter max-price' 
                type='number'
                value={max}
                onChange={(e) => setMax(e.target.value)}
                />
            </div>
            <button type='submit' onClick={clickHandler}>Search</button>
        </div>
    );
};

export default SearchBar;