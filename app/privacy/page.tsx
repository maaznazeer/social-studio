import type { Metadata } from "next";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy - Social-Light Studio",
  description: "Privacy Policy for Social-Light Studio",
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
