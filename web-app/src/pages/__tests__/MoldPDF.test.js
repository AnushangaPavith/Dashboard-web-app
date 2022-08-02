import { render, screen, cleanup } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import MoldPDF from "../MoldPDF";

afterEach(() => { cleanup(); })

test("render and count buttons", async () => {
    render(
        <Router>
            <MoldPDF />
        </Router>);
    const buttonList = await screen.findAllByRole('button');
    expect(buttonList).toHaveLength(1);
})
