function Clock(props) {
    
    const [date, setDate] = React.useState(new Date());
    const timerActive = React.useRef(true);
    const [color, setColor] = React.useState('#00000');
    
    setInterval(() => {
        if(timerActive.current === false) return
        setDate(new Date())
    }, 1000)
    
    const colories = () => setColor(`#${Math.floor(Math.random()*16777215).toString(16)}`)
    const reset = () => setColor('#000000')
    const startAndStop = () => timerActive.current = !timerActive.current

    return (
        <div>   
            <h1>Hello world</h1>
            <h2>Il est <span style={{ color: `${color}` }}>{date.toLocaleTimeString()}</span>.</h2>
            <div>
                <button onClick={colories}>Couleur aléatoire</button>
                <button onClick={reset}>Reset couleur</button>
            </div>
            <p>{timerActive.current}</p>
            <button onClick={startAndStop}>Pause/Reprendre</button>
        </div>
    );
}

ReactDOM.render(<Clock />, document.querySelector('#app'));





