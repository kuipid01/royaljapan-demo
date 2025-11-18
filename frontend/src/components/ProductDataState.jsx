import React from "react";
import { EmptyState, LoadingProducts } from "./DataState";

const ProductDataState = ({ isFetchingData, data, error, children }) => {

   
  if (isFetchingData) {
    return <LoadingProducts />;
  }

  // 2. Show error AFTER loading finished
  if (error) {
    return (
      <div className="error-state">
        Failed to load products.
      </div>
    );
  }

  // 3. Only check for empty AFTER loading is false
  if (!isFetchingData && (!data || data.length === 0)) {
    return <EmptyState />;
  }

  // 4. Render data
  return <>{children}</>;
};

export default ProductDataState;
