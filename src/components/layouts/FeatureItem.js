import React from 'react'
import ParaText from './ParaText'

const FeatureItem = ({icon,link,para}) => {
  return (
    <div class="feature_item">
        <div class="fea_icon">
            <i class={icon}></i>
        </div>
        <div class="fea_text">
            <a href="#">{link}</a>
            <ParaText text={para}/>
        </div>
    </div>
  )
}

export default FeatureItem