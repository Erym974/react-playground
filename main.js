const LoginContext = React.createContext(false);
const LoginProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const [user, setUser] = React.useState(null)
    
    return (
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
            {children}
        </LoginContext.Provider>
    )
}

const UserGreeting = () => {
    const { setIsLoggedIn, user, setUser } = React.useContext(LoginContext)
    return(
        <div>
            <h1>Bienvenue {user} !</h1>
            <button onClick={() => { setIsLoggedIn(false); setUser(null) }}>Se déconnecter</button>
        </div>
    )
}
  
const GuestGreeting = () => {
    const { setIsLoggedIn, setUser } = React.useContext(LoginContext)
    return (
        <div>
            <h1>Veuillez vous inscrire.</h1>
            <input type="text" onChange={(e) => { setUser(e.target.value) }} />
            <button onClick={() => { setIsLoggedIn(true) }}>S'inscrire</button>
        </div>
    )
}

const Greeting = () => {
    const { isLoggedIn } = React.useContext(LoginContext)
    return (
        <div>
            {(isLoggedIn) ? <UserGreeting /> : <GuestGreeting />}
        </div>
    )
}

const App = () => {
    return (
        <LoginProvider>
            <Greeting />
        </ LoginProvider>
    )

}

ReactDOM.render(<App />, document.querySelector('#app'))