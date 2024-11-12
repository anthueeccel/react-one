export function ProductCard({
    product,
    background = "slategray",
    onPurchase,
    ...restProps
}) {

    function getProductPrice(price) {
        return price;
    }

    return (
        <article style={{
            background,
            width: "100%",
            border: '1px solid white',
            borderRadius: "8px",
            padding: "16px",
            textAlign: "center"
        }}>

            <h2>{product.title}</h2>
            <img
                src={product.imageSrc}
                alt={product.title}
                {...restProps}
            />
            <p>Specification:</p>
            <ul style={{ listStyle: 'none', padding: 'none' }}>
                <li>{product.specification[0]}</li>
                <li>{product.specification[1]}</li>
                <li>{product.specification[2]}</li>
            </ul>
            <button onClick={() => onPurchase(product)}>
                Buy (From ${getProductPrice(product.price)})
            </button>
        </article>
    );
}