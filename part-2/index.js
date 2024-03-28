const App = ()=>{
    return(
        <div>
            <TweetComponent username="jc" msg="first tweet" date="2/23/24"/>
            <TweetComponent username="kc" msg="second tweet" date="2/24/24"/>
            <TweetComponent username="jess" msg="new tweet" date="12/21/24"/>

        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))