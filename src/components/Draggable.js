export function makeElementDraggable(headerId, containerId) {
    const header = document.getElementById(headerId);
    const container = document.getElementById(containerId);
    let offsetX = 0, offsetY = 0, initialX = 0, initialY = 0;

    const onMouseDown = (e) => {
        e.preventDefault();
        initialX = e.clientX - container.offsetLeft;
        initialY = e.clientY - container.offsetTop;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
        offsetX = e.clientX - initialX;
        offsetY = e.clientY - initialY;
        container.style.top = `${offsetY}px`;
        container.style.left = `${offsetX}px`;
    };

    const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };

    if (header) {
        header.addEventListener('mousedown', onMouseDown);
    }
}