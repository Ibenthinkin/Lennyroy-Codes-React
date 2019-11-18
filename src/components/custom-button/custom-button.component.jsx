import React from 'react'
import './custom-button.styles.scss'
import '../../assets/var.scss'
import '../../assets/global.scss'

const CustomButton = ({text}) => (
    <button className='custom-button'>{text}</button>
)

export default CustomButton