import Image from "next/image";
import SimpleMap from "@/components/SimpleMap";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SimpleMap />
    </main>
  );
}
