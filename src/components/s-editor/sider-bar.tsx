import React, { useState } from 'react';

export const SideBar = ({ onAddBlock, className }) => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className={`bg-gray-100 p-4 h-full fixed top-0 left-0 overflow-y-auto ${className}`}>
      <h3 className="font-bold mb-4">工具栏</h3>

      {/* 页面结构 */}
      <div>
        <button
          className="w-full text-left font-semibold text-gray-700 py-2"
          onClick={() => toggleSection('pageStructure')}
        >
          页面结构
        </button>
        {activeSection === 'pageStructure' && (
          <div className="pl-4 pt-2">
            <button className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded">
              添加页面部分
            </button>
            <button className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded">
              页面部分列表
            </button>
            <button className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded">
              拖拽排序
            </button>
          </div>
        )}
      </div>

      {/* 常见区块 */}
      <div>
        <button
          className="w-full text-left font-semibold text-gray-700 py-2"
          onClick={() => toggleSection('commonBlocks')}
        >
          常见区块
        </button>
        {activeSection === 'commonBlocks' && (
          <div className="pl-4 pt-2">
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('text')}
            >
              文本区块
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('image')}
            >
              图片区块
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('button')}
            >
              按钮区块
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('video')}
            >
              视频区块
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('divider')}
            >
              分隔线
            </button>
          </div>
        )}
      </div>

      {/* 布局区块 */}
      <div>
        <button
          className="w-full text-left font-semibold text-gray-700 py-2"
          onClick={() => toggleSection('layoutBlocks')}
        >
          布局区块
        </button>
        {activeSection === 'layoutBlocks' && (
          <div className="pl-4 pt-2">
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('grid')}
            >
              网格布局
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('columns')}
            >
              列布局
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('banner')}
            >
              横幅
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('carousel')}
            >
              轮播图
            </button>
          </div>
        )}
      </div>

      {/* 产品展示 */}
      <div>
        <button
          className="w-full text-left font-semibold text-gray-700 py-2"
          onClick={() => toggleSection('productShowcase')}
        >
          产品展示
        </button>
        {activeSection === 'productShowcase' && (
          <div className="pl-4 pt-2">
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('productList')}
            >
              产品列表
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('productDetails')}
            >
              产品详情
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('productGrid')}
            >
              产品网格
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('productFilter')}
            >
              产品过滤
            </button>
          </div>
        )}
      </div>

      {/* 营销工具 */}
      <div>
        <button
          className="w-full text-left font-semibold text-gray-700 py-2"
          onClick={() => toggleSection('marketingTools')}
        >
          营销工具
        </button>
        {activeSection === 'marketingTools' && (
          <div className="pl-4 pt-2">
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('promoBanner')}
            >
              促销横幅
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('countdown')}
            >
              倒计时
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('couponCode')}
            >
              优惠券代码
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('form')}
            >
              表单
            </button>
          </div>
        )}
      </div>

      {/* 导航和链接 */}
      <div>
        <button
          className="w-full text-left font-semibold text-gray-700 py-2"
          onClick={() => toggleSection('navigationLinks')}
        >
          导航和链接
        </button>
        {activeSection === 'navigationLinks' && (
          <div className="pl-4 pt-2">
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('navbar')}
            >
              导航栏
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('breadcrumb')}
            >
              面包屑导航
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('socialIcons')}
            >
              社交媒体图标
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('footerMenu')}
            >
              页脚菜单
            </button>
          </div>
        )}
      </div>

      {/* 社交证明 */}
      <div>
        <button
          className="w-full text-left font-semibold text-gray-700 py-2"
          onClick={() => toggleSection('socialProof')}
        >
          社交证明
        </button>
        {activeSection === 'socialProof' && (
          <div className="pl-4 pt-2">
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('customerReviews')}
            >
              客户评论
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('testimonials')}
            >
              推荐语
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('mediaCoverage')}
            >
              媒体报道
            </button>
          </div>
        )}
      </div>

      {/* 自定义代码 */}
      <div>
        <button
          className="w-full text-left font-semibold text-gray-700 py-2"
          onClick={() => toggleSection('customCode')}
        >
          自定义代码
        </button>
        {activeSection === 'customCode' && (
          <div className="pl-4 pt-2">
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('htmlBlock')}
            >
              HTML 块
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('cssBlock')}
            >
              CSS 块
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('jsBlock')}
            >
              JavaScript 块
            </button>
          </div>
        )}
      </div>

      {/* 其他区块 */}
      <div>
        <button
          className="w-full text-left font-semibold text-gray-700 py-2"
          onClick={() => toggleSection('otherBlocks')}
        >
          其他区块
        </button>
        {activeSection === 'otherBlocks' && (
          <div className="pl-4 pt-2">
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('map')}
            >
              地图
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('faq')}
            >
              FAQ
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('progressBar')}
            >
              进度条
            </button>
            <button
              className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded"
              onClick={() => onAddBlock('team')}
            >
              团队成员
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
