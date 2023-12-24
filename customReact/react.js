const customRender = (reactElement, container)=> //function to render the element
    {
        // let domElement = document.createElement(reactElement.type); NOT A GOOD PRACTICE!!!
        // domElement.innerHTML = reactElement.children;

        // domElement.setAttribute('href', reactElement.props.href);
        // domElement.setAttribute('target', reactElement.props.target);

        // container.append(domElement);

        let domElement = document.createElement(reactElement.type);
        domElement.innerHTML  = reactElement.children;

        for (const prop in reactElement.props) {
            if(prop === 'children') continue; //React used to have this
            domElement.setAttribute(prop, reactElement.props[prop]);
        }
        
        container.append(domElement);
    }


const reactElement = { //craeting an element with properties
    type: 'a',
    props: {
        href: "https:/google.com",
        target: "_blank",
    },
    children: "Click here to visit GOOGLE!!",
}

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer);
