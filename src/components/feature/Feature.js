import React from 'react'
import FeatureItem from '../layouts/FeatureItem'
import TittleHeading from '../layouts/TittleHeading'
import "./feature.css"

const Feature = () => {
  return (
    <section id="feature">
        <div class="container">
            <div class="header fea_head">
                <h4>Features</h4>
                <TittleHeading tittle="Design that solves problems, one product at a time"/>
            </div>

            <div class="feature_wrap">
                <FeatureItem icon="fa-solid fa-users" link="Uses Client First" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu
                            gravida mi. Pellentesque et velit aliquam sed mi."/>
                <FeatureItem icon="fa-solid fa-circle-check" link="Two Free Revision Round" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu
                            gravida mi. Pellentesque et velit aliquam sed mi."/>
                <FeatureItem icon="fa-solid fa-pen-ruler" link="Template Customization" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu
                            gravida mi. Pellentesque et velit aliquam sed mi."/>
                <FeatureItem icon="fa-solid fa-comments" link="24/7 Support" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu
                            gravida mi. Pellentesque et velit aliquam sed mi."/>
                <FeatureItem icon="fa-solid fa-stopwatch" link="Quick Delivery" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu
                            gravida mi. Pellentesque et velit aliquam sed mi."/>
                <FeatureItem icon="fa-solid fa-file-pen" link="Hands-on approach" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu
                            gravida mi. Pellentesque et velit aliquam sed mi."/>

            </div>
        </div>
    </section>
  )
}

export default Feature