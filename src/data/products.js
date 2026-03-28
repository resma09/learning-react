export const products = [
  {
    id: 1,
    name: "Luxury Spa Experience",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "A full-body relaxation massage, aromatherapy, and a detoxifying body wrap.",
    detailedDescription:
      "Indulge in our signature spa journey that begins with a warm foot soak, followed by a full-body Swedish massage using essential oils. Next, enjoy a detoxifying body wrap made from organic seaweed and clay, leaving your skin silky smooth. The experience concludes with a calming aromatherapy session and herbal tea. This 90‑minute package is designed to melt away stress and restore balance.",
  },
  {
    id: 2,
    name: "Deep Tissue Massage",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Targets deep muscle layers to relieve chronic tension.",
    detailedDescription:
      "Our deep tissue massage focuses on realigning deeper layers of muscles and connective tissue. Using slow, firm strokes and targeted pressure, we release chronic knots, reduce inflammation, and improve range of motion. Perfect for athletes, desk workers, or anyone with persistent muscle pain. The session includes a consultation to pinpoint problem areas and ends with gentle stretching.",
  },
  {
    id: 3,
    name: "Hydrating Facial",
    price: 2800,
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "A deep-cleansing facial that hydrates and nourishes your skin.",
    detailedDescription:
      "Revitalize your skin with our 60‑minute hydrating facial. We begin with a double cleanse, gentle exfoliation, and steam to open pores. A custom mask infused with hyaluronic acid and vitamin C is applied to boost moisture and radiance. The treatment finishes with a soothing facial massage, serum, and SPF moisturizer. Suitable for all skin types, especially dehydrated or dull skin.",
  },
  {
    id: 4,
    name: "Hot Stone Massage",
    price: 4000,
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Smooth, heated stones are placed on key points to melt away tension.",
    detailedDescription:
      "Experience ultimate relaxation with our hot stone massage. Smooth, basalt stones are heated to the perfect temperature and placed along the spine, palms, and feet to release deep muscle tension. The warmth enhances circulation and allows the therapist to work deeply without excessive pressure. This 75‑minute therapy is especially effective for stress, insomnia, and chronic muscle tightness.",
  },
  {
    id: 5,
    name: "Manicure & Pedicure",
    price: 2200,
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Pamper your hands and feet with our signature nail care.",
    detailedDescription:
      "Our deluxe manicure and pedicure package includes a soothing soak, cuticle grooming, nail shaping, and exfoliating scrub. Choose from a wide range of polish colors (or a clear strengthening coat). A brief hand and foot massage with nourishing lotion completes the treatment. Enjoy refreshments in our relaxing nail lounge. Lasts approximately 75 minutes.",
  },
  {
    id: 6,
    name: "Aromatherapy Session",
    price: 3000,
    image:
      "https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Custom-blended essential oils to balance your mood and enhance well-being.",
    detailedDescription:
      "Choose from our curated selection of essential oils – lavender for relaxation, peppermint for energy, eucalyptus for clarity, or a personalized blend. The 60‑minute session combines gentle massage with aromatherapy diffusion. You'll also receive a small bottle of your chosen blend to take home. Ideal for mental relaxation, emotional balance, or simply as a sensory treat.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
