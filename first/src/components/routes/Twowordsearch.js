import React from 'react'
import Search from '../Searchbox'

function Twowordsearch({userData}) {
  return (
    <div><Search userData={userData} searchStringMinLength={1}/></div>
  )
}

export default Twowordsearch