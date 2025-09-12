import QueryProvider from "@/components/QueryProvider";
import LandingPage from "@/components/LandingPage/LandingPage";

export default function Home() {
  return (
    <QueryProvider>
      <LandingPage />
    </QueryProvider>
  );
}