import Head from "next/head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import { dbConnect } from "../middleware/mongodb";
import Commissions from "../models/commissions";

export default function Home() {
  return (
    <div className="w-screen overflow-hidden">
      <Head>
        <title>MARSian Oline Group</title>
        <meta name="description" content="Homepage for MARSian Online Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Hero />
    </div>
  );
}

export async function getServerSideProps(context) {
  dbConnect();
  const commissions = await Commissions.find({}).exec();

  return {
    props: {
      commissions: jsonify(commissions),
    },
  };
}
