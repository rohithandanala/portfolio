
"use client";

import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="">
      <div className="container flex items-center justify-center py-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} AI-Driven Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
