const SplitImageLeft = ({ imageUrl, imageAlt, title, text }) => {
    return (
        <section>
            <div className="split-image-left">
                <img src={ imageUrl } alt={ imageAlt } />
                <h3>{ title }</h3>
                <p>{ text }</p>
            </div>
        </section>
    )
}

export default SplitImageLeft;