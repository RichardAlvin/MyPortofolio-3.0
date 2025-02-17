"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Card from '../../../components/Card';
import DetailPage, {DataDetailPageProps} from '../../../components/DetailPage';

const page = () => {
  const { slug } = useParams();
  const [detailArticle, setDetailArticle] = useState<DataDetailPageProps | null>(null);
  const [loadingDetailArticle, setLoadingDetailArticle] = useState(true);

  useEffect(() => {
      async function fetchDetailArticle() {
        if (!slug) return;
  
        try {
          const res = await fetch(`/api/articles/${slug}`);
          if (!res.ok) throw new Error("Failed to fetch");
          const data = await res.json();
          
          setDetailArticle(data.article);
        } catch (error) {
          console.error("Error fetching article:", error);
        } finally {
          setLoadingDetailArticle(false);
        }
      }
  
      fetchDetailArticle();
  }, [slug]);

  return (
    <>
        {loadingDetailArticle ? (
            <p>Loading...</p>
        ) : detailArticle ? (
            <DetailPage detailPage={detailArticle} basePath="articles"/>
        ) : (
            <p>Detail Articles Not Found</p>
        )}
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