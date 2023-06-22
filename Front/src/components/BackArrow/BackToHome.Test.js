import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BackToHome from "./BackToHome";

describe("<BackToHome />", () => {

  test("click sur le button", async () =>{
    // initialisation d'un user avec userEvent
      const user = userEvent.setup();
      const screen = Screen

    // Génération DOM virtuel
    render(<BackToHome />);
    // Assertions
    expect(screen.queryByText("Merci d'avoir cliqué")).not.toBeInTheDocument();

    await user.click(screen.getByRole('button'));

    expect(screen.getAllByText("Merci d'avoir cliqué")).toHaveLength(1);
  })
})