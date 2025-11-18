import React from "react";

export const LoadingProducts = () => {
  return (
    <div className="loading-grid">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="loading-card">
          <div className="loading-image"></div>
          <div className="loading-line short"></div>
          <div className="loading-line long"></div>
        </div>
      ))}
    </div>
  );
};

export const EmptyState = () => {
  return (
    <div className="empty-container">
      <div className="empty-icon">
        <i className="fa-solid fa-box-open"></i>
      </div>
      <h3 className="empty-title">No Products Found</h3>
      <p className="empty-text">
        It looks empty here. Try adjusting your search or filters.
      </p>
      <button className="empty-button">Browse Products</button>
    </div>
  );
};
