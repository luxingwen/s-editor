import React from 'react';

export const ButtonProperties = ({ properties, onChange }) => {
  const handleInputChange = (name, value) => {
    onChange({ ...properties, [name]: value });
  };

  return (
    <div>
      <h3 className="font-bold mb-4">按钮属性</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">按钮文本</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={properties.text}
          onChange={(e) => handleInputChange('text', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">链接地址</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={properties.link}
          onChange={(e) => handleInputChange('link', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">按钮颜色</label>
        <input
          type="color"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={properties.color}
          onChange={(e) => handleInputChange('color', e.target.value)}
        />
      </div>
    </div>
  );
};
