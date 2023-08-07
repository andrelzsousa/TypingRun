function Button({handler, children}) {
    return (
        <button className='btn' onClick={handler}>{children}</button>
    )
}

export default Button
