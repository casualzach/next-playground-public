import Head from "next/head";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>how to stop scroll when sidemenu?</title>
        <meta name="description" content="some content" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
      <main className="flex flex-auto w-full justify-center">
        <div className="w-full text-center">
          <div className="bg-slate-300 h-[200px] m-5"> Some content </div>
          <div className="bg-slate-300 h-[200px] m-5"> Some content </div>
          <div className="bg-slate-300 h-[200px] m-5"> Some content </div>
          <div className="bg-slate-300 h-[200px] m-5"> Some content </div>
          <div className="bg-slate-300 h-[200px] m-5"> Some content </div>
        </div>
      </main>
    </>
  );
}
