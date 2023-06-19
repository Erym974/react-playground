const inputContext = React.createContext(false)

const InputProvider = ({ children }) => {
    const [formData, setFormData] = React.useState({ input: '', textarea: '', select: '' })

    return (
        <inputContext.Provider value={{ formData, setFormData }}>
            { children }
        </inputContext.Provider>
    )
}

const InputText = () => {
    const { formData, setFormData } = React.useContext(inputContext)

    return (
        <div>
            <input type='text' placeholder='Enter your name' value={formData.input} onChange={({ target: { value } }) => { setFormData({ ...formData, input: value}) }}  />
        </div>
    )

}

const TextArea = () => {
    const { formData, setFormData } = React.useContext(inputContext)

    return (
        <div>
            <textarea onChange={({ target: { value } }) => { setFormData({ ...formData, textarea: value}) }} defaultValue={formData.textarea} >
            </textarea>
        </div>
    )
}

const Select = () => {

    const [options, setOptions] = React.useState(['toto', 'tata', 'tonton'])
    const { formData, setFormData } = React.useContext(inputContext)

    return (
        <div>
            <select onChange={({ target: { value } }) => { setFormData({ ...formData, select: value}) }} defaultValue={formData.select} >
                <option value=''>Select an option</option>
                {options.map((option, index) => {
                    return (
                        <option key={index} value={option}>{option}</option>
                    )
                })}
            </select>
        </div>
    )
}

const Form = () => {

    const { formData } = React.useContext(inputContext)

    const handleSubmit = (evt) => {
        evt.preventDefault(); 

        alert(`Le formulaire a été soumis : \n\n  Input : ${formData.input} \n\n TextArea : ${formData.textarea} \n\n Select : ${formData.select}`)
    }

    return (
        <form action=''>
            <InputText />
            <TextArea />
            <Select />
            <button type='submit' onClick={(evt) => { handleSubmit(evt) }} >Valider le formulaire</button>
        </form>
    )
}

const App = () => {
    return(
        <InputProvider>
            <Form />
        </InputProvider>
    )
}


ReactDOM.render(<App/>, document.querySelector('#app'))
