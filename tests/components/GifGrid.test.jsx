import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock( '../../src/hooks/useFetchGifs' );

describe('Pruebas en <GifGrid />', () => {

    const category = 'Game of Thrones';

    test('should mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } />);

        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );

    });

    test('should mostrar items cuando se cargan las imágenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'asda',
                url: 'https://asdasd.cl/jasdasd.jpg'
            },
            {
                id: 'ABCD',
                title: 'qweq',
                url: 'https://qwe.cl/jasdasd.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render( <GifGrid category={ category } />);

        expect( screen.getAllByRole( 'img' ).length ).toBe( 2 );

    });

});