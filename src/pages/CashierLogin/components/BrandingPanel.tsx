import React from "react";
import { BRANDING } from "../constants";

/**
 * Branding Panel Component
 * Displays left side branding/marketing content
 */
const BrandingPanel: React.FC = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center bg-orange"
      style={{
        flex: 1,
        minWidth: 400,
        background: BRANDING.brandColor,
        borderRadius: 24,
        margin: 24,
      }}
    >
      <div className="text-white text-center" style={{ maxWidth: 340 }}>
        <h2 className="fw-bold mb-4">
          {BRANDING.tagline} <br />
          <span style={{ color: "#fff" }}>{BRANDING.appName}</span>
        </h2>
        <img
          src={BRANDING.logoPath}
          alt="POS"
          className="mb-4"
          style={{ width: 220, borderRadius: 16 }}
        />
        <img
          src={BRANDING.logoPath}
          alt="POS UI"
          className="mb-4"
          style={{ width: 220, borderRadius: 16, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
        />
        <div className="mt-4 text-sm">{BRANDING.description}</div>
      </div>
    </div>
  );
};

export default BrandingPanel;

