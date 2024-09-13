"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, useMemo } from "react";
import WaveSurfer from "wavesurfer.js";

// WaveSurfer hook
const useWavesurfer = (containerRef: any, options: any) => {
  const [wavesurfer, setWavesurfer] = useState<any>(null);

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!containerRef.current) return;

    const ws = WaveSurfer.create({
      ...options,
      container: containerRef.current,
    });

    setWavesurfer(ws);

    return () => {
      ws.destroy();
    };
  }, [options, containerRef]);

  return wavesurfer;
};

////////////////
const WaveTrack = () => {
  const searchParams = useSearchParams();
  const fileName = searchParams.get("audio");
  const containerREF = useRef<HTMLDivElement>(null);
  const optionsMemo = useMemo(() => {
    return {
      waveColor: "rgb(200, 0, 200)",
      progressColor: "rgb(100, 0, 100)",
      url: `/api?audio=${fileName}`,
    };
  }, []);
  //   const options = {
  //     waveColor: "rgb(200, 0, 200)",
  //     progressColor: "rgb(100, 0, 100)",
  //     url: `/api?audio=${fileName}`,
  //   };

  const wavesurfer = useWavesurfer(containerREF, options);

  //   useEffect(() => {
  //     if (containerREF.current) {
  //       const wavesurfer = WaveSurfer.create({
  //         container: containerREF.current,
  //         waveColor: "rgb(200, 0, 200)",
  //         progressColor: "rgb(100, 0, 100)",
  //         url: `/api?audio=${fileName}`,
  //       });
  //       return () => {
  //         wavesurfer.destroy();
  //       };
  //     }
  //   }, []);

  return <div ref={containerREF}>wt</div>;
};

export default WaveTrack;
