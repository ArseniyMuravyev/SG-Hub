import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl text-bold text-sky-300">SG Hub</h1>
      <Image src="/logo_transparent.png" alt="log" width={220} height={220} />
    </main>
  );
}
