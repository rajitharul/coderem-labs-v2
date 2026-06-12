import Motion from "@/components/Motion";

/* A template (rather than the layout) hosts the motion system so it remounts
   on every navigation — animations re-initialize for the new page and are
   torn down for the old one. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Motion />
      {children}
    </>
  );
}
