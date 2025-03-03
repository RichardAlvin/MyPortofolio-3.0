'use client'
import React, { useState, useEffect } from 'react'
import Card, {DataCard} from '../../components/Card';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

const Page = () => {
    const [highlightWorks, setHighlightWorks] = useState<DataCard[] | null>([]);
    const [loadingHighlight, setLoadingHighlight] = useState(true);

    const [works, setWorks] = useState<DataCard[] | null>([]);
    const [loadingWorks, setLoadingWork] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const [visibleItems, setVisibleItems] = useState(6);

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

    const loadMore = () => {
        setVisibleItems((prev) => prev + 6);
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
                    Here is my work experience and projects that I have worked on.
                </p>
            </div>
        </section>

        <section className="work-highlight">
            <h2>Highlight</h2>
            <div className="card-container">
            <Swiper 
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay:2000, disableOnInteraction: false}}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                breakpoints={{
                    640: { slidesPerView: 2},
                    1024: { slidesPerView: 3 }
                }}
            >
                {loadingHighlight ? (
                    <SwiperSlide><p>Loading...</p></SwiperSlide>
                ) : highlightWorks && highlightWorks.length > 0 ? (
                    highlightWorks.map((highlightWork) => (
                        <SwiperSlide key={highlightWork.id}>
                            <Card data={highlightWork} basePath='works'/>
                        </SwiperSlide>
                    ))
                ) : (
                    <SwiperSlide><p>No works found.</p></SwiperSlide>
                )}
            </Swiper>
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
                    <button className={`button ${selectedCategory === "Development" ? "active" : ""}`} onClick={() => handleCategoryChange("Development")}>Dev</button>
                    <button className={`button ${selectedCategory === "Cloud" ? "active" : ""}`} onClick={() => handleCategoryChange("Cloud")}>Cloud</button>
                    <button className={`button ${selectedCategory === "AI" ? "active" : ""}`} onClick={() => handleCategoryChange("AI")}>AI</button>
                    <button className={`button ${selectedCategory === "Other" ? "active" : ""}`} onClick={() => handleCategoryChange("Other")}>Etc</button>
                </div>
            </div>
            <div className="card-container">
                {loadingWorks ? (
                    <div className="loading">Loading...</div>
                ) : works && works.length > 0 ? (
                    works.slice(0, visibleItems).map((work) => <Card key={work.id} data={work} basePath='works'/>)
                ) : (
                    <div className="notfound">No works found.</div>
                )}
            </div>
            {works && visibleItems < works.length && (
                <div className="load-more-container">
                    <button className="load-more-button" onClick={loadMore}>
                        Load More
                    </button>
                </div>
            )}
        </section>
    </>
  )
}

export default Page