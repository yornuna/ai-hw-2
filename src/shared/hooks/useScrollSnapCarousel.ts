"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MutableRefObject,
  type RefObject,
} from "react";

interface ScrollSnapCarousel<
  TStrip extends HTMLElement,
  TCard extends HTMLElement,
> {
  stripRef: RefObject<TStrip | null>;
  cardRefs: MutableRefObject<(TCard | null)[]>;
  dotRefs: MutableRefObject<(HTMLButtonElement | null)[]>;
  activeIndex: number;
  scrollTo: (index: number) => void;
  handleDotKeyDown: (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => void;
}

export function useScrollSnapCarousel<
  TStrip extends HTMLElement = HTMLDivElement,
  TCard extends HTMLElement = HTMLDivElement,
>(count: number): ScrollSnapCarousel<TStrip, TCard> {
  const stripRef = useRef<TStrip>(null);
  const cardRefs = useRef<(TCard | null)[]>([]);
  const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        let bestIndex = -1;
        let bestRatio = 0;
        entries.forEach((entry) => {
          if (entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            const idx = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(idx)) bestIndex = idx;
          }
        });
        if (bestRatio > 0 && bestIndex >= 0) {
          setActiveIndex((prev) => (prev === bestIndex ? prev : bestIndex));
        }
      },
      { root: strip, threshold: [0.5, 0.75] },
    );

    cardRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [count]);

  const scrollTo = useCallback((index: number) => {
    const node = cardRefs.current[index];
    if (!node) return;
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
    setActiveIndex(index);
  }, []);

  const handleDotKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
      let next: number | null = null;
      switch (event.key) {
        case "ArrowRight":
          next = (index + 1) % count;
          break;
        case "ArrowLeft":
          next = (index - 1 + count) % count;
          break;
        case "Home":
          next = 0;
          break;
        case "End":
          next = count - 1;
          break;
        default:
          return;
      }
      event.preventDefault();
      scrollTo(next);
      dotRefs.current[next]?.focus();
    },
    [count, scrollTo],
  );

  return {
    stripRef,
    cardRefs,
    dotRefs,
    activeIndex,
    scrollTo,
    handleDotKeyDown,
  };
}
