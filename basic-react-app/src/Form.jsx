function handleFormSubmit(event){
    event.preventDefault();
    console.log("form submitted");
};

export default function Form(){
    return (
        <form>
            <input placeholder="write"></input>
            <br></br>
            <br></br>
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    );
}