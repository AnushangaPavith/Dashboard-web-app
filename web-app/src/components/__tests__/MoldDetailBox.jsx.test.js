import { render, screen, cleanup } from "@testing-library/react";
import MoldDetailBox from"../MoldDetailBox";

afterEach(() => {
    cleanup();
})

test("render Mold Details Box table", () => {
    render(<MoldDetailBox />);
    const DataBoxElement1 = screen.getByTestId('DetailBox1');
    expect(DataBoxElement1).toContainHTML('<tbody>');
    expect(DataBoxElement1).toContainHTML('<td>');
});