
const Success = ({name}) =>{

    if(name != ''){
        return(
            <div>
                <h1 className='successMessage'>Added {name}</h1>
            </div>
        )
    }
    
    return(
        <>
        </>
    )
}


export default Success