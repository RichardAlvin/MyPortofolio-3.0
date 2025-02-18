"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Card, {DataCard} from '../../../components/Card';
import DetailPage, {DataDetailPageProps} from '../../../components/DetailPage';

const Page = () => {
    const { slug } = useParams();
    const [detailWork, setDetailWork] = useState<DataDetailPageProps | null>(null);
    const [loadingDetailWork, setLoadingDetailWork] = useState(true);

    const [highlightWorks, setHighlightWorks] = useState<DataCard[] | null>([]);
    const [loadingHighlight, setLoadingHighlight] = useState(true);

    useEffect(() => {
        async function fetchDetailWork() {
          if (!slug) return;
    
          try {
            const res = await fetch(`/api/works/${slug}`);
            if (!res.ok) throw new Error("Failed to fetch");
            const data = await res.json();
            
            setDetailWork(data.work);
          } catch (error) {
            console.error("Error fetching work:", error);
          } finally {
            setLoadingDetailWork(false);
          }
        }
    
        fetchDetailWork();
    }, [slug]);

    useEffect(() => {
        async function fetchHighlightWorks() {
            const res = await fetch('/api/works?IsHighlight=true')
            const data = await res.json()

            setHighlightWorks(data.data)
            setLoadingHighlight(false)
        }
        fetchHighlightWorks()
    }, [])

    return (
        <>
            {loadingDetailWork ? (
                <p>Loading...</p>
            ) : detailWork ? (
                <DetailPage detailPage={detailWork} basePath="works"/>
            ) : (
                <p>Detail Works Not Found</p>
            )}
            <section className="related-articles">
                <div className="circle-3"></div>
                <div className="circle-4"></div>
                <h2>Related Works</h2>
                <div className="card-container">
                    {loadingHighlight ? (
                        <div className="loading">Loading...</div>
                    ) : highlightWorks && highlightWorks.length > 0 ? (
                        highlightWorks.map((highlightWork) => <Card key={highlightWork.id} data={highlightWork} basePath='works'/>)
                    ) : (
                        <p>No works found.</p>
                    )}
                </div>
            </section>
        </>
    )
}

export default Page