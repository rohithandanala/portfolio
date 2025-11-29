
"use client";

import { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';

type GearProps = React.SVGProps<SVGSVGElement> & {
  mainRotation: number;
};

const Gear = ({ className, mainRotation, ...props }: GearProps) => {
  const subGearRotation = mainRotation * -1.5;

  const accentedGear = useMemo(() => Math.floor(Math.random() * 3), []);

  const getGearColor = (gearIndex: number) => {
    return accentedGear === gearIndex ? "hsl(var(--destructive))" : "hsl(var(--primary))";
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-150 -150 300 300"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("text-foreground/30", className)}
      style={{
        filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.6)) drop-shadow(2px 2px 2px black)',
      }}
      {...props}
    >
      <defs>
        <g id="spur-gear-100">
          <circle r="85" strokeWidth="3" fill="hsl(var(--card) / 0.7)" stroke={getGearColor(0)} />
          <path
            d="M0,85 L0,100 M0,-85 L0,-100 M85,0 L100,0 M-85,0 L-100,0 M60.1,60.1 L70.7,70.7 M-60.1,-60.1 L-70.7,-70.7 M-60.1,60.1 L-70.7,70.7 M60.1,-60.1 L70.7,-70.7"
            strokeWidth="15"
            strokeLinecap="butt"
            stroke={getGearColor(0)}
          />
          <circle r="30" fill="hsl(var(--background))" strokeWidth="2" stroke={getGearColor(0)} />
        </g>
        
        <g id="spur-gear-40-1">
           <circle r="34" strokeWidth="2.5" fill="hsl(var(--card) / 0.7)" stroke={getGearColor(1)} />
            <path
                d="M0,34 L0,40 M0,-34 L0,-40 M34,0 L40,0 M-34,0 L-40,0"
                strokeWidth="10"
                strokeLinecap="butt"
                stroke={getGearColor(1)}
            />
            <circle r="12" fill="hsl(var(--background))" strokeWidth="1.5" stroke={getGearColor(1)}/>
        </g>
         <g id="spur-gear-40-2">
           <circle r="34" strokeWidth="2.5" fill="hsl(var(--card) / 0.7)" stroke={getGearColor(2)} />
            <path
                d="M0,34 L0,40 M0,-34 L0,-40 M34,0 L40,0 M-34,0 L-40,0"
                strokeWidth="10"
                strokeLinecap="butt"
                stroke={getGearColor(2)}
            />
            <circle r="12" fill="hsl(var(--background))" strokeWidth="1.5" stroke={getGearColor(2)}/>
        </g>
      </defs>
      
      <g style={{ transform: `rotate(${mainRotation}deg)` }}>
        <use href="#spur-gear-100" />
      </g>
      
      <g transform="translate(100, 70)" style={{ transform: `translate(105, 80) rotate(${subGearRotation}deg)` }}>
          <use href="#spur-gear-40-1" />
      </g>
      <g transform="translate(-100, -70)" style={{ transform: `translate(-105, -80) rotate(${subGearRotation}deg)` }}>
          <use href="#spur-gear-40-2" />
      </g>
    </svg>
  );
};


export default function KineticGears(props: GearProps) {
  return (
      <Gear
          className="w-full h-full transition-transform duration-100 ease-linear"
          mainRotation={props.mainRotation}
        />
  );
}
