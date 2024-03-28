const NamedComponent = (props) =>{
    return(
        <p>{props.name}</p>
    )
}

ReactDOM.render(<NamedComponent/>, document.getElementById("root"))