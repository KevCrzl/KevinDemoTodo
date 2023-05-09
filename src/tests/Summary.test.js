import { render, fireEvent, screen } from "@testing-library/react";
import Summary from "../components/Summary/Summary";

test("totalIncrement", () => {
render(<Summary />);

const total = screen.getByTestId("Total");
const incrementTotalBtn = screen.getByTestId("add task");

//emulate click
fireEvent.click(handleSubmit);

expect(counter).toHaveTextContent("1");
});