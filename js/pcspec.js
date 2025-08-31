const pcProducts = [
  {
    name: "Graphic Card",
    description: "RTX 4060, 8GB,",
    price: "₹ 92,000",
    img: "spec/rtx 4060.png"
  },
  {
    name: "Processor",
    description: "Ryzen 7, 5700X Desktop Processor,cores 16 Threads 36 MB Cache 3.4 GHz Upto 4.6 GHz",
    price: "₹ 38,000",
    img: "spec/5700x.png"
  },
  {
    name: "Mother Board",
    description: "GIGABYTE Micro ATX B550M K DDR4",
    price: "₹ 19,999",
    img: "spec/b550m.png"
  },
  {
    name: "Power Supply(SMPS)",
    description: "Deepcool PK650D 650 Watts Computer PSU with 2 SATA Cables",
    price: "₹ 7,999",
    img: "spec/pk650d.png"
  },
    {
    name: "Corsair Vengeance 32GB RAM",
    description: "Deepcool LE520 240mm ARGB AIO / CPU Liquid Liquid Cooling Cabinet Cooler",
    price: "₹ 8,599",
    img: "spec/le520.png"
  },
];

const pcspecList = document.getElementById("pcspecList");

pcProducts.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("pcspec-card");

  card.innerHTML = `
    <div class="pcspec-img">
      <img src="${product.img}" alt="${product.name}">
    </div>
    <div class="pcspec-info">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
    </div>
    <div class="pcspec-price">${product.price}</div>
  `;

  pcspecList.appendChild(card);
});

