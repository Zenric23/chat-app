import React from 'react'
import Users from './Users'
import Contacts from './Contacts'

const Sidebar = ({socket}) => {
  return (
    <>
        {/* <Contacts /> */}
        <Users socket={socket} />
    </>
  )
}

export default Sidebar