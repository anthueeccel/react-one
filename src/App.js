import { useState } from "react";
import { Fragment } from "react";
import { ProductList } from "./components/ProductList";
import { ProductCard } from "./components/ProductCard";
import { ProductFilter } from "./components/ProductFilter";
import styles from "./App.css";

function App() {

  const products = [
    {
      id: "d9abf2cf-8099-4177-b399-49edfa31cb21",
      imageSrc: "images/phone16pro_x.png",
      title: "Phone 16 Pro X",
      specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
      price: 999,
      stockCount: 6
    },
    {
      id: "f058a8d1-03cc-45d4-9875-ad3660d1bc27",
      imageSrc: "images/smartwatch_x.png",
      title: "Smartwath 16 X",
      specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
      price: 349,
      stockCount: 10
    },
    {
      id: "f6e12653-89bd-448d-b452-2bef30bf864f",
      imageSrc: "images/podspro_x.png",
      title: "Pods Pro X",
      specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
      price: 249,
      stockCount: 0
    }
  ];

  const [filters, setFilters] = useState({
    price: {
      min: 0,
      max: 999,
    },
    other: "other value",
  });

  const [favorites, setFavorites] = useState([]);

  function handlePurchase(product) {
    alert(`You clicked on ${product.title} which cost $${product.price}`)
  }

  function handleFilter(key, value) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: {
        ...prevFilters.price,
        [key]: value,
      },
    }));
  }

  function handleFavorite(productId) {
    if (favorites.includes(productId)) {
      setFavorites((prevFavotites) =>
        prevFavotites.filter((id) => id !== productId)
      );
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, productId])
    }
  }

  return (
    <div className={styles.App}>
      <ProductList>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={favorites.includes(product.id)}
            onPurchase={handlePurchase}
            onFavorite={handleFavorite}
          />
        ))}
      </ProductList>

      <h2>Product filter by price</h2>
      <ProductFilter filters={filters} onFilter={handleFilter} />
      {products
        .filter(
          ({ price }) =>
            price >= filters.price.min && price <= filters.price.max
        )
        .map(({ title, price }) => (
          <Fragment key={title}>
            <hr className={styles.ListDivider} />
            <p className={styles.ListTitle}>
              {title} cost ${price}
            </p>
          </Fragment>
        ))}
    </div>
  );
}


export default App;
