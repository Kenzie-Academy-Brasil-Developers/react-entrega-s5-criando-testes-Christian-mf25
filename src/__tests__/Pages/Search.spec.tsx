import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Search from "../../components/Search";
import Providers from "../../providers";
describe("Search page", () => {
  it("should be able to search setCepNumber", async () => {
    render(
      <Providers>
        <Search />
      </Providers>
    );

    const searchField = screen.getByPlaceholderText("Insira o CEP");
    const buttonElement = screen.getByText("Buscar pelo CEP");

    fireEvent.change(searchField, {
      target: { value: 88134460 },
    });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(searchField).toHaveValue(88134460);
    });
  });
});
