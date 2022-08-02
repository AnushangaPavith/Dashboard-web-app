import { render, screen, cleanup } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import Homepage from "../Home";

afterEach(() => { cleanup(); })

test("render and find add machine box", async () => {
    render(
        <Router>
            <Homepage />
        </Router>);
    const inputFields = await screen.findAllByTestId('add-machine-box-id');
    expect(inputFields).toBeTruthy();
})
