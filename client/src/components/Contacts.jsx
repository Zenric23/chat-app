import React from 'react'
import { Row } from 'react-bootstrap'

const Contacts = () => {
  return (
    <div className="side-container px-4">
      <h5 className='mb-4'>Contacts</h5>
      <div className="d-grid gap-4">
        <div className="d-flex justify-content-between align-items-center" style={{cursor: 'pointer'}}>
          <div className="d-flex align-items-center gap-3">
            <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" className='rounded' style={{width: 40  , height: 40, objectFit: 'cover'}} alt="" />
            <p className='mb-0'>Zenric Clarete</p>
          </div>
          <div className="rounded-circle bg-success" style={{width: 12, height: 12}} />
        </div>
        <div className="d-flex justify-content-between align-items-center" style={{cursor: 'pointer'}}>
          <div className="d-flex align-items-center gap-3">
            <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" className='rounded' style={{width: 40  , height: 40, objectFit: 'cover'}} alt="" />
            <p className='mb-0'>Zenric Clarete</p>
          </div>
          <div className="rounded-circle bg-success" style={{width: 12, height: 12}} />
        </div>
      </div>
    </div>
  )
}

export default Contacts