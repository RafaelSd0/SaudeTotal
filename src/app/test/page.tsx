import LogOutBtn from "@/components/LogOutBtn";
import { getServerSession } from "next-auth";

export default async function page() {

  const session = await getServerSession()
  if (!session ) return ('/')
    
  return (
    <div>
      <h1>page</h1>
      <LogOutBtn/>
    </div>
  );
}