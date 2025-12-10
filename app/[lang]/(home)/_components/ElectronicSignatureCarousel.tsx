'use client';
import { useState, useEffect, useRef } from 'react';
import SignatureCard from './SignatureCard';

const images = {
  img1: '/images/home/img-1.png',
  img2: '/images/home/img-2.png',
  img3: '/images/home/img-3.png',
  img4: '/images/home/img-4.png',
  img5: '/images/home/img-5.png',
};

const cardData = [
  {
    number: '1',
    titleBlack: 'Éditeur PDF',
    titleOrange: 'intégré',
    desc: 'Préparez vos documents directement dans la plateforme. Ajoutez des champs de signature, du texte ou des cases à cocher en quelques clics.',
    features: [
      'Édition PDF en temps réel',
      'Positionnement précis des champs',
      'Templates réutilisables',
    ],
    image: images.img3,
  },
  {
    number: '2',
    titleBlack: 'Signature',
    titleOrange: 'en quelques clics',
    desc: 'Signez ou faites signer en 15 secondes. Pas de téléchargement, pas dimpression.',
    features: ['Signature fluide', '100% mobile', 'Légalement reconnue'],
    image: images.img4,
  },
  {
    number: '3',
    titleBlack: 'Suivi',
    titleOrange: 'en temps réel',
    desc: "Soyez notifié dès qu'un document est consulté ou signé.",
    features: [
      'Notifications instantanées',
      'Historique complet',
      'Rappels automatiques',
    ],
    image: images.img5,
  },
  {
    number: '4',
    titleBlack: 'Sécurité',
    titleOrange: 'renforcée',
    desc: 'Vos données sont protégées par un chiffrement de bout en bout.',
    features: ['Chiffrement AES-256', 'Certification eIDAS', 'Audit trail'],
    image: images.img2,
  },
  {
    number: '5',
    titleBlack: 'Intégrations',
    titleOrange: 'faciles',
    desc: 'Connectez votre compte avec vos outils préférés en un clic.',
    features: ['Google Drive, Dropbox', 'Zapier, Make', 'API complète'],
    image: images.img1,
  },
];

type Props = {
  activeIndex: number;
  onSetIndex: (index: number) => void;
};

export default function SignatureStackedCarousel({
  activeIndex,
  onSetIndex,
}: Props) {
  const [offsetValue, setOffsetValue] = useState(30);
  const [scaleValue, setScaleValue] = useState(0.9);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(
    null,
  );
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({
    dragStart,
    dragOffset,
    isDragging,
    activeIndex,
  });

  // Keep refs in sync with state
  useEffect(() => {
    dragStateRef.current = { dragStart, dragOffset, isDragging, activeIndex };
  }, [dragStart, dragOffset, isDragging, activeIndex]);

  useEffect(() => {
    const updateValues = () => {
      if (window.innerWidth >= 1280) {
        setOffsetValue(45);
        setScaleValue(0.96);
      } else if (window.innerWidth >= 1024) {
        setOffsetValue(40);
        setScaleValue(0.95);
      } else if (window.innerWidth >= 768) {
        setOffsetValue(35);
        setScaleValue(0.92);
      } else {
        setOffsetValue(30);
        setScaleValue(0.9);
      }
    };

    updateValues();
    window.addEventListener('resize', updateValues);
    return () => window.removeEventListener('resize', updateValues);
  }, []);

  const handleStart = (clientX: number, clientY: number) => {
    setDragStart({ x: clientX, y: clientY });
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleMove = (clientX: number, clientY: number) => {
    const state = dragStateRef.current;
    if (!state.dragStart || !state.isDragging) return;

    const deltaY = clientY - state.dragStart.y;
    // Limit drag offset to prevent excessive movement
    const maxDrag = 100;
    setDragOffset(Math.max(-maxDrag, Math.min(maxDrag, deltaY)));
  };

  const handleEnd = () => {
    const state = dragStateRef.current;
    if (!state.isDragging) return;

    const threshold = 50; // Minimum drag distance to trigger change

    if (Math.abs(state.dragOffset) > threshold) {
      if (state.dragOffset > 0) {
        // Dragged down - go to previous
        onSetIndex((state.activeIndex - 1 + cardData.length) % cardData.length);
      } else {
        // Dragged up - go to next
        onSetIndex((state.activeIndex + 1) % cardData.length);
      }
    }

    setDragStart(null);
    setIsDragging(false);
    setDragOffset(0);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Global mouse events for drag outside container
  useEffect(() => {
    if (!isDragging) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    };

    const handleGlobalMouseUp = () => {
      handleEnd();
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative  w-full max-w-full lg:w-full lg:max-w-[824px] xl:max-w-[824px] h-[480px] xs:h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[680px] 2xl:h-[699px] flex items-center justify-center overflow-visible cursor-grab active:cursor-grabbing select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {cardData.map((card, index) => {
        const offset = index - activeIndex;
        const isActive = index === activeIndex;
        const absOffset = Math.abs(offset);

        // Add drag offset to active card only
        const dragY = isActive && isDragging ? dragOffset : 0;
        const currentOffset = offset * offsetValue + dragY;

        return (
          <div
            key={index}
            className="absolute w-full max-w-full lg:max-w-[824px] px-0 xs:px-1 sm:px-2 md:px-3 lg:px-0 transition-transform duration-300 ease-out"
            style={{
              transform: `translateY(${
                currentOffset ? currentOffset : 5
              }px) scale(${isActive ? 1 : 1})`,
              zIndex: isActive ? 50 : Math.max(1, 50 - absOffset * 5),
              opacity: isActive ? 1 : Math.max(1, 1 - absOffset * 1),
              pointerEvents: isActive ? 'auto' : 'none',
              transition: isDragging ? 'none' : 'all 0.5s ease-out',
            }}
          >
            <SignatureCard {...card} />
          </div>
        );
      })}
    </div>
  );
}
