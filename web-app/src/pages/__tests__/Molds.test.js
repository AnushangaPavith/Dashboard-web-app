import { render, screen, cleanup } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import Molds from "../Molds";

afterEach(() => { cleanup(); })

test("render and check all the labels", async () => {
    render(
        <Router>
            <Molds />
        </Router>);
    const buttonList = await screen.findAllByRole('button');
    expect(buttonList).toHaveLength(1);
})
