function Sales(props) {
    // Ecriture 1
    /*
    if (props.specialOffer) {
        return (
            <div className={"lmj-sales"}>
                soldes
            </div>
        )
    }
    */

    // Ecriture 2
    return (
        props.specialOffer && <div className={"lmj-sales"}>soldes</div>
    )
}

export default Sales
