"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "./LoadingScreen";

export default function RouteChangeLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1200); // durée du loading
    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? <LoadingScreen /> : null;
} 