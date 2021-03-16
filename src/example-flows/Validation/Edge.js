import React from 'react';

// bezier curve로 구현 
// https://developer.mozilla.org/ko/docs/Web/SVG/Tutorial/Paths 참고
export default ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    data,
    arrowHeadType,
    markerEndId,
}) => {
    const offset = -1.3 * Math.min(targetX - sourceX, (targetX - sourceX) * 0.1);
    return (
        <path
            fill="none"
            stroke="#222"
            strokeWidth={3}
            className="custom-connection"
            d={`M${sourceX},${sourceY} Q${(sourceX + targetX) / 2 + offset} ${sourceY}, ${(sourceX + targetX) / 2} ${(sourceY + targetY) / 2} T ${targetX} ${targetY}`}
        />
    );
};
