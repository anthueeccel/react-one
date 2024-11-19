import './ProductList.css';

export function ProductList(props) {
    return(
    <div>
        <h2>Produtcs</h2>
        <div className='List'>{props.children}</div>
    </div>
    );
}