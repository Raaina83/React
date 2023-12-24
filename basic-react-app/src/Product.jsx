import "./Product.css";
import Price from "./Price";

function Product({title,idx}){
    // const list = features.map((feature) => <li>{feature}</li>)
    // let isDiscount = price > 30000;
    // let styles = {backgroundColor :  isDiscount? "pink":"" };
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let options = [[<li>"8000 DPI"</li>,<li> "5 programmable buttons"</li>]
    , [<li>"intutive surface"</li>, <li>"designed for iPad Pro"</li>],
     [<li>"designed for iPad Pro"</li>, <li>"intutive surface"</li>],
      [<li>"wireless"</li>, <li>"8000 DPI"</li>]];
    return (
        <div className="Product">
        <h3>{title}</h3>
        <p>{options[idx]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}></Price>
        {/* <p>{features.map((feature) => <li>{feature}</li>)}</p> */}
        {/* {isDiscount ? <p>Discount of 5%</p>: null}  */}
        </div>
    )
};

export default Product;