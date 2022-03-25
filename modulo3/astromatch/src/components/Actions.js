import React from "react";

import Like from './actions/Like'
import Dislike from './actions/Dislike'

const Actions = ({user, modifyChoice}) => {
    <div id="actions">

        <Like 
            userID={user.id}
            modifyChoice={modifyChoice}
        
        />
        <Dislike 
            userID={user.id}
            modifyChoice={modifyChoice}
        
        />

    </div>

}

export default Actions