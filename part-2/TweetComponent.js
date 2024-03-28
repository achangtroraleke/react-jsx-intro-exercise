const TweetComponent = (props) =>{
    const {msg, username, date} = props
    return(
        <div id="tweet-style" class='flex-column'>
            <h2 class="no-margin">{msg}</h2>
            <h3 class="no-margin">@{username}</h3>
            <h5 class="no-margin">posted on: {date}</h5>
        </div>
    )
}

ReactDOM.render(<TweetComponent/>, document.getElementById("root"))