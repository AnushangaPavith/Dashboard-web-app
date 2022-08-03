import { render, screen, cleanup } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import LogoutPopup from "../LogoutPopUp";

afterEach(() => { cleanup(); })

test("render and count buttons", async () => {
    render(
        <Router>
            <LogoutPopup />
        </Router>);
    const buttonList = await screen.findAllByRole('button');
    expect(buttonList).toHaveLength(2);
})
