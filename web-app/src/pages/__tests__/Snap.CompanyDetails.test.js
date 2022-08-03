import { render, cleanup } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import CompanyDetails from "../CompanyDetails";

afterEach(() => { cleanup(); })

test("render and take snapshot of company details page", async () => {
    const { asFragment } = render(
        <Router>
            <CompanyDetails />
        </Router>);

    expect(asFragment()).toMatchSnapshot();
})
