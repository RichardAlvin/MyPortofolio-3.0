import React from 'react'
import './DetailPage.css'
import { formatDate } from "@/app/utils/dateFormatter";

export type DataDetailPageProps = {
  id: string;
  title: string;
  slug: string;
  description: string;
  createdAt: string;
  createdBy: string;
}

interface DetailPageProps {
  detailPage: DataDetailPageProps;
  basePath: string;
}

const DetailPage: React.FC<DetailPageProps> = ({ detailPage, basePath }) => {
  return (
    <section className="detail-page">
        <div className="detail-page-header">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="detail-page-header-left">
              <img src="/assets/detail-img.png" />
            </div>
            <div className="detail-page-header-right">
              <h2>{detailPage.title}</h2>
              <p>{formatDate(detailPage.createdAt)} by {detailPage.createdBy}</p>
            </div>
        </div>
        <div className="detail-page-body">
          {detailPage.description}
        </div>
    </section>
  )
}

export default DetailPage