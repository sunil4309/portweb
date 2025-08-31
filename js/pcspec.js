const pcProducts = [
  {
    name: "Graphic Card",
    description: "RTX 4060 | 8GB,",
    price: "₹ 92,000",
    img: "spec/rtx 4060.png"
  },
  {
    name: "Processor",
    description: "Ryzen 7 | 5700X Desktop Processor | cores 16 Threads 36 MB Cache 3.4 GHz Upto 4.6 GHz",
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
    name: "Liquid cooler",
    description: "Deepcool LE520 240mm ARGB AIO / CPU Liquid Liquid Cooling Cabinet Cooler",
    price: "₹ 8,599",
    img: "spec/le520.png"
  },
                                                            // add live tech keyboard mouse
    {
    name: "Monitor (1)",
    description: "Acer EK240Y E 23.8 Inch IPS Full HD | 1 MS VRB, 100Hz Refresh | 250 Nits | AMD Free Sync",
    price: "₹ 9,499",
    img: "spec/EK241.png"
  },
     {
    name: "Monitor (2)",
    description: "Samsung B2230 21.5 inch LCD Monitor | Response Time 5 ms | 60 Hz Refresh Rate",
    price: "₹ 4,999",
    img: "spec/B2230.png"
  },
    {
    name: "Keyboard",
    description: "60% Wired RGB Gaming Keyboard | Mechanical Keyboard with Linear Red Switch | Pro Driver Support",
    price: "₹ 8,599",
    img: "spec/K630i.png"
  },
    {
    name: "Mouse",
    description: "Ultra Value 8 Button Programmable | Gaming Grade DPI 200 to 12800 | Ultra-Responsive 7000fps ",
    price: "₹ 1,299",
    img: "spec/Blaze.png"
  },
    {
    name: "Headphone",
    description: "Wired Stereo Gaming | Detachable Noise Canceling Mic",
    price: "₹ 3,990",
    img: "spec/Eksa.png"
  },
     {
    name: "Controller",
    description: "1000Hz Polling Rate | Hallsense™ Magnetic Hall 3D Joysticks & Triggers | EZ Click Macros | Dual Vibration",
    price: "₹ 2,499",
    img: "spec/Elitex2.png"
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

