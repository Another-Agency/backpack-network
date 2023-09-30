import { cache } from "react";

export const getBaseUrl = cache(() =>
  process.env.VERCEL_URL
    ? `https://backpack.network`
    : `http://localhost:${process.env.PORT ?? 3000}`
);
