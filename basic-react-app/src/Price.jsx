export default function Price({oldPrice, newPrice}){
    let oldStyles = {
        textDecorationLine: "line-through",
    };

    let styles = {
        backgroundColor: "#e0c367",
        heigth: "20px",
        borderTop: "solid",
        borderBottomLeftRadius: "1rem",
        borderBottomRightRadius: "1rem",
        padding: "0",
    }
    return (
        <div style={styles}>
        <p><span style={oldStyles}>{oldPrice}</span> <b>{newPrice}</b></p>
        </div>
    )
};