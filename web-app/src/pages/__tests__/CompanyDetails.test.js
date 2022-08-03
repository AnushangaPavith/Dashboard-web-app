import { render, screen, cleanup } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import CompanyDetails from "../CompanyDetails";

afterEach(() => { cleanup(); })


test("render and count buttons", async () => {
    render(
        <Router>
            <CompanyDetails />
        </Router>);
    const buttonList = await screen.findAllByRole('svg');
    expect(buttonList).toHaveLength(4);
})