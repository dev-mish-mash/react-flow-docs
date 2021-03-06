import React from 'react';

export default ({
  sourceX,
  sourceY,
  sourcePosition,
  targetX,
  targetY,
  targetPosition,
  connectionLineType,
  connectionLineStyle,
}) => {
  const offset = -1.5 * Math.min(targetX-sourceX, 0);
  return (
    <g>
      <path
        fill="none"
        stroke="#222"
        strokeWidth={3}
        className="custom-connection"
        d={`M${sourceX},${sourceY} Q${(sourceX + targetX) / 2 + offset} ${sourceY}, ${(sourceX + targetX) / 2} ${(sourceY + targetY) / 2} T ${targetX} ${targetY}`}
      />
      <circle cx={targetX} cy={targetY} fill="#fff" r={5} stroke="#222" strokeWidth={3} />
    </g>
  );
};
