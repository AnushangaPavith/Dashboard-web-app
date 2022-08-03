import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import SignUp from "../SignUp";

afterEach(() => { cleanup(); })

test("render and count input text fields", async () => {
    render(
        <Router>
            <SignUp />
        </Router>);
    const inputFields = await screen.findAllByRole('textbox')
    expect(inputFields).toHaveLength(1);
})

test("render and count password fields", async () => {
    render(
        <Router>
            <SignUp />
        </Router>);
    const passwordField = await screen.findAllByRole('textbox', { type: 'password' })
    expect(passwordField).toHaveLength(1);
})

test("render and count buttons", async () => {
    render(
        <Router>
            <SignUp />
        </Router>);
    const buttonList = await screen.findAllByRole('button');
    expect(buttonList).toHaveLength(2);
})

test("render and test onClick event", () => {
    const { getByText, asFragment } = render(
        <Router>
            <SignUp />
        </Router>);

    const button = getByText("Go Back");

    fireEvent.click(button);
    expect(asFragment()).toMatchSnapshot();
})