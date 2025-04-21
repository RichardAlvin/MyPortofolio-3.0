'use client'
import React, { useState, useEffect } from 'react'
import Card, {DataCard} from '../components/Card';
import Link from "next/link";
//import Image from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

import { formatDate } from "@/app/utils/dateFormatter";

interface CertificationCard {
  id: string;
  title: string;
  description: string;
  expiredAt: string;
  link: string;
}

export default function Page() {
  const [highlightWorks, setHighlightWorks] = useState<DataCard[] | null>([]);
  const [loadingWorksHighlight, setLoadingWorksHighlight] = useState(true);

  const [highlightCertifications, setHighlightCertifications] = useState<CertificationCard[] | null>([]);
  const [loadingCertificationsHighlight, setLoadingCertificationHighlight] = useState(true);

  const [highlightArticles, setHighlightArticles] = useState<DataCard[] | null>([]);
  const [loadingArticlesHighlight, setLoadingArticlesHighlight] = useState(true);

  useEffect(() => {
      async function fetchHighlightWorks() {
          const res = await fetch('/api/works?IsHighlight=true')
          const data = await res.json()

          setHighlightWorks(data.data)
          setLoadingWorksHighlight(false)
      }

      async function fetchHighlightCertifications() {
        const res = await fetch('/api/certifications?IsHighlight=true')
        const data = await res.json()

        setHighlightCertifications(data.data)
        setLoadingCertificationHighlight(false)
      }

      async function fetchHighlightArticles() {
          const res = await fetch('/api/articles?IsHighlight=true')
          const data = await res.json()

          setHighlightArticles(data.data)
          setLoadingArticlesHighlight(false)
      }
      fetchHighlightWorks()
      fetchHighlightCertifications()
      fetchHighlightArticles()
  }, [])

  return (
    <>
      <section className="hero">
          <div className="hero-content-left">
              <h1>Hi there!</h1>
          </div>
          <div className="hero-content-right">
              <p>
              I&apos;m <strong>Richard Alvin Pratama</strong>, a Software Engineer with a deep interest in System Development, Databases, and Cloud.
              <Link href="https://www.linkedin.com/in/richard-alvin-pratama/" className="learn-more">Learn more ↗</Link>
              </p>
          </div>
      </section>

      <section className="works">
        <h2>Recent Works</h2>
        <div className="card-container">
        {loadingWorksHighlight ? (
          <div className="loading">Loading...</div>
        ) : highlightWorks && highlightWorks.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {highlightWorks.map((highlightWork) => (
              <SwiperSlide key={highlightWork.id}>
                <Card data={highlightWork} basePath="works" />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="loading">No works found.</div>
        )}
        </div>
        <Link href="/works"><button className="works-more-btn">Show More ↗</button></Link>
      </section>

      <section className="skills-certs">
        <section className="contribution">
          <h2>Contributed Projects</h2>
          <h3>Collection of my contributed projects, both personal and team based.</h3>
          <div className="contribution-list">
              <div className="contribution-box">
                <div className="contribution-box-head">
                  <span className="contribution-box-title">Suitmedia</span>
                  <span className="contribution-box-badge light-blue">Software Engineer (.NET)</span>
                </div>
                <ul className="contribution-box-body">
                  <li>IDX Website</li>
                  <li>IDX SPOP+</li>
                  <li>IDClear KPEI</li>
                  <li>Anugerah Pharmindo Lestari</li>
                  <li>Bank Maspion</li>
                  <li>PLN Indonesia Power</li>
                  <li>.NET & Blazor Boilerplate</li>
                </ul>
              </div>
              <div className="contribution-box">
              <div className="contribution-box-head">
                  <span className="contribution-box-title">Other Teams</span>
                  <span className="contribution-box-badge light-purple">Fullstack</span>
                </div>
                <ul className="contribution-box-body">
                  <li>Visitory Indonesia</li>
                  <li>Sahabat Pensiun</li>
                  <li>Curug Sangereng</li>
                  <li>Medio Sport Agency</li>
                  <li>AI Lecture Research</li>
                </ul>
              </div>
          </div>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <h3>All Programming language just a tools,<br/>but the logic is the heart of programming</h3>
          <div className="skills-icon">
            <div>
              <img src="assets/skills/csharp-logo.webp" alt="csharp-logo" />
            </div>
            <div>
              <img src="assets/skills/netcore-logo.png" alt="netcore-logo" />
            </div>
            <div>
              <img src="assets/skills/laravel-logo.svg" alt="laravel-logo"/>
            </div>
            <div>
              <img src="assets/skills/go-logo.png" alt="go-logo" />
            </div>
            <div>
              <img src="assets/skills/sqlserver-logo.png" alt="sqlserver-logo"/>
            </div>
            <div>
              <img src="assets/skills/ssms-logo.webp" alt="ssms-logo"/>
            </div>
            <div>
              <img src="assets/skills/postgresql-logo.png" alt="postgresql-logo"/>
            </div>
            <div>
              <img src="assets/skills/blazor-logo.png" alt="blazor-logo" />
            </div>
            <div>
              <img src="assets/skills/js-ts-logo.png" alt="js-ts-logo" />
            </div>
            <div>
              <img src="assets/skills/next-logo.png" alt="next-logo" />
            </div>
            <div>
              <img src="assets/skills/gcp-logo.png" alt="gcp-logo" />
            </div>
            <div>
              <img src="assets/skills/sharepoint-logo.jpeg" alt="sharepoint-logo" />
            </div>
            <div>
              <img src="assets/skills/powerautomate-logo.jpeg" alt="powerautomate-logo" />
            </div>
          </div>
        </section>

        <section className="certs">
          <h2>Certification</h2>
          <h3>Proved by Certification Owned</h3>
          <div className="certs-list">
            {loadingCertificationsHighlight ? (
                <div className="loading">Loading...</div>
            ) : highlightCertifications && highlightCertifications.length > 0 ? (
              highlightCertifications.map((highlightCertification) => 
                <Link key={highlightCertification.id} href={highlightCertification.link}><div className="certs-div">
                  <h4>{highlightCertification.title}</h4>
                  <p>{highlightCertification.description}</p>
                  <p>Valid until: {formatDate(highlightCertification.expiredAt)}</p>
                </div></Link>
              )
            ) : (
                <div className="notfound">No certificates found.</div>
            )}
          </div>
          <Link href="https://www.linkedin.com/in/richard-alvin-pratama/details/certifications/"><button className="works-more-btn">Show More ↗</button></Link>
        </section>

      </section>

      <section className="articles">
        <h2>Recent Articles</h2>
        <h3>Research and Experiment are<br/>my middle name. Here some what I do</h3>
        <div className="card-container">
        {loadingArticlesHighlight ? (
          <div className="loading">Loading...</div>
          ) : highlightArticles && highlightArticles.length > 0 ?  (
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              effect="coverflow"
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {highlightArticles.map((highlightArticle) => (
                <SwiperSlide key={highlightArticle.id}>
                  <Card data={highlightArticle} basePath="articles" />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="loading">No Articles found.</div>
          )}
        </div>
        <Link href="/articles"><button className="works-more-btn">Show More ↗</button></Link>
      </section>
    </>
  );
}
