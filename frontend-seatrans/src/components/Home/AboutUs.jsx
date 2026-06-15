"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AboutUs.module.css";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "150+", label: "Global Corridors" },
  { value: "10M+", label: "Tons Cargo Handled" },
  { value: "99.9%", label: "On-Time Delivery" }
];

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.cardIcon}>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M3.6 9h16.8M3.6 15h16.8" />
      </svg>
    ),
    title: "Global Shipping Network",
    description: "Direct partnerships with international ocean liners and cargo flight networks, ensuring seamless corridors to over 150 countries."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.cardIcon}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Customs & Compliance",
    description: "Certified customs brokers handling intricate import/export regulations, paperwork, and terminal clearance with high precision."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.cardIcon}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "24/7 Priority Support",
    description: "Real-time dispatch visibility, active container tracking notifications, and a dedicated team resolving transit questions around the clock."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.cardIcon}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Specialized Cargo Care",
    description: "Pioneering logistics operators for castor oil transport, bulk agricultural shipments, and heavy machinery project cargo."
  }
];

export default function AboutUs() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className={`${styles.section} ${inView ? styles.animateIn : ""}`}
    >
      {/* Background patterns */}
      <div className={styles.bgBlob} />

      <div className={styles.container}>
        {/* Intro Layout Grid */}
        <div className={styles.introGrid}>
          <div className={styles.leftCol}>
            <span className={styles.subtitle}>ABOUT SEATRANS</span>
            <h2 className={styles.title}>
              Decades of Unmatched <br />
              <span className={styles.accentText}>Logistics Excellence</span>
            </h2>
            <div className={styles.divider} />
          </div>
          <div className={styles.rightCol}>
            <p className={styles.leadText}>
              For more than two decades, Seatrans has served as a trusted global logistics custodian. We build resilient supply chains through reliable cargo tracking, specialized commodity handling, and streamlined customs brokerage, connecting local industries to international trade hubs.
            </p>
          </div>
        </div>

        {/* Stats Banner (Adaptation of premium statsBar styles) */}
        <div className={styles.statsBar}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statBox}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* 2x2 Values/Highlights Grid */}
        <div className={styles.valuesGrid}>
          {values.map((item, idx) => (
            <div key={idx} className={styles.valueCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{item.icon}</div>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
