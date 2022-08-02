import { render, screen, cleanup } from "@testing-library/react";
import MoldDetailBox from"../MoldDetailBox";

afterEach(() => {
    cleanup();
})

test("render Mold Details Box and check all Labels", async () => {
    render(<MoldDetailBox />);
    const DataBoxElement = screen.getByTestId('DetailBox1');
    expect(DataBoxElement).toHaveTextContent("Mold ID:");
    expect(DataBoxElement).toHaveTextContent("Material:");
    expect(DataBoxElement).toHaveTextContent("MONA No:");
    expect(DataBoxElement).toHaveTextContent("Mold Maker:");
});

test("render Mold Details Box table", () => {
    render(<MoldDetailBox />);
    const DataBoxElement1 = screen.getByTestId('DetailBox1');
    expect(DataBoxElement1).toContainHTML('<tbody>');
    expect(DataBoxElement1).toContainHTML('<td>');
});