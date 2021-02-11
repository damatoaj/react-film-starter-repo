import React from 'react';
import { useState } from 'react';

const Fave = (props) => {
    // constructor(props){
    //     super(props);
    //     this.state= {
    //         isFave: false,
    //     }
    // }

    // handleClick = (e) => {
    //     e.stopPropagation()
    //     this.setState({
    //         isFave: !this.state.isFave
    //     })
    //     console.log("Handling Fave click!")
    // }

//     render() {
//         return(
            // <div onClick={this.handleClick} className={`film-row-fave ${this.state.isFave ? 'add_to_queue' : 'remove_from_queue'} `}>
            //         <p className="material-icons">add_to_queue</p>
            // </div>
//         )
//     }
// }

    const [isFave, setIsFave] = useState(false)

    const handleClick = (e) => {
        // e.stopPropogation()
        setIsFave({
            isFave: !isFave
        })
    }

    return(
        <div onClick={handleClick} className={`film-row-fave ${isFave ? 'add_to_queue' : 'remove_from_queue'} `}>
            <p className="material-icons">add_to_queue</p>
        </div>
    )
}
export default Fave;