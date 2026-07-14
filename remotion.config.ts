import { Config } from "@remotion/cli/config";

/* Quality settings. The whole point of these clips is that they stay crisp
   against hairline 1px rules and small tabular figures, so:
     • JPEG quality 100 on the intermediate frames (no chroma mush before encode)
     • CRF 16 — visually lossless for flat vector-ish content
     • BT.709 colour so the blacks match the page's #000 in Safari and Chrome */
Config.setVideoImageFormat("jpeg");
Config.setJpegQuality(100);
Config.setCrf(16);
Config.setColorSpace("bt709");
Config.setChromiumDisableWebSecurity(false);
Config.setOverwriteOutput(true);
