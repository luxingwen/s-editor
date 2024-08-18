import React from 'react';

export const ImageProperties = ({ properties, onChange }) => {
  const handleInputChange = (name, value) => {
    onChange({ ...properties, [name]: value });
  };

  return (
    <div>
      <h3 className="font-bold mb-4">图片属性</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">图片链接</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={properties.imageUrl}
          onChange={(e) => handleInputChange('imageUrl', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">图片替换文本</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={properties.altText}
          onChange={(e) => handleInputChange('altText', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">图片圆角 (px)</label>
        <input
          type="number"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={properties.borderRadius}
          onChange={(e) => handleInputChange('borderRadius', e.target.value)}
        />
      </div>
    </div>
  );
};
