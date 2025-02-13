import { Button } from "./ui/button"
import  Link  from "next/link";

const LoginBtn = () => {
  return (
    <Button className=" bg-blue-600 hover:bg-blue-500 rounded-3xl">
      <Link href={"/login"}>login</Link>
    </Button>
  );
};

export default LoginBtn;