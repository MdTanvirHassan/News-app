import React, { Component } from 'react'
import loading from '../../image/snipper.gif'

export default class Snipper extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="Loading" width='35%' />
      </div>
    )
  }
}
