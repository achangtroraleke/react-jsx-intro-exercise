const App = ()=>{
    return(
        <div>
            <PersonComponent name="James" age={28} hobbies={['games', 'eating', 'building']}/>
            <PersonComponent name="Katherine" age={27} hobbies={['helping','shopping','eating']}/>
            <PersonComponent name="Kona" age={1} hobbies={['being a dog', 'running', 'eating']}/>

        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))