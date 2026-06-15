declare module "vanta/dist/vanta.net.min" {
  type VantaEffect = {
    destroy: () => void;
    setOptions?: (options: Record<string, unknown>) => void;
    resize?: () => void;
  };

  type VantaOptions = {
    el: HTMLElement;
    THREE: unknown;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    backgroundAlpha?: number;
    color?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
    showDots?: boolean;
  };

  export default function NET(options: VantaOptions): VantaEffect;
}
