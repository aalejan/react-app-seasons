import React from 'react'

const spinner = props => (

  <div className="ui active dimmer">
    <div className="ui text loader">{props.message}</div>
  </div>

)

spinner.defaultProps = {
  message: 'Loading...',

}

export default spinner
