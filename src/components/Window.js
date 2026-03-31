import { useEffect, useRef, useState } from 'react';

export function Window({
  title,
  subtitle,
  children,
  collapsed = false,
  onToggleCollapse,
  initialPosition = { x: 0, y: 0 },
  className = '',
}) {
  const [position, setPosition] = useState(initialPosition);
  const dragRef = useRef({ dragging: false, offsetX: 0, offsetY: 0 });
  const windowRef = useRef(null);

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (!dragRef.current.dragging) return;
      setPosition({
        x: event.clientX - dragRef.current.offsetX,
        y: event.clientY - dragRef.current.offsetY,
      });
    };

    const handlePointerUp = () => {
      dragRef.current.dragging = false;
    };

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  const handleHeaderPointerDown = (event) => {
    // Only allow dragging from the title/subtitle area, not the buttons
    if (event.target !== event.currentTarget && !event.currentTarget.querySelector('div')?.contains(event.target)) {
      return;
    }
    if (!windowRef.current) return;
    dragRef.current.dragging = true;
    dragRef.current.offsetX = event.clientX - position.x;
    dragRef.current.offsetY = event.clientY - position.y;
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  return (
    <section
      ref={windowRef}
      className={`window ${collapsed ? 'window--collapsed' : ''} ${className}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      <header className="window__header" onPointerDown={handleHeaderPointerDown}>
        <div>
          <h2 className="window__title">{title}</h2>
          {subtitle ? <p className="window__subtitle">{subtitle}</p> : null}
        </div>
        {onToggleCollapse ? (
          <button
            className="window__toggle"
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={onToggleCollapse}
          >
            {collapsed ? '+' : '-'}
          </button>
        ) : null}
      </header>
      {!collapsed ? <div className="window__body">{children}</div> : null}
    </section>
  );
}
