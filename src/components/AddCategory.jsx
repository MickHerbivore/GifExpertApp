import { useState } from "react";
// import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue( event.target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        if (inputValue.trim().length <= 1) return;

        setCategories( (categories) => [ inputValue, ...categories ] );
        setInputValue( '' );
    }

  return (
    <form
        onSubmit={ onSubmit }
    >

        <input
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}

// AddCategory.propTypes = {
//     setCategories: PropTypes.function.required
// }