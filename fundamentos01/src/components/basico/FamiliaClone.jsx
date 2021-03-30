import React, {cloneElement} from 'react';

export default props => {

    return(
        <div>
            {/*Para um unico elemento filho */}
            {/* {cloneElement(props.children, {...props})} */}

            {/*Para varios elementos filho */}
            {props.children.map((child) => {
                return cloneElement(child, {...props})
            })}
        </div>
    )
}
