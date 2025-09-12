import type { Metadata } from "next";
import TermsOfService from "@/components/Terms/TermsOfService";

export const metadata: Metadata = {
  title: "Terms of Service - Social-Light Studio",
  description: "Terms of Service for Social-Light Studio",
};

export default function TermsPage() {
  return <TermsOfService />;
}
