let DisplayNames=(ps)=>{

    return(<div>
        <h3>Names Are :</h3>
        <ul>
            {
                ps.names.map(v => {return <li key={v}>{v}</li>})
            }
        </ul>
    </div>)
}

DisplayNames.defaultProps={names :['Vikram','Shivam','Atul','Bhaskar']}

export default DisplayNames;