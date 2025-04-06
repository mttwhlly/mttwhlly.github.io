// PhysicsElements.jsx - Interactive version
import React, { useEffect, useRef, useState } from 'react';
import { 
  Engine, 
  Render, 
  World, 
  Bodies, 
  Runner, 
  Body, 
  Composite,
  Events,
  Mouse,
  MouseConstraint
} from 'matter-js';

// The tech items to display
const techItems = [
  { name: 'react', color: '#0015ff', x: '30%', y: '10%' },
  { name: 'typescript', color: '#e794da', x: '30%', y: '30%' },
  { name: 'motion', color: '#1f464d', x: '40%', y: '20%', angle: 10 },
  { name: 'tailwind', color: '#ff5941', x: '75%', y: '10%' },
  { name: 'drei', color: '#f97316', x: '80%', y: '20%' },
  { name: 'matter-js', color: '#ffd726', x: '50%', y: '10%' }
];

// Function to calculate position from percentage or pixels
const calculatePosition = (pos, containerSize) => {
  if (typeof pos === "string" && pos.endsWith("%")) {
    return (parseFloat(pos) / 100) * containerSize;
  }
  return typeof pos === "number" ? pos : 0;
};

const PhysicsElements = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const runnerRef = useRef(null);
  const mouseConstraintRef = useRef(null);
  const elementsRef = useRef([]);
  const bodiesRef = useRef([]);

  // Initialize physics on mount
  useEffect(() => {
    if (!containerRef.current) return;
    
    console.log('Initializing physics');
    
    // Get container dimensions
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    setDimensions({ width, height });
    
    // Create engine
    const engine = Engine.create({
      gravity: { x: 0, y: 1 }
    });
    engineRef.current = engine;
    
    // Create renderer
    const render = Render.create({
      element: containerRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent'
      }
    });
    renderRef.current = render;
    
    // Create walls
    const walls = [
      // Bottom
      Bodies.rectangle(width / 2, height + 30, width, 60, { 
        isStatic: true,
        render: { fillStyle: 'transparent' }
      }),
      // Left
      Bodies.rectangle(-30, height / 2, 60, height, { 
        isStatic: true,
        render: { fillStyle: 'transparent' }
      }),
      // Right
      Bodies.rectangle(width + 30, height / 2, 60, height, { 
        isStatic: true,
        render: { fillStyle: 'transparent' }
      })
    ];
    
    World.add(engine.world, walls);
    
    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });
    
    World.add(engine.world, mouseConstraint);
    
    // Keep the mouse in sync with rendering
    render.mouse = mouse;
    mouseConstraintRef.current = mouseConstraint;
    
    // Add grabbing cursor for better UX
    Events.on(mouseConstraint, 'mousedown', () => {
      const bodyUnderMouse = mouseConstraint.body;
      if (bodyUnderMouse) {
        render.canvas.style.cursor = 'grabbing';
      }
    });
    
    Events.on(mouseConstraint, 'mouseup', () => {
      render.canvas.style.cursor = 'grab';
    });
    
    Events.on(engine, 'beforeUpdate', () => {
      const bodyUnderMouse = mouseConstraint.body;
      if (bodyUnderMouse) {
        render.canvas.style.cursor = mouseConstraint.mouse.button === 0 ? 'grabbing' : 'grab';
      } else {
        render.canvas.style.cursor = 'default';
      }
    });
    
    // Create runner
    const runner = Runner.create();
    runnerRef.current = runner;
    
    // Start the engine
    Render.run(render);
    Runner.run(runner, engine);
    
    // Create elements after a short delay to ensure container is ready
    setTimeout(() => {
      createPhysicsElements();
    }, 500);
    
    // Cleanup on unmount
    return () => {
      if (mouseConstraintRef.current) {
        World.remove(engine.world, mouseConstraintRef.current);
      }
      
      Events.off(mouseConstraint);
      Mouse.clearSourceEvents(mouse);
      
      Runner.stop(runner);
      Render.stop(render);
      World.clear(engine.world, false);
      Engine.clear(engine);
      
      if (render.canvas) {
        render.canvas.remove();
      }
      
      renderRef.current = null;
      engineRef.current = null;
      runnerRef.current = null;
      mouseConstraintRef.current = null;
    };
  }, []);
  
  // Create physics elements
  const createPhysicsElements = () => {
    if (!engineRef.current || !renderRef.current || !containerRef.current) return;
    
    console.log('Creating physics elements');
    
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    
    // Clear existing bodies
    if (bodiesRef.current.length > 0) {
      Composite.remove(engineRef.current.world, bodiesRef.current);
      bodiesRef.current = [];
    }
    
    // Remove existing DOM elements
    elementsRef.current.forEach(element => {
      if (element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    });
    
    // Create new DOM elements and bodies
    const newElements = [];
    const newBodies = [];
    
    techItems.forEach((item, index) => {
      // Create DOM element
      const element = document.createElement('div');
      element.className = 'text-xl sm:text-2xl md:text-3xl text-white rounded-full px-8 py-4 absolute';
      element.style.backgroundColor = item.color;
      element.textContent = item.name;
      element.style.pointerEvents = 'none';
      containerRef.current.appendChild(element);
      
      // Measure element
      const rect = element.getBoundingClientRect();
      const elementWidth = rect.width;
      const elementHeight = rect.height;
      
      // Create physics body
      const x = calculatePosition(item.x, width);
      const y = calculatePosition(item.y, height);
      const angleInRadians = (item.angle || 0) * (Math.PI / 180);
      
      const body = Bodies.rectangle(x, y, elementWidth, elementHeight, {
        friction: 0.3,
        restitution: 0.6,
        density: 0.001,
        angle: angleInRadians,
        // Make sure bodies aren't too light so they can be thrown properly
        mass: 1
      });
      
      // Add to world
      World.add(engineRef.current.world, [body]);
      
      // Store references
      newElements.push(element);
      newBodies.push(body);
    });
    
    elementsRef.current = newElements;
    bodiesRef.current = newBodies;
    
    // Setup animation frame for updating positions
    requestAnimationFrame(updateElementPositions);
  };
  
  // Update element positions based on physics
  const updateElementPositions = () => {
    if (!engineRef.current || !runnerRef.current?.enabled) return;
    
    elementsRef.current.forEach((element, index) => {
      const body = bodiesRef.current[index];
      if (!body) return;
      
      const { x, y } = body.position;
      const angle = body.angle * (180 / Math.PI);
      
      const width = element.offsetWidth;
      const height = element.offsetHeight;
      
      element.style.transform = `translate(${x - width/2}px, ${y - height/2}px) rotate(${angle}deg)`;
    });
    
    requestAnimationFrame(updateElementPositions);
  };
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !engineRef.current || !renderRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      setDimensions({ width, height });
      
      // Update renderer
      renderRef.current.options.width = width;
      renderRef.current.options.height = height;
      renderRef.current.canvas.width = width;
      renderRef.current.canvas.height = height;
      
      // Recreate elements
      createPhysicsElements();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute top-0 left-0 w-full h-full"
      style={{ overflow: 'hidden', cursor: 'grab' }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};

export default PhysicsElements;