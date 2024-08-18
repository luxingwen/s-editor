'use client';

import React, { useRef, useState } from 'react';
import { Plate } from '@udecode/plate-common';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { plugins } from '@/lib/plate/plate-plugins';

import { DraggableBlock } from './DraggableBlock';
import { Editor } from './Editor';
import { ImagePlaceholder } from './ImagePlaceholder';
import { PropertyPanel } from './property-panel';
import { SideBar } from './sider-bar';


export default function PlateEditor() {
  const [blocks, setBlocks] = useState([
    { id: '1', type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  ]);
  const [selectedBlock, setSelectedBlock] = useState(null);

  const addBlock = (type) => {
    const newBlock = { id: `${blocks.length + 1}`, type, children: [{ text: 'New Block' }] };
    setBlocks([...blocks, newBlock]);
    setSelectedBlock(type);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-row h-screen w-full">
        {/* Left Sidebar */}
        <div className="w-1/12 bg-gray-100 p-4 overflow-y-auto">
          <SideBar onAddBlock={addBlock} />
        </div>

        {/* Center Content Area */}
        <div className="w-10/12 bg-gray-50 overflow-auto">
          <Plate plugins={plugins} initialValue={blocks}>
            {blocks.map((block, index) => (
              <DraggableBlock
                key={block.id}
                id={block.id}
                index={index}
                onSelect={() => setSelectedBlock(block.type)}
              >
                <Editor block={block} />
              </DraggableBlock>
            ))}
          </Plate>
        </div>

        {/* Right Property Panel */}
        <div className="w-1/12 bg-gray-100 p-4 border-l overflow-y-auto">
          <PropertyPanel selectedBlock={selectedBlock} />
        </div>
      </div>
    </DndProvider>
  );
}
