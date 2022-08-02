import { render, screen, cleanup } from "@testing-library/react";
import DataBox from"../DataBox";

afterEach(() => {
    cleanup();
})

test("render DataBox and check all Labels", async () => {
    render(<DataBox />);
    const DataBoxElement = screen.getByTestId('DataBox1');
    expect(DataBoxElement).toHaveTextContent("Product Count:");
    expect(DataBoxElement).toHaveTextContent("Failed Count:");
    expect(DataBoxElement).toHaveTextContent("Product Rate:");
    expect(DataBoxElement).toHaveTextContent("Start Date:");
    expect(DataBoxElement).toHaveTextContent("End Date:");
});

test("render DataBox table and check if it is available", () => {
    render(<DataBox />);
    const DataBoxElement1 = screen.getByTestId('DataBox1');
    expect(DataBoxElement1).toContainHTML('<tbody>');
    expect(DataBoxElement1).toContainHTML('<td>');
});