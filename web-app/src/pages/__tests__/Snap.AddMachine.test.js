import { render, cleanup } from "@testing-library/react";
import AddMachine from "../AddMachine";

afterEach(() => { cleanup(); })

test("render and take snapshot of add machine page", async () => {
    const { asFragment } = render(<AddMachine />);

    expect(asFragment()).toMatchSnapshot();
})
