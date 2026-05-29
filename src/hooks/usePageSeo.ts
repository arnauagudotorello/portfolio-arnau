import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type SeoConfig = {
  title: string;
  description: string;
};

function setMetaByAttribute(
  attribute: 'name' | 'property',
  key: string,
  content: string
) {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
}

function setCanonical(url: string) {
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }

  canonical.setAttribute('href', url);
}

export function usePageSeo({ title, description }: SeoConfig) {
  const location = useLocation();

  useEffect(() => {
    const pageUrl = `${window.location.origin}${location.pathname}`;

    document.title = title;
    setCanonical(pageUrl);

    setMetaByAttribute('name', 'description', description);
    setMetaByAttribute('name', 'robots', 'index,follow');
    setMetaByAttribute('property', 'og:title', title);
    setMetaByAttribute('property', 'og:description', description);
    setMetaByAttribute('property', 'og:url', pageUrl);
    setMetaByAttribute('name', 'twitter:title', title);
    setMetaByAttribute('name', 'twitter:description', description);
  }, [title, description, location.pathname]);
}
