// ============================================
// Checkout.test.jsx
// ============================================

import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import Checkout from "./Checkout";

// --- MOCKS ---
const mockUpdateQuantity = vi.fn();
const mockRemoveFromCart = vi.fn();
const mockClearCart = vi.fn();
const mockGetCartTotal = vi.fn();
const mockGetCartItemsWithProducts = vi.fn();

vi.mock("../context/CartContext", () => ({
    useCart: () => ({
        getCartItemsWithProducts: mockGetCartItemsWithProducts,
        updateQuantity: mockUpdateQuantity,
        removeFromCart: mockRemoveFromCart,
        getCartTotal: mockGetCartTotal,
        clearCart: mockClearCart,
    }),
}));

// --- FAKE DATA ---
const singleItem = [
    {
        id: 1,
        quantity: 2,
        product: {
            id: 1,
            name: "Luxury Spa Experience",
            price: 4500,
            image: "spa.jpg",
            description: "A full-body relaxation massage",
            detailedDescription: "...",
        },
    },
];

const twoItems = [
    {
        id: 1,
        quantity: 2,
        product: {
            id: 1,
            name: "Luxury Spa Experience",
            price: 4500,
            image: "spa.jpg",
            description: "A full-body relaxation massage",
            detailedDescription: "...",
        },
    },
    {
        id: 2,
        quantity: 1,
        product: {
            id: 2,
            name: "Deep Tissue Massage",
            price: 3500,
            image: "massage.jpg",
            description: "Targets deep muscle layers",
            detailedDescription: "...",
        },
    },
];

// Helper: set up mocks for a given scenario
function setupEmpty() {
    mockGetCartItemsWithProducts.mockReturnValue([]);
    mockGetCartTotal.mockReturnValue(0);
}

function setupSingleItem() {
    mockGetCartItemsWithProducts.mockReturnValue(singleItem);
    mockGetCartTotal.mockReturnValue(9000);
}

function setupTwoItems() {
    mockGetCartItemsWithProducts.mockReturnValue(twoItems);
    mockGetCartTotal.mockReturnValue(12500);
}

// Clean up EVERYTHING between tests
beforeEach(() => {
    vi.clearAllMocks();
    vi.restoreAllMocks();
});

afterEach(() => {
    cleanup();
});

// ── TESTS ──

describe("Checkout Component", () => {

    // ── EMPTY STATE ──

    it("shows empty cart message when there are no items", () => {
        setupEmpty();
        render(<Checkout />);
        expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
    });

    it("does not show product names when cart is empty", () => {
        setupEmpty();
        render(<Checkout />);
        expect(screen.queryByText("Luxury Spa Experience")).not.toBeInTheDocument();
    });

    // ── DISPLAYING CART ITEMS ──

    it("displays product name", () => {
        setupSingleItem();
        render(<Checkout />);
        expect(screen.getByText("Luxury Spa Experience")).toBeInTheDocument();
    });

    it("displays product image with correct alt text", () => {
        setupSingleItem();
        render(<Checkout />);
        const img = screen.getByAltText("Luxury Spa Experience");
        expect(img).toBeInTheDocument();
    });

    it("renders one Remove button per cart item", () => {
        setupSingleItem();
        render(<Checkout />);
        const removeButtons = screen.getAllByText("Remove");
        expect(removeButtons).toHaveLength(1);
    });

    it("displays multiple cart items", () => {
        setupTwoItems();
        render(<Checkout />);
        expect(screen.getByText("Luxury Spa Experience")).toBeInTheDocument();
        expect(screen.getByText("Deep Tissue Massage")).toBeInTheDocument();
        const removeButtons = screen.getAllByText("Remove");
        expect(removeButtons).toHaveLength(2);
    });

    // ── QUANTITY CONTROLS ──

    it("calls updateQuantity with decreased value when minus is clicked", async () => {
        setupSingleItem();
        render(<Checkout />);
        const minusButtons = screen.getAllByText("−");
        await userEvent.click(minusButtons[0]);
        expect(mockUpdateQuantity).toHaveBeenCalledWith(1, 1);
    });

    it("calls updateQuantity with increased value when plus is clicked", async () => {
        setupSingleItem();
        render(<Checkout />);
        const plusButtons = screen.getAllByText("+");
        await userEvent.click(plusButtons[0]);
        expect(mockUpdateQuantity).toHaveBeenCalledWith(1, 3);
    });

    it("handles clicking minus on second item", async () => {
        setupTwoItems();
        render(<Checkout />);
        const minusButtons = screen.getAllByText("−");
        await userEvent.click(minusButtons[1]);
        expect(mockUpdateQuantity).toHaveBeenCalledWith(2, 0);
    });

    // ── REMOVE ITEM ──

    it("calls removeFromCart when Remove is clicked", async () => {
        setupSingleItem();
        render(<Checkout />);
        const removeButtons = screen.getAllByText("Remove");
        await userEvent.click(removeButtons[0]);
        expect(mockRemoveFromCart).toHaveBeenCalledWith(1);
    });

    it("calls removeFromCart with correct id for second item", async () => {
        setupTwoItems();
        render(<Checkout />);
        const removeButtons = screen.getAllByText("Remove");
        await userEvent.click(removeButtons[1]);
        expect(mockRemoveFromCart).toHaveBeenCalledWith(2);
    });

    // ── ORDER TOTAL ──

    it("displays the order total section labels", () => {
        setupSingleItem();
        render(<Checkout />);
        expect(screen.getByText("Sub total")).toBeInTheDocument();
        expect(screen.getByText("Order total")).toBeInTheDocument();
    });

    it("displays total section even when cart is empty", () => {
        setupEmpty();
        render(<Checkout />);
        expect(screen.getByText("Sub total")).toBeInTheDocument();
        expect(screen.getByText("Order total")).toBeInTheDocument();
    });

    // ── PLACE ORDER ──

    it("calls clearCart when Place Order is clicked", async () => {
        setupSingleItem();
        vi.spyOn(window, "alert").mockImplementation(() => { });
        render(<Checkout />);
        const orderButtons = screen.getAllByRole("button", { name: /place order/i });
        await userEvent.click(orderButtons[0]);
        expect(mockClearCart).toHaveBeenCalled();
    });

    it("shows success alert when order is placed", async () => {
        setupSingleItem();
        const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => { });
        render(<Checkout />);
        const orderButtons = screen.getAllByRole("button", { name: /place order/i });
        await userEvent.click(orderButtons[0]);
        expect(alertSpy).toHaveBeenCalledWith("Successful Order!");
    });
});