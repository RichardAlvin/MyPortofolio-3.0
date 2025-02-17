import React from 'react'
import Card from '../../../components/Card';
import DetailPage from '../../../components/DetailPage';

const page = () => {
  return (
    <>
        <DetailPage />
        <section className="related-articles">
          <div className="circle-3"></div>
          <div className="circle-4"></div>
          <h2>Related Articles</h2>
          <div className="card-container">
            {/* <Card />
            <Card />
            <Card /> */}
          </div>
        </section>
    </>
  )
}

export default page