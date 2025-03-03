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
}

const DetailPage: React.FC<DetailPageProps> = ({ detailPage }) => {
  return (
    <section className="detail-page">
        <div className="detail-page-header">
            {/* <div className="circle-1"></div>
            <div className="circle-2"></div> */}
            <h1>{detailPage.title}</h1>
            <div className="detail-page-header-info">
              <span className="author-name">{detailPage.createdBy}</span>
              <span className="article-meta">{formatDate(detailPage.createdAt)}</span>
            </div>
        </div>
        <div className="detail-page-body" dangerouslySetInnerHTML={{ __html: detailPage.description }} />
    </section>
  )
}

export default DetailPage