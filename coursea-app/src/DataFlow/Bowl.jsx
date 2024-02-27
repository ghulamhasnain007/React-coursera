import React from 'react'

function Bowl(props) {
  return (
    <div>
        <span>
            {props.bowlShape}-shaped bowl, and it's currently {props.bowlStatus}
        </span>
    </div>
  )
}

export default Bowl