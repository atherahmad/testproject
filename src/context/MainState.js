import React, { useState } from 'react'
import MainContext from './MainContext'

export default function MainState(props) {

    const [showLoginModal, setShowLoginModal] = useState(false)

  return (
    <MainContext.Provider value= {{showLoginModal, setShowLoginModal}}>
        {props.children}
    </MainContext.Provider>
  )
}
