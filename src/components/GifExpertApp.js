import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

const GifExpertApp = () => {


    const [category, setCategory] = useState(['Genshin']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setCategory} />
            <hr />



            {
                category.map(obj => (
                    <GifGrid
                        key={obj}
                        category={obj}
                    />
                ))
            }
        </>
    );
}

export default GifExpertApp;