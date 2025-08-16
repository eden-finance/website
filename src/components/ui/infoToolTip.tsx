import React, { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Side = "top" | "bottom" | "left" | "right";

type InfoTooltipProps = {
  message: React.ReactNode;
  side?: Side;         // preference
  className?: string;
  gap?: number;        // px gap between trigger and bubble
};

export const InfoTooltip: React.FC<InfoTooltipProps> = ({
  message,
  side = "top",
  className = "",
  gap = 8,
}) => {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number; side: Side }>({ top: 0, left: 0, side });
  const id = useId();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const bubbleRef = useRef<HTMLDivElement | null>(null);

  // Compute and clamp position when opened or when window changes
  const positionBubble = () => {
    const trigger = btnRef.current;
    const bubble = bubbleRef.current;
    if (!trigger || !bubble) return;

    const tr = trigger.getBoundingClientRect();
    const br = bubble.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const trySide = (s: Side) => {
      let top = 0, left = 0;
      if (s === "top") {
        top = tr.top - br.height - gap;
        left = tr.left + tr.width / 2 - br.width / 2;
      } else if (s === "bottom") {
        top = tr.bottom + gap;
        left = tr.left + tr.width / 2 - br.width / 2;
      } else if (s === "left") {
        top = tr.top + tr.height / 2 - br.height / 2;
        left = tr.left - br.width - gap;
      } else { // right
        top = tr.top + tr.height / 2 - br.height / 2;
        left = tr.right + gap;
      }

      // clamp to viewport with small padding
      const pad = 8;
      top = Math.max(pad, Math.min(top, vh - br.height - pad));
      left = Math.max(pad, Math.min(left, vw - br.width - pad));

      // check if basic fit (before clamp) was outside in major way; if so, suggest flip
      const outTop = tr.top - br.height - gap < 0;
      const outBottom = tr.bottom + br.height + gap > vh;
      const outLeft = tr.left - br.width - gap < 0;
      const outRight = tr.right + br.width + gap > vw;

      return { top, left, fits: !(s === "top" && outTop) && !(s === "bottom" && outBottom) && !(s === "left" && outLeft) && !(s === "right" && outRight) };
    };

    // try preferred side, then smart fallback order
    const order: Side[] =
      side === "top" ? ["top", "bottom", "right", "left"] :
        side === "bottom" ? ["bottom", "top", "right", "left"] :
          side === "left" ? ["left", "right", "top", "bottom"] :
            ["right", "left", "top", "bottom"];

    for (const s of order) {
      const res = trySide(s)!;
      if (res.fits) {
        setCoords({ top: res.top, left: res.left, side: s });
        return;
      }
    }
    // if none "fit", use last calculated (clamped)
    const fallback = trySide(side)!;
    setCoords({ top: fallback.top, left: fallback.left, side });
  };

  useLayoutEffect(() => {
    if (open) {
      positionBubble();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, message]);

  useEffect(() => {
    if (!open) return;
    const onScroll = () => positionBubble();
    const onResize = () => positionBubble();
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <span
      className={`relative inline-flex items-center ${className}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        ref={btnRef}
        type="button"
        aria-label="More info"
        aria-describedby={open ? id : undefined}
        onClick={() => setOpen(v => !v)} // touch toggle
        onBlur={() => setOpen(false)}
        className="group inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5
                    border-foreground/30 text-foreground/70
                   hover:text-foreground hover:border-foreground/50
                   focus:outline-none focus:ring-2"
      >
        <img src={"./info.svg"} />
      </button>

      {open &&
        createPortal(
          <div
            id={id}
            role="tooltip"
            ref={bubbleRef}
            // fixed positioning relative to viewport, clamped by JS
            style={{ position: "fixed", top: coords.top, left: coords.left }}
            className={`
    z-[9999]
    w-[86vw] sm:w-[320px] md:w-[360px] lg:w-[420px]  /* fixed width, responsive */
    max-w-[92vw]                                    /* safety clamp for tiny screens */
    rounded-md px-3 py-2
    text-xs sm:text-sm leading-tight
    shadow-lg border
    bg-white text-[#222122] border-black/10
    dark:bg-[#030303] dark:text-white dark:border-white/10
    whitespace-normal break-words                   /* allow multiple lines */
  `}
          >
            {message}
            {/* Arrow */}
            <span
              className={`
      absolute w-2 h-2 rotate-45 border
      bg-white border-black/10
      dark:bg-[#030303] dark:border-white/10
      ${coords.side === "top" ? "top-full left-1/2 -translate-x-1/2" : ""}
      ${coords.side === "bottom" ? "bottom-full left-1/2 -translate-x-1/2" : ""}
      ${coords.side === "left" ? "left-full top-1/2 -translate-y-1/2" : ""}
      ${coords.side === "right" ? "right-full top-1/2 -translate-y-1/2" : ""}
    `}
              aria-hidden="true"
            />
          </div>,
          document.body
        )}
    </span>
  );
};