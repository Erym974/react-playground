


const Card = ({user}) => {
    return(
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.company.name}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </div>
    )
}

const Users = () => {

    const [users, setUsers] = React.useState([]) 
    const [user, setUser] = React.useState(null)

    React.useEffect(() => {

        (async () => {
            const usersData = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await usersData.json()
            setUsers(users)
            console.log(users)
        })()
        
    }, [])

    const showCard = (id) => { 
        const user = users.find(user => user.id === id)
        setUser(user)
    }

    return(
        <div>
            <h1>Liste des utilistaurs : </h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <span>{user.name}</span>
                        <button onClick={() => {showCard(user.id)}}>Voir la fiche</button>
                    </li>
                ))}
            </ul>
            {user && <Card user={user} />}
        </div>
    )

}

const App = () => {
    return(
        <Users />
    )
}

ReactDOM.render(<App />, document.querySelector('#app'))