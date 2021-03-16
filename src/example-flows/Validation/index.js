import React, { useState } from 'react';

import ReactFlow, { addEdge, Handle } from 'react-flow-renderer';
import './validation.css';
import ConnectionLine from './ConnectionLine';

const initialElements = [
  { id: '0', type: 'BasicNode', position: { x: 0, y: 150 } },
  { id: 'A', type: 'BasicNode', position: { x: 250, y: 0 } },
  { id: 'B', type: 'BasicNode', position: { x: 250, y: 150 } },
  { id: 'C', type: 'BasicNode', position: { x: 250, y: 300 } },
  {
    id: 'edges-e5-7',
    source: '0',
    target: 'B',
    label: 'Conditions: 0',
    animated: true,
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0.7 },
    style: { stroke: 'gray', strokeWidth: 3, cursor: 'pointer' },
    arrowHeadType: 'arrow',
  },
];

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();
const isValidConnection = (connection) => connection.target === 'B';
const onConnectStart = (event, { nodeId, handleType }) => console.log('on connect start', { nodeId, handleType });
const onConnectStop = (event) => console.log('on connect stop', event);
const onConnectEnd = (event) => console.log('on connect end', event);

const CustomInput = () => (
  <>
    <div>Only connectable with B</div>
    <Handle type="source" position="right" isValidConnection={isValidConnection} />
  </>
);

const BasicNode = ({ id }) => (
  <>
    <Handle type="target" position="left" isValidConnection={isValidConnection} style={{ top: 10 }} />
    <div>{id}</div>
    <div>JKsss125125</div>
    <div>checkpoints</div>
    <Handle type="source" position="right" isValidConnection={isValidConnection} style={{
      top: `calc(100% - 10px)`
    }} />
  </>
);

const nodeTypes = {
  custominput: CustomInput,
  BasicNode: BasicNode,
};

const HorizontalFlow = () => {
  const [elements, setElements] = useState(initialElements);
  const onConnect = (params) => {
    console.log('on connect', params);
    setElements((els) => addEdge(params, els));
  };

  return (
    <ReactFlow
      elements={elements}
      onConnect={onConnect}
      selectNodesOnDrag={false}
      onLoad={onLoad}
      className="scenarioFlow"
      nodeTypes={nodeTypes}
      connectionLineComponent={ConnectionLine}
      onConnectStart={onConnectStart}
      onConnectStop={onConnectStop}
      onConnectEnd={onConnectEnd}
    />
  );
};

export default HorizontalFlow;
