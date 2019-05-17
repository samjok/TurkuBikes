import React from 'react'

const Racks= ({ value }) => {
  return (
    <div>
      <h3>{value.name}</h3>
      <div>
        Pyöriä: {value.avl_bikes} / {value.total_slots}<br/>
      </div>
    </div>
  )
}

export default Racks