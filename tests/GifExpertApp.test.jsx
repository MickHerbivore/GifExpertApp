import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas de <GifExpertApp />', () => {

    const inputValue = 'Game of Thrones';

    test('should add not existing category', () => {

        render( <GifExpertApp /> );
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( screen.getByText( inputValue ) ).toBeTruthy();

    });

    test('should not add existing category', () => {

        render( <GifExpertApp /> );
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( screen.getAllByText( inputValue ).length ).toBe( 1 );

    });

});