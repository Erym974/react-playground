const LastName = ({ children, classList }) => {
    return (
        <span className={classList}>{ children }</span>
    )
}

const FirstName = ({ children }) => {
    return (
        <span>{ children }</span>
    )
}

const HelloWorld = ({ firstName, lastName }) => {
    const formatFirstName = (value) => value[0].toUpperCase() + value.slice(1)
    const formatLastName = (value) => value.toUpperCase()

    return (
        <h1>
            Hello <FirstName>{formatFirstName(firstName)}</FirstName> <LastName classList='red-text'>{formatLastName(lastName)}</LastName>
            
        </h1>
    )
}

const App = () => {
    return (
        <React.Fragment>  
            <HelloWorld firstName='jean' lastName='dujardin' />
        </React.Fragment>
    )
}

ReactDOM.render(<App />, document.querySelector('#app'))