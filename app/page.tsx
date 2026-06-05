import dynamic from "next/dynamic";

const AnimatedShaderBackground = dynamic(
  () => import("@/components/ui/animated-shader-background"),
  { ssr: false }
);

const LogoTilt = dynamic(
  () => import("@/components/ui/logo-tilt"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-0">
        <AnimatedShaderBackground />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-10">
        <LogoTilt />
      </div>

      {/* Corner ribbon */}
      <div className="ribbon-wrapper">
        <div className="ribbon">
          <div className="ribbon-marquee">
            <span>PRONTO LA WEB!&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;PRONTO LA WEB!&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;</span>
            <span aria-hidden="true">PRONTO LA WEB!&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;PRONTO LA WEB!&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;</span>
          </div>
        </div>
      </div>
    </>
  );
}
