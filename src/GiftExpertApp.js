import React, { useState } from 'react'
import AddCategory from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';


const GiftExpertApp = () => {

    
    const  [ categories, setCategories ] = useState(['One Punch']);

    // const handleAdd = () => {
        // setCategories( ['HunterXHunter', ...categories] );
    //     setCategories( cats => [ ...cats, 'HunterXHunter'] )
    // }
    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            
            
            
                <ol>
                    {
                        categories.map(category => (
                            <GifGrid 
                                key={ category }
                                category={ category } />
                        ))
                            
                    }
                </ol>
            
        </>
    )
}


export default GiftExpertApp;
