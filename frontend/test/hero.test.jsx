import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroSection from "../src/Landing_page/Home/HeroSection";

describe("Hero Component", () => {
    test("render hero image", () => {
        render(<HeroSection />);
        const heroImage = screen.getByAltText("Hero image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/homeHero.png");
    });
});


