const SplitImageRight = ({ imageUrl, imageAlt, title, text }) => {
    return (
        <section>
            <div className="split-image-right">
                <h3>{ title }</h3>
                <p>{ text }</p>
                <img src={ imageUrl } alt={ imageAlt } />
            </div>
        </section>
    )
}

export default SplitImageRight;