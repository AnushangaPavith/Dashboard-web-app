import { render, screen, cleanup } from "@testing-library/react";
import AddMachine from "../AddMachine";

afterEach(() => { cleanup(); })

test("render Add Machine page and check all the Labels", async () => {
    render(<AddMachine />);
    const formLabel = await screen.getByTestId('add-machine');
    expect(formLabel).toHaveTextContent("Machine ID");
    expect(formLabel).toHaveTextContent("Mold ID");
    expect(formLabel).toHaveTextContent("Mold Shots");
    expect(formLabel).toHaveTextContent("Mona Number");
    expect(formLabel).toHaveTextContent("Material");
    expect(formLabel).toHaveTextContent("Mold Maker");
});

test("render and count buttons", async () => {
    render(<AddMachine />);
    const buttonList = await screen.findAllByRole('button');
    expect(buttonList).toHaveLength(1);
})
