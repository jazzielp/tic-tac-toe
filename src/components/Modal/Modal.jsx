import React from 'react'
import '../Modal/Modal.css'

export function Modal ({ children }) {
  return (
    <article className='Modal'>
      <div className='Modal__Content'>
        {children}
      </div>
    </article>
  )
}
