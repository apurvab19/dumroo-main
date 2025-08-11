declare module 'vanta/dist/vanta.waves.min' {
    import * as THREE from 'three';
    interface VantaWavesOptions {
      el: HTMLElement | string;
      THREE: typeof THREE;
      mouseControls?: boolean;
      touchControls?: boolean;
      gyroControls?: boolean;
      minHeight?: number;
      minWidth?: number;
      scale?: number;
      scaleMobile?: number;
      color?: number;
      waveHeight?: number;
      waveSpeed?: number;
      zoom?: number;
      // Add any other options you use for Vanta.js waves
    }
    function WAVES(options: VantaWavesOptions): { destroy: () => void };
    export default WAVES;
  }