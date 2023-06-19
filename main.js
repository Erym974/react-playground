//const helloWorld = React.createElement('h1', {}, 'Hello world!');

const HelloWorld = ({ firstName, lastName }) => {
  const firstCapitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return (
    <h1>Hello <span id="firstname">{firstCapitalize(firstName)}</span> <span id="lastname">{lastName.toUpperCase()}</span>!</h1>
  )
}

ReactDOM.render(<HelloWorld firstName="jean" lastName="dujardin" />, document.querySelector('#app'))
