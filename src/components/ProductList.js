const styles = {
    List: { 
        display: "flex", 
        gap: "16px",
        marginBotton: "36px",
     }
};

export function ProductList(props) {
    return(
    <div>
        <h2>Produtcs</h2>
        <div style={styles.List}>{props.children}</div>
    </div>
    );
}