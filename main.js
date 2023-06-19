const TYPE = {
    BINARY: 'BINARY',
    DECIMAL: 'DECIMAL'
}

function BaseNumberInput({ onChangeBase, placeholder, value, handleFocus }) {
    const handleChange = e => {
      placeholder === TYPE.BINARY ? onChangeBase( e.target.value, 10 ) : onChangeBase( e.target.value, 2 )
    }
  
    const handleChangeFocus = e => {
      handleFocus(placeholder)
    }
    
    return (
      <input type="text" onFocus={handleChangeFocus} placeholder={placeholder} onChange={handleChange} value={value}/>
    )
}


function App() {
    
    const [binaryNumber, setBinaryNumber] = React.useState('')
    const [decimalNumber, setDecimalNumber] = React.useState('')
    const [focus, setFocus] = React.useState(TYPE.DECIMAL)
  
    const handleFocus = (value) => {
      setFocus(value)
    }
  
    const handleChange = (number, base) => {
      base === 2 ? setBinaryNumber(_.toNumber( number ).toString(2)) : setDecimalNumber(parseInt(_.toNumber( number ), 2))
    }
  
    return (
      <div className="wrapper">
        {focus === TYPE.BINARY &&
          <React.Fragment>
            <BaseNumberInput handleFocus={handleFocus} onChangeBase={handleChange} placeholder={TYPE.DECIMAL} value={decimalNumber} />
            <BaseNumberInput handleFocus={handleFocus} onChangeBase={handleChange} placeholder={TYPE.BINARY} />
          </React.Fragment>
        }
        {focus === TYPE.DECIMAL &&
          <React.Fragment>
            <BaseNumberInput handleFocus={handleFocus} onChangeBase={handleChange} placeholder={TYPE.DECIMAL} />
            <BaseNumberInput handleFocus={handleFocus} onChangeBase={handleChange} placeholder={TYPE.BINARY} value={binaryNumber} />
          </React.Fragment>
        }      
      </div>
    )
  }


ReactDOM.render(<App />, document.querySelector('#app'));