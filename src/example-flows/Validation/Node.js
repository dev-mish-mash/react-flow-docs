const basicNode = (type) => ({ title, isValidConnection, handlePriorityClick }) => (
    <>
        {isIt(type)('action', 'intent', 'end') && <Handle type="target" position="left" isValidConnection={isValidConnection} />}
        <div>{title}</div>
        <PriorityButton onClick={handlePriorityClick}></PriorityButton>
        {isIt(type)('action', 'intent', 'start') && <Handle type="source" position="right" isValidConnection={isValidConnection} />}
    </>
);

const isIt = (type) => (...args) => {
    for (let arg of args) { if (type === arg) return true; }
    return false;
}

const nodeTypes = {
    start: basicNode('start'),
    end: basicNode('end'),
    intent: basicNode('intent'),
    action: basicNode('action')
};