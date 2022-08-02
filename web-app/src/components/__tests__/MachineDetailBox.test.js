import { render, screen, cleanup } from "@testing-library/react";
import MachineDetailBox from"../MachineDetailBox";

afterEach(() => {
    cleanup();
})

test("render Mold Details Box and check all Labels", async () => {
    render(<MachineDetailBox />);
    const DataBoxElement = screen.getByTestId('MachineDetailBox1');
    expect(DataBoxElement).toHaveTextContent("Nozzle Temperature:");
    expect(DataBoxElement).toHaveTextContent("Ejector Position:");
    expect(DataBoxElement).toHaveTextContent("Cycle Time:");
    expect(DataBoxElement).toHaveTextContent("Cooling Time:");
    expect(DataBoxElement).toHaveTextContent("Injection Piston");
    expect(DataBoxElement).toHaveTextContent("Actual Position:");
    expect(DataBoxElement).toHaveTextContent("Actual Pressure:");
    expect(DataBoxElement).toHaveTextContent("Actual Rot. Speed:");
});

test("render Mold Details Box table", () => {
    render(<MachineDetailBox />);
    const DataBoxElement1 = screen.getByTestId('MachineDetailBox1');
    expect(DataBoxElement1).toContainHTML('<tbody>');
    expect(DataBoxElement1).toContainHTML('<td>');
});