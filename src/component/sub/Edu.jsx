import React from 'react'

function Edu(props) {
    return(
        <div>
            <h3>Edu</h3>
            <h4> type = {props.fType}</h4>
           <h4> title = {props.fTitle}</h4>
           <h4> year = {props.fYear}</h4>
        </div>
    )
}
export default Edu