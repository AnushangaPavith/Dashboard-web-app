import { render, screen, cleanup } from "@testing-library/react";
import MachineDetailBox from"../MachineDetailBox";

afterEach(() => {
    cleanup();
})

test("render Mold Details Box table", () => {
    render(<MachineDetailBox />);
    const DataBoxElement1 = screen.getByTestId('MachineDetailBox1');
    expect(DataBoxElement1).toContainHTML('<tbody>');
    expect(DataBoxElement1).toContainHTML('<td>');
});