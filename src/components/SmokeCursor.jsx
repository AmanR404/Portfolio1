import { useEffect, useRef } from "react";

const SmokeCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let particles = [];
    let mouse = { x: -1000, y: -1000 };
    let smooth = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let currentAngle = Math.PI / 4;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      // Calculate instantaneous back tail positioning upon fast movements
      const backX = mouse.x - Math.cos(currentAngle) * 24;
      const backY = mouse.y - Math.sin(currentAngle) * 24;

      // Density puff
      for (let i = 0; i < 2; i++) {
        particles.push(new Particle(backX, backY));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    class Particle {
      constructor(x, y) {
        this.x = x + (Math.random() - 0.5) * 15;
        this.y = y + (Math.random() - 0.5) * 15;
        
        this.size = Math.random() * 20 + 10;
        this.maxSize = this.size + Math.random() * 40 + 15;
        
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.5;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.size < this.maxSize) {
          this.size += 0.8;
        }

        this.life -= this.decay;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        
        const currentOpacity = Math.max(0, this.life * 0.5);
        ctx.globalAlpha = currentOpacity;
        
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.4)"); 
        gradient.addColorStop(0.4, "rgba(180, 180, 180, 0.2)");
        gradient.addColorStop(1, "rgba(50, 50, 50, 0)"); 

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const dx = mouse.x - smooth.x;
      const dy = mouse.y - smooth.y;
      const dist = Math.hypot(dx, dy);

      // Dynamically calculate orientation vector based on tracking trajectory
      if (dist > 1) {
         const targetAngle = Math.atan2(dy, dx);
         let da = targetAngle - currentAngle;
         
         while (da > Math.PI) da -= Math.PI * 2;
         while (da < -Math.PI) da += Math.PI * 2;
         
         currentAngle += da * 0.25; 
         smooth.x += dx * 0.25;
         smooth.y += dy * 0.25;
      }

      const backX = mouse.x - Math.cos(currentAngle) * 24;
      const backY = mouse.y - Math.sin(currentAngle) * 24;
      
      // Buffer smoke stream securely from the rear trailing vector
      if (mouse.x > 0 && mouse.y > 0) {
        if (Math.random() < 0.6) {
          particles.push(new Particle(backX, backY));
        }
      }

      // Render smoke layer
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
      
      // Render native physical meteor over smoke layer 
      if (mouse.x > 0 && mouse.y > 0) {
        ctx.save();
        ctx.translate(mouse.x, mouse.y);
        ctx.rotate(currentAngle);
        
        const grad = ctx.createLinearGradient(0, 0, -24, 0);
        grad.addColorStop(0, "rgba(255, 255, 255, 1)");
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");
        
        ctx.beginPath();
        ctx.moveTo(0, 0);       // Native hot-spot
        ctx.lineTo(-24, 0);     // Rigid aerodynamic 24px structural length
        ctx.strokeStyle = grad;
        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.stroke();
        
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-[9999]"
    />
  );
};

export default SmokeCursor;
