function handleClick(event){
    console.log("Click");
    console.log(event);
};

function handleMouseOver(){
    console.log("mouse over");
};


export default function Button(){
    return (<>
    <button onClick={handleClick}>Click Me!</button>
    <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem nam voluptates,
     dolores iure totam commodi eum eligendi nemo alias quia dicta debitis vel repellat 
     fugit mollitia excepturi quae! Tempore, sapiente?</p>
    </>
    )
}