"use client";

import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  Heart,
  Languages,
  Leaf,
  MapPin,
  Navigation,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
} from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";

import { alexSpaBusiness, alexSpaServiceCatalog } from "./alex-spa-data";
import {
  alexSpaLanguages,
  alexSpaTranslations,
  getAlexSpaDirection,
  type AlexSpaLanguageCode,
} from "./alex-spa-i18n";
import {
  createAlexSpaPreviewPlaceSummary,
  fetchAlexSpaPlaceSummary,
  type AlexSpaPlaceSummary,
} from "./alex-spa-reviews";
import styles from "./alex-spa.module.css";

const mapsEmbedUrl =
  "https://www.google.com/maps?q=Alex%20Spa%20Massage%20Basilica%20Gardens%20Paphos&output=embed";

function getBrowserLanguage(): AlexSpaLanguageCode {
  if (typeof navigator === "undefined") {
    return "fr";
  }

  const browserLanguage = navigator.language.slice(0, 2).toLowerCase();

  if (
    browserLanguage === "en" ||
    browserLanguage === "el" ||
    browserLanguage === "he"
  ) {
    return browserLanguage;
  }

  return "fr";
}

export function AlexSpaClient() {
  const [language, setLanguage] = useState<AlexSpaLanguageCode>("fr");
  const [reviews, setReviews] = useState<AlexSpaPlaceSummary>(() =>
    createAlexSpaPreviewPlaceSummary()
  );
  const [activeReview, setActiveReview] = useState(0);
  const direction = getAlexSpaDirection(language);
  const copy = alexSpaTranslations[language];
  const currentReview = reviews.reviews[activeReview] ?? {
    id: "preview-fallback",
    authorName: "Google reviewer",
    rating: 5,
    text: "Professional, calm and attentive care.",
    relativeTime: "Google preview",
  };
  const reviewStatus =
    reviews.source === "google"
      ? copy.reviews.liveLabel
      : copy.reviews.previewLabel;
  const valueIcons = useMemo(
    () => [
      <Leaf key="leaf" />,
      <ShieldCheck key="shield" />,
      <Sparkles key="sparkles" />,
    ],
    []
  );
  const ratingDisplay = formatRating(reviews.rating, language);
  const reviewCountDisplay = `${reviews.reviewCount} ${copy.reviews.countLabel}`;

  useEffect(() => {
    setLanguage(getBrowserLanguage());
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.title =
      language === "en"
        ? "Alex Spa Massage | Massage in Paphos, Cyprus"
        : language === "el"
          ? "Alex Spa Massage | Μασάζ στην Πάφο"
          : language === "he"
            ? "Alex Spa Massage | עיסוי בפאפוס"
            : "Alex Spa Massage | Massage a Paphos, Chypre";
  }, [direction, language]);

  useEffect(() => {
    let isMounted = true;

    fetchAlexSpaPlaceSummary()
      .then((summary) => {
        if (isMounted) {
          setReviews(
            summary.reviews.length > 0
              ? summary
              : createAlexSpaPreviewPlaceSummary()
          );
          setActiveReview(0);
        }
      })
      .catch(() => {
        if (isMounted) {
          setReviews(createAlexSpaPreviewPlaceSummary());
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  function nextReview() {
    setActiveReview((index) => (index + 1) % reviews.reviews.length);
  }

  function previousReview() {
    setActiveReview(
      (index) => (index - 1 + reviews.reviews.length) % reviews.reviews.length
    );
  }

  return (
    <div className={styles["shell"]} dir={direction}>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Alex Spa Massage home">
          <span className="brand-mark">
            <LotusMark />
          </span>
          <span>
            Alex Spa
            <small>Massage</small>
          </span>
        </a>

        <nav className="desktop-nav">
          <a href="#experience">{copy.nav.experience}</a>
          <a href="#services">{copy.nav.services}</a>
          <a href="#reviews">{copy.nav.reviews}</a>
          <a href="#location">{copy.nav.location}</a>
        </nav>

        <div className="header-actions">
          <label className="language-switcher">
            <Languages size={17} aria-hidden="true" />
            <span className="sr-only">Language</span>
            <select
              value={language}
              onChange={(event) =>
                setLanguage(event.target.value as AlexSpaLanguageCode)
              }
            >
              {alexSpaLanguages.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.shortLabel}
                </option>
              ))}
            </select>
          </label>
          <a
            className="button button-outline header-call"
            href={`tel:${alexSpaBusiness.phoneHref}`}
          >
            <Phone size={18} aria-hidden="true" />
            {copy.location.callCta}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/alex-spa-massage/google-studio.jpg"
            alt=""
            className="hero-image"
          />
          <div className="hero-vignette" />
          <div className="hero-content">
            <h1 id="hero-title">{copy.hero.title}</h1>
            <p>{copy.hero.subtitle}</p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={`tel:${alexSpaBusiness.phoneHref}`}
              >
                <Phone size={20} aria-hidden="true" />
                {copy.hero.primaryCta}
              </a>
              <a
                className="button button-ghost"
                href={alexSpaBusiness.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={20} aria-hidden="true" />
                {copy.hero.secondaryCta}
              </a>
            </div>
            <div
              className="rating-row"
              aria-label={`${ratingDisplay}, ${reviewCountDisplay}`}
            >
              <span className="stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={22} fill="currentColor" />
                ))}
              </span>
              <span>{ratingDisplay}</span>
              <span>{reviewCountDisplay}</span>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Business highlights">
          <ProofItem icon={<MapPin />} text={copy.proof.location} />
          <ProofItem icon={<Heart />} text={copy.proof.inclusive} />
          <ProofItem icon={<UserRound />} text={copy.proof.womanLed} />
          <ProofItem icon={<Clock />} text={copy.proof.hours} />
        </section>

        <section
          className="experience-section section-grid"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-copy rhythm-copy">
            <div className="vertical-rule" aria-hidden="true" />
            <h2 id="experience-title">{copy.experience.title}</h2>
            <p>{copy.experience.body}</p>
            <div className="values-list">
              {copy.experience.rows.map(([title, body], index) => (
                <div className="value-row" key={title}>
                  <span className="value-icon" aria-hidden="true">
                    {valueIcons[index]}
                  </span>
                  <span>
                    <strong>{title}</strong>
                    {body}
                  </span>
                </div>
              ))}
            </div>
            <p className="side-note">{copy.experience.sideNote}</p>
          </div>
          <div className="image-stack">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/alex-spa-massage/google-services-board.jpg"
              alt="Alex Spa Massage services board from the Google profile"
            />
          </div>
        </section>

        <section
          className="services-section"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="section-heading wide-heading">
            <h2 id="services-title">{copy.services.title}</h2>
            <p>{copy.services.intro}</p>
          </div>
          <div className="price-list-layout">
            <figure className="price-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/alex-spa-massage/google-price-list.jpg"
                alt="Alex Spa Massage price list from the Google profile"
              />
              <figcaption>{copy.services.photoSource}</figcaption>
            </figure>
            <div className="service-menu">
              {alexSpaServiceCatalog.map((service, index) => (
                <article className="service-row" key={service.id}>
                  <span className="service-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{service.name}</h3>
                    <p>
                      {service.durationMinutes} {copy.services.duration}
                    </p>
                  </div>
                  <span className="reservation-note">
                    <CalendarDays size={19} aria-hidden="true" />€
                    {service.priceEuro}
                  </span>
                </article>
              ))}
            </div>
          </div>
          <div className="services-foot">
            <p>{copy.services.priceNote}</p>
            <a
              className="button button-primary"
              href={`tel:${alexSpaBusiness.phoneHref}`}
            >
              <Phone size={19} aria-hidden="true" />
              {copy.services.cta}
            </a>
          </div>
        </section>

        <section
          className="reviews-section"
          id="reviews"
          aria-labelledby="reviews-title"
        >
          <div className="reviews-figure" aria-hidden="true">
            <span>{ratingDisplay}</span>
            <div className="stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={26} fill="currentColor" />
              ))}
            </div>
            <small>
              {ratingDisplay} · {reviewCountDisplay}
            </small>
          </div>
          <div className="reviews-content">
            <p className="data-status">{reviewStatus}</p>
            <h2 id="reviews-title">{copy.reviews.title}</h2>
            <p>{copy.reviews.text}</p>
            <article className="review-slide">
              <Quote size={32} aria-hidden="true" />
              <p>{currentReview.text}</p>
              <footer>
                <strong>{currentReview.authorName}</strong>
                <span>
                  {currentReview.relativeTime ?? copy.reviews.source} ·{" "}
                  {currentReview.rating}/5
                </span>
              </footer>
            </article>
            <div className="carousel-controls">
              <button
                type="button"
                onClick={previousReview}
                aria-label={copy.reviews.previous}
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <span>
                {activeReview + 1}/{reviews.reviews.length}
              </span>
              <button
                type="button"
                onClick={nextReview}
                aria-label={copy.reviews.next}
              >
                <ChevronRight size={22} aria-hidden="true" />
              </button>
            </div>
            <div className="review-actions">
              <a
                className="button button-primary"
                href={reviews.reviewUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Star size={18} aria-hidden="true" />
                {copy.reviews.leaveReview}
              </a>
              <a
                className="text-link"
                href={reviews.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                {copy.reviews.readAll}
              </a>
            </div>
          </div>
        </section>

        <section
          className="location-section"
          id="location"
          aria-labelledby="location-title"
        >
          <div className="map-panel">
            <iframe
              title="Alex Spa Massage on Google Maps"
              src={mapsEmbedUrl}
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="harbour-route" aria-hidden="true">
              <span>{copy.location.harbour}</span>
              <i />
              <strong>Alex Spa Massage</strong>
            </div>
          </div>
          <div className="location-copy">
            <p className="section-number">Paphos / Basilica Gardens</p>
            <h2 id="location-title">{copy.location.title}</h2>
            <p>{copy.location.text}</p>
            <dl className="address-list">
              <div>
                <dt>{copy.location.addressTitle}</dt>
                <dd>
                  {alexSpaBusiness.addressLine}
                  <br />
                  {alexSpaBusiness.cityLine}
                </dd>
              </div>
              <div>
                <dt>{copy.location.studio}</dt>
                <dd>{alexSpaBusiness.studioLine}</dd>
              </div>
              <div>
                <dt>{copy.location.hoursTitle}</dt>
                <dd>{copy.proof.hours}</dd>
              </div>
              <div>
                <dt>{copy.nav.contact}</dt>
                <dd>{alexSpaBusiness.phoneDisplay}</dd>
              </div>
            </dl>
            <div className="location-actions">
              <a
                className="button button-primary"
                href={alexSpaBusiness.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Navigation size={19} aria-hidden="true" />
                {copy.location.mapsCta}
              </a>
              <a
                className="button button-outline"
                href={`tel:${alexSpaBusiness.phoneHref}`}
              >
                <Phone size={19} aria-hidden="true" />
                {copy.location.callCta}
              </a>
            </div>
          </div>
        </section>

        <section
          className="closing-section"
          id="contact"
          aria-labelledby="closing-title"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/alex-spa-massage/closing-towel.png"
            alt=""
            className="closing-image"
          />
          <div className="closing-shade" />
          <div className="closing-content">
            <h2 id="closing-title">{copy.cta.title}</h2>
            <p>{copy.cta.body}</p>
            <div className="hero-actions">
              <a
                className="button button-gold"
                href={`tel:${alexSpaBusiness.phoneHref}`}
              >
                <Phone size={20} aria-hidden="true" />
                {copy.hero.primaryCta}
              </a>
              <a
                className="button button-ghost"
                href={alexSpaBusiness.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={20} aria-hidden="true" />
                {copy.cta.route}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">
            <LotusMark />
          </span>
          <span>
            Alex Spa
            <small>Massage</small>
          </span>
        </a>
        <p>
          {alexSpaBusiness.addressLine}, {alexSpaBusiness.cityLine}
          <br />
          {alexSpaBusiness.studioLine}
        </p>
        <p>
          {copy.footer.inclusive} · {copy.footer.managedByWoman}
          <br />
          {copy.footer.details}
        </p>
        <a href={`tel:${alexSpaBusiness.phoneHref}`}>
          {alexSpaBusiness.phoneDisplay}
        </a>
      </footer>

      <div className="mobile-action-bar" aria-label="Quick actions">
        <a href={`tel:${alexSpaBusiness.phoneHref}`}>
          <Phone size={18} aria-hidden="true" />
          {copy.location.callCta}
        </a>
        <a
          href={alexSpaBusiness.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          <MapPin size={18} aria-hidden="true" />
          {copy.cta.route}
        </a>
      </div>
    </div>
  );
}

function ProofItem({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="proof-item">
      <span aria-hidden="true">{icon}</span>
      <strong>{text}</strong>
    </div>
  );
}

function LotusMark() {
  return (
    <svg viewBox="0 0 64 44" role="img" aria-label="Lotus">
      <path d="M32 39c-8-5-12-12-12-21 7 3 11 8 12 16 1-8 5-13 12-16 0 9-4 16-12 21Z" />
      <path d="M31 39C18 37 9 29 7 17c10 1 18 8 24 22Z" />
      <path d="M33 39c13-2 22-10 24-22-10 1-18 8-24 22Z" />
      <path d="M32 37C25 27 25 15 32 5c7 10 7 22 0 32Z" />
    </svg>
  );
}

function formatRating(rating: number, language: AlexSpaLanguageCode): string {
  return new Intl.NumberFormat(
    language === "fr" || language === "el" ? "fr-FR" : "en-US",
    {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }
  ).format(rating);
}
