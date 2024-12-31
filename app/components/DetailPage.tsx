import React from 'react'
import './DetailPage.css'

const DetailPage = () => {
  return (
    <section className="detail-page">
        <div className="detail-page-header">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="detail-page-header-left">
              <img src="/assets/detail-img.png" />
            </div>
            <div className="detail-page-header-right">
              <h2>Will AI completely replacing programmer?</h2>
              <p>18 December 2024 by Richard Alvin Pratama</p>
            </div>
        </div>
        <div className="detail-page-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cum doloremque ratione atque repudiandae eveniet, eos minus. Perferendis dolor aut corporis corrupti nesciunt quod maxime fugit quasi, amet, odit veritatis?<br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vero quasi debitis nostrum consectetur amet fugiat deserunt distinctio excepturi, laboriosam impedit enim at obcaecati saepe error corporis expedita. Dolorem, atque?<br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempore quaerat esse incidunt animi quia necessitatibus ut quae, est et, vero pariatur iure beatae ea soluta nesciunt vitae sit repellat.<br/>
        </div>
    </section>
  )
}

export default DetailPage