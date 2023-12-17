import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas de GifItem', () => {

    const title = 'Naruto Shippuden';
    const url = 'https://media4.giphy.com/media/2y98KScHKeaQM/giphy.gif?cid=4523aefel0986zifubtkxvuq8l41qr8fcrr1p1iylhlxvlfj&ep=v1_gifs_search&rid=giphy.gif&ct=g';

    test('should evaluate snapshot', () => {

        const { container } = render( <GifItem title={ title } url={ url }/>);
        expect( container ).toMatchSnapshot();

    });

    test('should mostrar la imagen con el URL y ALT indicado', () => {

        render( <GifItem title={ title } url={ url } /> );

        const { src, alt } = screen.getByRole( 'img' );
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    });

    test('should mostrar el titulo en el componente', () => {

        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();

    })

})