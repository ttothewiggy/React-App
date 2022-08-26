function SCP(props)
{
    const file = props.file;
    const scp = props.scp;
    const description = props.description;

    
    return(
        <div className="bg-dark p-3 mb-3 rounded">
            <h1 className="Display-2 text-white">File: {file}</h1>
            <h2 className="Display-3 text-white">SCP: {scp}</h2>
            <h2 className="Display-3 text-white">Description: {description}</h2>
        </div>
    )
}

export default SCP;