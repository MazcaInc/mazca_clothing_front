import { render, screen } from "@testing-library/react";
import ProductContent from "../src/app/web/components/ProductContent";

describe("ProductContent", () => {
    it("should render correctly", () => {
        render(<ProductContent />);
        expect(screen.getByText("Example"));
    });
});
