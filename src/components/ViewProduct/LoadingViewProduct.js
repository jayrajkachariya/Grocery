import React from 'react';
import LoadingViewer from "../Core Component/LoadingViewer";

const LoadingViewProduct = () => (
  <div className="d-grid grid-2 container">
    <div className="m-4">
      <div className="h-5 my-1 w-20pt">
        <LoadingViewer/>
      </div>
      <div className="h-5 my-1 w-100pt">
        <LoadingViewer/>
      </div>
      <div className="h-55 my-1">
        <LoadingViewer/>
      </div>
    </div>

    <div className="m-4">
      <div className="h-5 my-1 w-50pt">
        <LoadingViewer/>
      </div>
      <div className="h-5 my-1 w-25pt">
        <LoadingViewer/>
      </div>
      <div className="h-5 my-1 w-20pt">
        <LoadingViewer/>
      </div>
      <div className="h-200p my-1">
        <LoadingViewer/>
      </div>
      <div className="h-200p my-1">
        <LoadingViewer/>
      </div>
    </div>
  </div>
);

export default LoadingViewProduct;
