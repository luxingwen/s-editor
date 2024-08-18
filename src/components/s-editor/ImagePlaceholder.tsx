import React from 'react';

export const ImagePlaceholder = ({ onUpload, onSelectFromLibrary, onInsertFromUrl }) => {
  return (
    <div className="border-2 border-dashed border-gray-300 p-6 text-center rounded-lg">
      <div className="flex justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 7a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zm-3 5a1 1 0 000-2h1a1 1 0 000-2H4a1 1 0 000 2H3a1 1 0 100 2h1z" clipRule="evenodd" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-700">Image</h3>
      <p className="text-sm text-gray-500 mb-4">Upload an image file, pick one from your media library, or add one with a URL.</p>
      <div className="flex justify-center space-x-3">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={onUpload}
        >
          上传
        </button>
        <button
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
          onClick={onSelectFromLibrary}
        >
          媒体库
        </button>
        <button
          className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-50"
          onClick={onInsertFromUrl}
        >
          从 URL 插入
        </button>
      </div>
    </div>
  );
};
