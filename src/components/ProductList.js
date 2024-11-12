export function ProductList(props) {
    return(
    <div>
        <h2>Produtcs</h2>
        <div style={{ display: "flex", gap: "16px" }}>{props.children}</div>
    </div>
    );
}