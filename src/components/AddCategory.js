import React, { useState } from 'react'
import PropTypes  from "prop-types";

export const AddCategory = ( {setCategory} ) => {


    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(inputValue.trim().length >2){
            setCategory(newCategory => [inputValue, ...newCategory]);
            setInputValue('');

        }
    }

    return (
            <form onSubmit={handleSubmit}>
                <h2>Add Category</h2>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder='Add new category'
                />
            </form>
    )


}
AddCategory.propTypes = {
    setCategory : PropTypes.func.isRequired
}
