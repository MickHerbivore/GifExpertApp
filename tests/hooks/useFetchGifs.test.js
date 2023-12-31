import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en Hook useFetchGifs', () => {
    
    test('should regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs( 'Friends' ));
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBe( 0 );
        expect( isLoading ).toBeTruthy();

    });

    test('should retornar un arreglo de imágenes y el isLoading en false', async () => {

        const { result } = renderHook( () => useFetchGifs( 'Friends' ));
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan( 0 )
        );

        const { images, isLoading } = result.current;
        
        expect( images.length ).toBeGreaterThan( 0 );
        expect( isLoading ).toBeFalsy();

    })

});