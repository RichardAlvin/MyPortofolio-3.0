"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Card, {DataCard} from '../../../components/Card';
import DetailPage, {DataDetailPageProps} from '../../../components/DetailPage';

const Page = () => {
  const { slug } = useParams();
  const [detailArticle, setDetailArticle] = useState<DataDetailPageProps | null>(null);
  const [loadingDetailArticle, setLoadingDetailArticle] = useState(true);

  const [highlightArticles, setHighlightArticles] = useState<DataCard[] | null>([]);
  const [loadingHighlight, setLoadingHighlight] = useState(true);

  const router = useRouter();

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
          router.push("/error/404");
        } finally {
          setLoadingDetailArticle(false);
        }
      }
  
      fetchDetailArticle();
  }, [slug]);

  useEffect(() => {
    async function fetchHighlightArticles() {
        const res = await fetch('/api/articles?IsHighlight=true')
        const data = await res.json()

        setHighlightArticles(data.data)
        setLoadingHighlight(false)
    }
    fetchHighlightArticles()
  }, [])

  return (
    <>
        {loadingDetailArticle ? (
          <section className="detail-container">
            <p>Loading...</p>
          </section>
        ) : detailArticle ? (
            <DetailPage detailPage={detailArticle}/>
        ) : (
            <p>Detail Articles Not Found</p>
        )}
        <section className="related-articles">
          <div className="circle-3"></div>
          <div className="circle-4"></div>
          <h2>Related Articles</h2>
          <div className="card-container">
            {loadingHighlight ? (
                <div className="loading">Loading...</div>
            ) : highlightArticles && highlightArticles.length > 0 ? (
              highlightArticles.map((highlightArticle) => <Card key={highlightArticle.id} data={highlightArticle} basePath='articles'/>)
            ) : (
                <p>No articles found.</p>
            )}
          </div>
        </section>
    </>
  )
}

export default Page