import React from 'react'

const App = () => (
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err),
  )
)

export default App
