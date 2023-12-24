import Product from "./Product"

function Producttab(){
    // let options = [<li>"hi-tech"</li>,<li>"durable"</li>,<li>"fast"</li>]
    let styles  ={
        display: "flex",
        flexWrap: "wrap",
    };
    return(
        <div style={styles}>
        <Product title="Logitech MX Master" idx={0}></Product>
        <Product title="Apple Pencil(2nd Gen)" idx={1}></Product>
        <Product title="Zebronics Zeb-transfer" idx={2}></Product>
        <Product title="Petronics Toad 23" idx={3}></Product>
        </div>
    )
};

export default Producttab;