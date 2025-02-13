import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function page() {

  const session = await getServerSession()
  if (!session ) redirect('/')
    
  return (
    <div>
      <h1>page</h1>
    </div>
  );
}