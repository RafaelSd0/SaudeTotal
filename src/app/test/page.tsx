import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function page() {

  const session = await getServerSession()
  if (!session ) redirect('/')
    
  return (
    <div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga saepe perspiciatis debitis. Impedit deserunt fugiat quas praesentium expedita rem modi ipsum cumque id? Assumenda quasi maxime corporis fuga odio consequatur.</p>
    </div>
  );
}