import { useState } from "react";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Naruto', 'Shin Chan' ]);

    const onAddCategory = () => {
        const newCategory = 'HunterXHunter';
        setCategories([...categories, newCategory]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <button onClick={ onAddCategory }>Agregar</button>
            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }>Hola</li>
                    })
                }
            </ol>
        </>
    )
}
