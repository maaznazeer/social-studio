import type { Metadata } from "next";
import CookiesPolicy from "@/components/CookiesPolicy";

export const metadata: Metadata = {
  title: "Cookies Policy - Social-Light Studio",
  description: "Cookies Policy for Social-Light Studio",
};

export default function CookiesPage() {
  return <CookiesPolicy />;
}
