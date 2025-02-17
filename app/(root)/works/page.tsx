'use client'
import React, { useState, useEffect } from 'react'
import Card, {DataCard} from '../../components/Card';

const Page = () => {
    const [highlightWorks, setHighlightWorks] = useState<DataCard[] | null>([]);
    const [loadingHighlight, setLoadingHighlight] = useState(true);

    const [works, setWorks] = useState<DataCard[] | null>([]);
    const [loadingWorks, setLoadingWork] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    async function fetchWorks() {
        setLoadingWork(true);
        try {
            const queryParams = new URLSearchParams();
            if (searchQuery) queryParams.append("search", searchQuery);
            if (selectedCategory) queryParams.append("category", selectedCategory);
    
            const res = await fetch(`/api/works?${queryParams.toString()}`);
            const data = await res.json();
    
            setWorks(data.data);
        } catch (error) {
            console.error("Error fetching works:", error);
        } finally {
            setTimeout(() => {
                setLoadingWork(false);
            }, 800);
        }
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };
    
    const handleCategoryChange = (category: string | null) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        async function fetchHighlightWorks() {
            const res = await fetch('/api/works?IsHighlight=true')
            const data = await res.json()

            setHighlightWorks(data.data)
            setLoadingHighlight(false)
        }
        fetchHighlightWorks()
    }, [])

    useEffect(() => {
        fetchWorks();
    }, [searchQuery, selectedCategory]);

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
                    <input
                        type="text"
                        className="list-search-input"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="list-filter">
                    <button className={`button ${selectedCategory === null ? "active" : ""}`} onClick={() => handleCategoryChange(null)}>All</button>
                    <button className={`button ${selectedCategory === "Non tech" ? "active" : ""}`} onClick={() => handleCategoryChange("Non tech")}>Non tech</button>
                    <button className={`button ${selectedCategory === "Research" ? "active" : ""}`} onClick={() => handleCategoryChange("Research")}>Research</button>
                    <button className={`button ${selectedCategory === "Development" ? "active" : ""}`} onClick={() => handleCategoryChange("Development")}>Development</button>
                </div>
            </div>
            <div className="card-container">
                {loadingWorks ? (
                    <div className="loading">Loading...</div>
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