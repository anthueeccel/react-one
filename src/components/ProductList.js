import styles from "./ProductList.module.css";

export function ProductList(props) {
    return(
    <div>
        <h2>Produtcs</h2>
        <div className={styles.List}>{props.children}</div>
    </div>
    );
}