import Link from "next/link";
import { getServerSession } from "next-auth";

export default async function Home() {

   const session = await getServerSession()
  
  return (
    <main>
      <section>
        <h1>Chegou a hora de ficar Saudavel</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, inventore quidem. Ipsam numquam ipsum temporibus dolor quasi architecto odit hic iusto sunt, eveniet suscipit nemo commodi eligendi nulla nam obcaecati.</p>
        {!session ? <Link href={"/login"}>login</Link> : <Link href={"/test"}>test</Link>}
      </section>
    </main>
  );
}
