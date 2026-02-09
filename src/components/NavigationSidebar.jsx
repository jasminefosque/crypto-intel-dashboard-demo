import { useState } from 'react';
import './NavigationSidebar.css';

function NavigationItem({ node, level, activeId, onSelect }) {
  const [isOpen, setIsOpen] = useState(level < 2); // Auto-expand first 2 levels
  const hasChildren = node.children && node.children.length > 0;
  const isActive = activeId === node.id;

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
    onSelect(node);
  };

  return (
    <div className="nav-item-container">
      <button
        className={`nav-item ${isActive ? 'active' : ''}`}
        style={{ paddingLeft: `${12 + level * 16}px` }}
        onClick={handleClick}
      >
        {hasChildren && (
          <span className={`nav-chevron ${isOpen ? 'open' : ''}`}>
            ▶
          </span>
        )}
        {!hasChildren && <span className="nav-dot">•</span>}
        <span className="nav-label">{node.label}</span>
      </button>
      
      {hasChildren && isOpen && (
        <div className="nav-children">
          {node.children.map((child) => (
            <NavigationItem
              key={child.id}
              node={child}
              level={level + 1}
              activeId={activeId}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function NavigationSidebar({ tree, activeId, onSelect }) {
  return (
    <div className="navigation-sidebar">
      <div className="sidebar-header">
        <h3>Navigation</h3>
        <div className="sidebar-badge">Full Tree</div>
      </div>
      <div className="sidebar-content">
        {tree.map((node) => (
          <NavigationItem
            key={node.id}
            node={node}
            level={0}
            activeId={activeId}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default NavigationSidebar;
