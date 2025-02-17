'use client'
import React, { useState, useEffect } from 'react'
import Card, {DataCard} from '../../components/Card';

const Page = () => {
    const [highlightWorks, setHighlightWorks] = useState<DataCard[] | null>([]);
    const [loadingHighlight, setLoadingHighlight] = useState(true);

    const [works, setWorks] = useState<DataCard[] | null>([]);
    const [loadingWorks, setLoadingWork] = useState(true);

    useEffect(() => {
        async function fetchHighlightWorks() {
            const res = await fetch('/api/works?IsHighlight=true')
            const data = await res.json()

            setHighlightWorks(data.data)
            setLoadingHighlight(false)
        }

        async function fetchWorks() {
            const res = await fetch('/api/works')
            const data = await res.json()

            setWorks(data.data)
            setLoadingWork(false)
        }
        fetchHighlightWorks()
        fetchWorks()
    }, [])

  return (
    <>
        <section className="hero">
            <div className="hero-content-left">
                <h1>Works</h1>
            </div>
            <div className="hero-content-right">
                <p>
                    Here is the source of knowledge. Writing based on mood, not my routine
                </p>
            </div>
        </section>

        <section className="work-highlight">
            <h2>Highlight</h2>
            <div className="card-container">
                {loadingHighlight ? (
                    <p>Loading...</p>
                ) : highlightWorks && highlightWorks.length > 0 ? (
                    highlightWorks.map((highlightWork) => <Card key={highlightWork.id} data={highlightWork} basePath='works'/>)
                ) : (
                    <p>No works found.</p>
                )}
            </div>
        </section>

        <section className="article-list">
            <div className="list-header">
                <div className="list-search">
                    <span className="list-search-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </span>
                    <input type="text" className="list-search-input" placeholder="Search..."></input>
                </div>
                <div className="list-filter">
                    <button className="button active">Non tech</button>
                    <button className="button">Research</button>
                    <button className="button">Development</button>
                </div>
            </div>
            <div className="card-container">
                {loadingWorks ? (
                    <p>Loading...</p>
                ) : works && works.length > 0 ? (
                    works.map((work) => <Card key={work.id} data={work} basePath='works'/>)
                ) : (
                    <p>No works found.</p>
                )}
            </div>
        </section>
    </>
  )
}

export default Page