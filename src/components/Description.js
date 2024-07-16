function Description() {
    const text = "Ici achetez toutes les plantes dont vous avez toujours rêvées";
    const emojis = "🤑🤑🤑";

    return (<p>{ text.slice(0, 12) + emojis }</p>);
}

export default Description;
