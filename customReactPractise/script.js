function customRender(reactElement, container){
// const domElement = document.createElement(reactElement.type);
// domElement.innerHTML = reactElement.children
// domElement.setAttribute('href',reactElement.props.href)
// domElement.setAttribute('target', reactElement.props.target)
// container.appendChild(domElement)
// inside using loop
const domElement = document.createElement(reactElement.type);
domElement.innerHTML = reactElement.children;
for(const prop in reactElement.props){
    if(prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop])
    
}
container.appendChild(domElement)
}
// function ke ander ke JSX ko react kaise dekta h
const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
}


const root = document.getElementById('root');

// import ReactDOM from 'react-dom/client'

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <App />
// )
customRender(reactElement, root);//to add element to root




