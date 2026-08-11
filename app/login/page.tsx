import LoginClient from "@/components/LoginClient";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginClient />
    </Suspense>
  );
}
