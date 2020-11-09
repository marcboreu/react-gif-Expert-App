import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import {Container} from 'react-bootstrap';


const GifExpertApp = () => {


    const [categories, setCategories] = useState(["dragon ball"]);

    // const handleAdd = () => {
    //     // setCategories( [...categories, "Hunter"]);
    //     setCategories( cats => [...cats, "Hunter"]);

    // };


    return (
        <Container fluid>
                <h2 className="titleApp">Gif Expert App</h2>
                <AddCategory setCategories={setCategories}/>
                <div className="gridApp">
                    {
                        categories.map(category => (
                            <GifGrid 
                                key={category}
                                category={category}
                            />
                        ))
                    }
                </div>
        </Container>
    );
};

export default GifExpertApp;