import { render, screen, cleanup } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import Login from "../Login";

afterEach(() => { cleanup(); })

test("render and count input text fields", async () => {
    render(
        <Router>
            <Login />
        </Router>);
    const inputFields = await screen.findAllByRole('textbox')
    expect(inputFields).toHaveLength(1);
})

test("render and count password fields", async () => {
    render(
        <Router>
            <Login />
        </Router>);
    const passwordField = await screen.findAllByRole('textbox', { type: 'password' })
    expect(passwordField).toHaveLength(1);
})

test("render and count buttons", async () => {
    render(
        <Router>
            <Login />
        </Router>);
    const buttonList = await screen.findAllByRole('button');
    expect(buttonList).toHaveLength(1);
})
