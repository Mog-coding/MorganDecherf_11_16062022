
function DropdownComponent({ heading, content }) {

    return (
        <section>
            <div className="dropdownHeading">
                <h2>{heading}</h2>
            </div>
            <div className="dropdownContent">
                {
                    Array.isArray(content) ?
                        <ul>
                            {
                                content.map((elLi, index) => {
                                    return (<li key={`${elLi}-${index}`}>
                                        {elLi}
                                    </li>)
                                })
                            }
                        </ul>
                        :
                        <p>{content}</p>
                }
            </div>
        </section>
    )
}

export default DropdownComponent