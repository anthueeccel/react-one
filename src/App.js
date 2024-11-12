import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';
import './App.css';

function App() {

  const products = [
    {
      imageSrc: "images/phone16pro_x.png",
      title: "Phone 16 Pro X",
      specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
      price: 999,
    },
    {
      imageSrc: "images/smartwatch_x.png",
      title: "Smartwath 16 X",
      specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
      price: 349,
    },
    {
      imageSrc: "images/podspro_x.png",
      title: "Pods Pro X",
      specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
      price: 249,
    }
  ];

  function handlePurchase(product) {
    alert(`You clicked on ${product.title} which cost $${product.price}`)
  }

  return (
    <div className="App">
      <ProductList>
        <ProductCard width="128px" height="128px" background="darkolivegreen" product={products[0]} onPurchase={handlePurchase} />
        <ProductCard width="96px" height="96px" product={products[1]} onPurchase={handlePurchase} />
        <ProductCard width="64px" height="64px" background="peru" product={products[2]} onPurchase={handlePurchase} />
      </ProductList>
    </div>
  );
}

export default App;
