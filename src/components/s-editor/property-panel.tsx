import React, {useState} from 'react';
import { GridLayoutProperties } from './GridLayoutProperties';
import { ImageProperties } from './ImageProperties';
import {ButtonProperties} from './ButtonProperties';

export const PropertyPanel = ({ selectedBlock, className }) => {

  const [gridProperties, setGridProperties] = useState({
    rows: 2,
    columns: 3,
    columnWidth: "1fr 2fr 1fr",
    rowHeight: "auto",
    rowGap: 10,
    columnGap: 10,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderColor: "#cccccc",
    borderRadius: 5
  });

  const [imageProperties, setImageProperties] = useState({
    imageUrl: "",
    altText: "",
    borderRadius: 0
  });

  const [buttonProperties, setButtonProperties] = useState({
    text: "点击我",
    link: "",
    color: "#007bff"
  });

  const handleButtonChange = (updatedProperties) => {
    setButtonProperties(updatedProperties);
  };

  const handleImageChange = (updatedProperties) => {
    setImageProperties(updatedProperties);
  };

  const handleGridChange = (updatedProperties) => {
    setGridProperties(updatedProperties);
  };

  return (
    <div className={`bg-gray-100 p-4 h-full fixed top-0  right-0 overflow-y-auto ${className}`}>
      <h3 className="font-bold mb-4">属性设置</h3>

      {/* 页面结构属性 */}
      {selectedBlock === 'pageStructure' && (
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">页面宽度</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option>全宽</option>
              <option>固定宽度</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">背景颜色</label>
            <input
              type="color"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              defaultValue="#ffffff"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">内边距 (px)</label>
            <input
              type="number"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              defaultValue={20}
            />
          </div>
        </div>
      )}

    {selectedBlock === 'grid' && (
        <GridLayoutProperties
          properties={gridProperties}
          onChange={handleGridChange}
        />
      )}

      {/* 文本区块属性 */}
      {selectedBlock === 'text' && (
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">字体大小 (px)</label>
            <input
              type="number"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              defaultValue={16}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">字体颜色</label>
            <input
              type="color"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              defaultValue="#000000"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">对齐方式</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option>左对齐</option>
              <option>居中</option>
              <option>右对齐</option>
            </select>
          </div>
        </div>
      )}

      {/* 图片区块属性 */}
      {selectedBlock === 'image' && (
        <ImageProperties
          properties={imageProperties}
          onChange={handleImageChange}
        />
      )}

      {/* 按钮区块属性 */}
      {selectedBlock === 'button' && (
        <ButtonProperties
          properties={buttonProperties}
          onChange={handleButtonChange}
        />
      )}

      {/* 视频区块属性 */}
      {selectedBlock === 'video' && (
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">视频链接</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              defaultValue=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">自动播放</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option>是</option>
              <option>否</option>
            </select>
          </div>
        </div>
      )}

      {/* 分隔线区块属性 */}
      {selectedBlock === 'divider' && (
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">分隔线高度 (px)</label>
            <input
              type="number"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              defaultValue={1}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">分隔线颜色</label>
            <input
              type="color"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              defaultValue="#cccccc"
            />
          </div>
        </div>
      )}

      {/* 表单区块属性 */}
      {selectedBlock === 'form' && (
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">字段名称</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              defaultValue=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">占位符文本</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              defaultValue=""
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">必填字段</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option>是</option>
              <option>否</option>
            </select>
          </div>
        </div>
      )}

      {/* 产品展示区块属性 */}
      {selectedBlock === 'productShowcase' && (
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">显示数量</label>
            <input
              type="number"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              defaultValue={10}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">排序方式</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option>价格</option>
              <option>名称</option>
              <option>日期</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">显示按钮</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option>是</option>
              <option>否</option>
            </select>
          </div>
        </div>
      )}

      {/* 导航区块属性 */}
      {selectedBlock === 'navigation' && (
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">链接列表</label>
            <textarea
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              rows={4}
              defaultValue="链接1\n链接2\n链接3"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">背景颜色</label>
            <input
              type="color"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              defaultValue="#ffffff"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">导航对齐方式</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option>左对齐</option>
              <option>居中</option>
              <option>右对齐</option>
            </select>
          </div>
        </div>
      )}

      {/* 自定义代码区块属性 */}
      {selectedBlock === 'customCode' && (
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">HTML 代码</label>
            <textarea
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              rows={4}
              defaultValue="<p>自定义 HTML</p>"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">CSS 代码</label>
            <textarea
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              rows={4}
              defaultValue="body { font-family: Arial; }"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">JavaScript 代码</label>
            <textarea
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              rows={4}
              defaultValue="console.log('Hello World');"
            />
          </div>
        </div>
      )}

    </div>
  );
};
