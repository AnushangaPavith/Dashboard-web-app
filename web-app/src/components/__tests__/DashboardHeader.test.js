import { render, screen, cleanup } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import DashboardHeader from "../DashboardHeader";

afterEach(() => {
    cleanup();
})

test("render dashboard header and check the headings", async () => {
    render(
        <Router>
            <DashboardHeader />
        </Router>);
    const headerElement = screen.getByTestId('dashboard-header');
    expect(headerElement).toHaveTextContent("Login");
})
