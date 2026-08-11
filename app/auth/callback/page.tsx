"use client";

import { API_BASE_URL } from "@/lib/utils";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CallbackHandler() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");

    if (!code) {
      router.push("/login?error=auth_failed");
      return;
    }

    // The Google OAuth redirect only carries a short-lived, single-use
    // code — never the token itself — so it never ends up in browser
    // history, server access logs, or analytics. Exchange it here for the
    // real token.
    fetch(`${API_BASE_URL}/auth/exchange`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Exchange failed");
        return res.json();
      })
      .then((data: { access_token: string; user: unknown }) => {
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Force a page reload to update auth state
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error exchanging auth code:", error);
        router.push("/login?error=auth_failed");
      });
  }, [searchParams, router]);

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Completing sign in...</p>
      </div>
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      }
    >
      <CallbackHandler />
    </Suspense>
  );
}
