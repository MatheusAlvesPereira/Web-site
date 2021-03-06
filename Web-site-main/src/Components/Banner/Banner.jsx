import React from "react"
import "./banner.css"

export default function Banner(){
    return<>
        <section className="banner">
            <div className="banner__img"></div>
            <div className="banner__wrapper">
                <label className="banner__title">Tecnology in your Buiness</label>
                <p className="banner__text">Employers designer<br/>
                    buiness analysys 
                    back end support.
                </p>
            </div>

            <svg className="banner__arrow" width="95" height="101" viewBox="0 0 95 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M57.3535 81.5261L50.4925 88.8205V0H44.5077V88.8205L37.6465 81.5261L33.4147 86.025L47.5001 101L61.5853 86.025L57.3535 81.5261Z" fill="black"/>
            </svg>
        </section>
    </>
}