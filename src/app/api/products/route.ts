export async function GET(request) {
  const products = [
    {
      id: 1,
      name: "Двойная шаверма",
      description: "Состав: Курица , свежий огурец, помидоры, морковь по-корейски, капуста салатная или капуста квашеная, красный лук, наш фирменный соус. 440гр.",
      price: 360,
      image: "/images/shawarma.jpg",
      category: "shawerma",
      inStock: true,
      createdAt: "2024-12-01T10:00:00Z",
    },
    {
      id: 2,
      name: "Двойная шаверма",
      description: "Состав: Курица , свежий огурец, помидоры, морковь по-корейски, капуста салатная или капуста квашеная, красный лук, наш фирменный соус. 440гр.",
      price: 360,
      image: "/images/shawarma.jpg",
      category: "shawerma",
      inStock: true,
      createdAt: "2024-12-01T10:00:00Z",
    },
    {
      id: 3,
      name: "Двойная шаверма",
      description: "Состав: Курица , свежий огурец, помидоры, морковь по-корейски, капуста салатная или капуста квашеная, красный лук, наш фирменный соус. 440гр.",
      price: 360,
      image: "/images/shawarma.jpg",
      category: "shawerma",
      inStock: true,
      createdAt: "2024-12-01T10:00:00Z",
    },
    {
      id: 4,
      name: "Итальянская шаверма",
      description: "Состав: Курица , свежий огурец, помидоры, морковь по-корейски, капуста салатная или капуста квашеная, красный лук, наш фирменный соус. 440гр.",
      price: 360,
      image: "/images/shawarma.jpg",
      category: "new-items",
      inStock: true,
      createdAt: "2024-12-01T10:00:00Z",
    },
    {
      id: 5,
      name: "Греческая шаверма",
      description: "Состав: Курица , свежий огурец, помидоры, морковь по-корейски, капуста салатная или капуста квашеная, красный лук, наш фирменный соус. 440гр.",
      price: 360,
      image: "/images/shawarma.jpg",
      category: "new-items",
      inStock: true,
      createdAt: "2024-12-01T10:00:00Z",
    },
  ];

  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}