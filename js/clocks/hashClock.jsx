import React from 'react'
import DigitalClock from '../templates/digitalClock.jsx'
import _ from 'lodash'

let SHA256 = require("crypto-js/sha256")

export default class HashClock extends React.Component {
  render () {
    let normalTime = this.props.currentHour + ':' + 
      this.props.currentMinute + ':' + 
      this.props.currentSecond
    let hashTime = SHA256(normalTime).toString()
    let description = 'While today there exists only 24 hours in a single ' + 
      'day, who knows what the future holds? This clock tells the time ' + 
      'using a more robust and collission resistant scheme than a 24 hour ' + 
      'period, a SHA256 hash.'
    return (
      <div className='clock'>
        <DigitalClock time={hashTime} name={'Hash Clock'} description={description} />
      </div>
    )
  }
}
