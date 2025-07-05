import { lazy } from "react";

export const LazyUserDetail = lazy(() => {
  // emulate network/code-split latency
  return new Promise<typeof import("./UserDetail")>((resolve, reject) =>
    setTimeout(() => {
      if (Math.random() > 0.5) reject(new Error("Something failed."));
      resolve(import("./UserDetail"));
    }, 800)
  );
});
