import React from "react";
import { Composition } from "remotion";
import { Thread } from "./scenes/Thread";
import { Exception } from "./scenes/Exception";
import { Weave } from "./scenes/Weave";
import { Setup } from "./scenes/Setup";

/* remOPS motion graphics.

   Rendered at 2× their on-page display size so they stay sharp on retina, then
   committed to public/portfolio/remops/ and served as looping <video>. See
   `npm run video` (studio) and `npm run render:remops` (render all four). */

export const RemotionRoot: React.FC = () => (
  <>
    {/* Portrait — sits beside the copy in the hero. */}
    <Composition
      id="remops-thread"
      component={Thread}
      durationInFrames={450}
      fps={30}
      width={1080}
      height={1350}
    />

    {/* Landscape — full-bleed section breaks. */}
    <Composition
      id="remops-exception"
      component={Exception}
      durationInFrames={390}
      fps={30}
      width={1920}
      height={1080}
    />

    {/* Seamless loop: 300 frames / 100-frame packet cycle = 3 whole cycles. */}
    <Composition
      id="remops-weave"
      component={Weave}
      durationInFrames={300}
      fps={30}
      width={1920}
      height={1080}
    />

    <Composition
      id="remops-setup"
      component={Setup}
      durationInFrames={390}
      fps={30}
      width={1920}
      height={1080}
    />
  </>
);
