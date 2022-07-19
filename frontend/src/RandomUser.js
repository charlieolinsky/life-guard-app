import React, { useState } from 'react';


const RandomUser = () => {
    const [info, setInfo] = useState(); 
    return(
        <div>
            <p>User Info: {info} </p>
        </div>
    )
}
export default RandomUser; 