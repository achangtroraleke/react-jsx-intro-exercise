const PersonComponent = (props) =>{
    const {name, age, hobbies } = props;
    let msg;
    let formattedName;
    const personsHobbies = hobbies.map(hobby => <li>{hobby}</li>)
    if(age >= 18){
        msg = "Please go vote!"
    }else{
        msg = "You must be 18."
    }
    if(name.length > 8){
        formattedName = name.substring(0, 6)
    }
    else{
        formattedName=name
    }
    return(
        <div>
            <p>Learn some information about {formattedName}.</p>
            <h3>{msg}</h3>
            <p>Hobbies:</p>
            <ul>{personsHobbies}</ul>
        </div>
    )
}