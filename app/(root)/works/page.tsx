import React from 'react'
import Card from '../../components/Card';

const page = () => {
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
                <Card />
                <Card />
                <Card />
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
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    </>
  )
}

export default page