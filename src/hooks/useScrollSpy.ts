import { useEffect, useState, useRef } from "react";

export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
): [React.RefObject<HTMLElement | null>, boolean] => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [elementRef, isIntersecting];
};

export const useScrollSpy = (
  sectionIds: string[],
  options?: IntersectionObserverInit
) => {
  const [activeSection, setActiveSection] = useState<string>(
    sectionIds[0] || ""
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.5,
      ...options,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setActiveSection(entry.target.id);
        }
      });
    };

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(callback, defaultOptions);
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds, options]);

  return activeSection;
};
