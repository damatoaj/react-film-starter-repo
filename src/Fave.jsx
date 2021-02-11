import React from 'react';

const Fave = (props) => {
    // const [isFave, setIsFave] = useState(false)

    // const handleClick = (e) => {
    //     setIsFave({
    //         isFave: !isFave
    //     })
    // }
    const handleClick = (e) => {
        e.stopPropagation()
        console.log('Handling Fave Click!')
        props.onFaveToggle()
    }

    return(
        <div onClick={handleClick} className={`film-row-fave ${props.isFave ? 'add_to_queue' : 'remove_from_queue'} `}>
            <p className="material-icons">add_to_queue</p>
        </div>
    )
}
export default Fave;