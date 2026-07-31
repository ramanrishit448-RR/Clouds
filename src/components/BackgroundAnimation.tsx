import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export function BackgroundAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");
        if (!context) return;

        const frameCount = 236;
        const currentFrame = (index: number) => (
            `/frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
        );

        // Preload all images
        const images: HTMLImageElement[] = [];
        
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            images.push(img);
        }

        // Draw the first frame once loaded
        images[0].onload = () => {
            if (images[0].naturalWidth) {
                canvas.width = images[0].naturalWidth;
                canvas.height = images[0].naturalHeight;
                context.drawImage(images[0], 0, 0);
            }
        };

        // Lenis smooth scrolling setup
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        lenis.on('scroll', () => {
            const scrollTop = window.scrollY;
            const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
            const scrollFraction = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;
            
            const frameIndex = Math.min(
                frameCount - 1,
                Math.max(0, Math.ceil(scrollFraction * frameCount) - 1)
            );
            
            if (images[frameIndex] && images[frameIndex].complete) {
                requestAnimationFrame(() => {
                    if (images[0].naturalWidth && canvas.width !== images[0].naturalWidth) {
                        canvas.width = images[0].naturalWidth;
                        canvas.height = images[0].naturalHeight;
                    }
                    context.drawImage(images[frameIndex], 0, 0);
                });
            }
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        
        // Handle window resize
        const handleResize = () => {
            if (images[0] && images[0].naturalWidth) {
                canvas.width = images[0].naturalWidth;
                canvas.height = images[0].naturalHeight;
                const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
                const scrollFraction = maxScrollTop > 0 ? window.scrollY / maxScrollTop : 0;
                const frameIndex = Math.min(
                    frameCount - 1,
                    Math.max(0, Math.ceil(scrollFraction * frameCount) - 1)
                );
                if (images[frameIndex] && images[frameIndex].complete) {
                    context.drawImage(images[frameIndex], 0, 0);
                }
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            lenis.destroy();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] object-cover z-0 pointer-events-none"
        />
    );
}
