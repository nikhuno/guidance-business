"use client";

import { CSSProperties } from "react";

const TC_MODAL_OPTS = JSON.stringify({
  style_modal_width: "40",
  style_content_border_radius: "0.5",
  attr_modal_background: "on",
  style_modal_background_color: "#000000",
  style_modal_background_opacity: "40",
  attr_modal_blur: "off",
  attr_content_shadow: "off",
});

interface Props {
  children: React.ReactNode;
  style?: CSSProperties;
  className?: string;
}

export default function ThriveCartButton({ children, style, className }: Props) {
  return (
    <div
      className={`tc-v2-embeddable-trigger ${className ?? ""}`}
      data-widget-layout="embeddable_button"
      data-thrivecart-account="nikhuno"
      data-thrivecart-tpl="v2"
      data-thrivecart-product="1"
      data-thrivecart-modal="on"
      data-thrivecart-modal-opts={TC_MODAL_OPTS}
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      <button
        className="tc-v2-embeddable-trigger-el"
        style={{
          border: "none",
          cursor: "pointer",
          ...style,
        }}
      >
        {children}
      </button>
    </div>
  );
}
