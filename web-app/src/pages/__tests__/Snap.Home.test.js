import { render, cleanup } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import Homepage from "../Home";

afterEach(() => { cleanup(); })

test("render and take snapshot", async () => {
    const { asFragment } = render(
        <Router>
            <Homepage />
        </Router>);

    expect(asFragment()).toMatchSnapshot();
})
