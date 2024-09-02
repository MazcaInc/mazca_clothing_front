import { render, screen } from "@testing-library/react";
import ProductContent from "@components/ProductContent";

describe("ProductContent", () => {
    it("should render correctly", () => {
        render(<ProductContent />);
        expect(screen.getByText("Example"));
    });
});
