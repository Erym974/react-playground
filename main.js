function FirstName(props) {
    const formatFirstName = (firstName) => {
        return firstName[0].toUpperCase() + firstName.substr(1)
    }

    return <span>{formatFirstName(props.text)}</span>
}

function LastName(props) {

    const formatLastName = (lastName) => {
        return lastName.toUpperCase()
    }

    return <span className="red-text">{formatLastName(props.text)}</span>
}

const HelloWorld = ({ firstname, lastname }) => {
    return (
        <h1>Hello <FirstName text={firstname}/> <LastName text={lastname}/></h1>
    )
}

// const Clock = () => {
//     const [date, setDate] = React.useState(new Date().toLocaleTimeString())

//     setTimeout(() => {
//         const time = new Date();
//         setDate(time.toLocaleTimeString())
//     }, 1000)

//     return (
//         <span>Il est actuellement : <strong>{date}</strong></span>
//     )
// }

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        const time = new Date();
        this.setState({
            date: time.toLocaleTimeString()
        })
    }

    render() {
        return (
            <span>Il est actuellement : <strong>{this.state.date}</strong></span>
        )
    }
}

const App = () => {
    return (
        <React.Fragment>
            <HelloWorld firstname="jean" lastname="dujardin" />
            <Clock />
        </React.Fragment>
    )
}

ReactDOM.render(<App />, document.querySelector('#app'))
