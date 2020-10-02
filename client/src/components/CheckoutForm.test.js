import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //arrange
    render(<CheckoutForm />);
    const formHeader = screen.getByText(/checkout form/i)

    //assert
    expect(formHeader).toBeInTheDocument()

});

test("form shows success message on submit with form details", () => {
    //arrange
    render(<CheckoutForm />);
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const usaState = screen.getByLabelText(/state/i);
    const zipCode = screen.getByLabelText(/zip/i);
    const checkoutBtn = screen.getByRole('button', { name: /checkout/i});
    
    //act
    fireEvent.change(firstName, { target: { value: 'Andre'}});
    fireEvent.change(lastName, { target: { value: '3000'}});
    fireEvent.change(address, { target: { value: '420 Rainbow Road'}});
    fireEvent.change(city, { target: { value: 'ATL'}});
    fireEvent.change(usaState, { target: { value: 'Georgia'}});
    fireEvent.change(zipCode, { target: { value: '30301'}});
    fireEvent.click(checkoutBtn)

    //assert
    expect(screen.getByText(/You have ordered some plants! Woo-hoo!/i)).toBeInTheDocument()

});
