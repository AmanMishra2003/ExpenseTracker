function Button({children, clickEvent, type="button"}) {
    return (
        <button className="button" onClick={clickEvent} type={type}>
            {children}
        </button>
    )
}

export default Button
