import React from 'react';

export const GridLayoutProperties = ({ properties, onChange }) => {
  const handleInputChange = (name, value) => {
    onChange({ ...properties, [name]: value });
  };

  return (
    <div>
      <h3 className="font-bold mb-4">网格布局属性</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">行数</label>
        <input
          type="number"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={properties.rows}
          onChange={(e) => handleInputChange('rows', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">列数</label>
        <input
          type="number"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={properties.columns}
          onChange={(e) => handleInputChange('columns', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">列宽度</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={properties.columnWidth}
          onChange={(e) => handleInputChange('columnWidth', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">行高度</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={properties.rowHeight}
          onChange={(e) => handleInputChange('rowHeight', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">行间距 (px)</label>
        <input
          type="number"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={properties.rowGap}
          onChange={(e) => handleInputChange('rowGap', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">列间距 (px)</label>
        <input
          type="number"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={properties.columnGap}
          onChange={(e) => handleInputChange('columnGap', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">背景颜色</label>
        <input
          type="color"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={properties.backgroundColor}
          onChange={(e) => handleInputChange('backgroundColor', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">边框样式</label>
        <select
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={properties.borderStyle}
          onChange={(e) => handleInputChange('borderStyle', e.target.value)}
        >
          <option value="none">无</option>
          <option value="solid">实线</option>
          <option value="dashed">虚线</option>
          <option value="dotted">点线</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">边框颜色</label>
        <input
          type="color"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={properties.borderColor}
          onChange={(e) => handleInputChange('borderColor', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">圆角 (px)</label>
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
