import Link from "next/link";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {

   const session = await getServerSession()
  
  return (
    <main>
      <section className="  px-0">
        {/*PC*/}
      <div
        className="md:h-[600px] sm:h-[300] hidden bg-fixed bg-center md:bg-top bg-cover sm:flex items-center justify-center "
        style={{ backgroundImage: "url('/SaudeTotalHome.jpg')" }}
      >
        <Image src={"/Logo Saude Total.svg"} alt="logo" width={400} height={400}  />
      </div>
      {/*Mobile*/}
      <div
      className="h-[300] sm:hidden bg-fixed bg-right bg-cover  flex items-end justify-start"
      style={{ backgroundImage: "url('/SaudeTotalHomeMobile.png')" }}
    >
        <div className="space-y-2 container1 justify-center flex-col flex text-white pl-6 font-black">
          <Image src={"/Logo Saude Total.svg"} alt="logo" width={200} height={200}  />
          <h1>Transformando a Gestão da Saúde com Tecnologia</h1>
        </div>
      </div>
        <div className="space-y-6 sm:h-[300px] h-[200px] text-center justify-center flex-col flex border-b-2 px-[5%] md:px-[10%] ">
          <h1 className="hidden sm:block">Transformando a Gestão da Saúde com Tecnologia</h1>
          <p>O Saúde Total é uma plataforma desenvolvida para modernizar e otimizar o agendamento de consultas e a comunicação entre pacientes e profissionais da saúde.</p>
        </div>
      </section>
      <section className="container1">
        <h2>Agendamento online simplificado</h2>
        <p>permitindo que pacientes escolham horários disponíveis com poucos cliques.</p>
      </section>
      <section className="container1">
        <h2>Histórico de agendamentos</h2>
        <p>facilitando o acompanhamento de atendimentos anteriores e futuras marcações.</p>
      </section>
      <section className="px-[5%] md:px-[10%]">
        <h2>Suporte em tempo real</h2>
        <p>conectando pacientes à equipe administrativa por meio de um chat integrado</p>
      </section>
    </main>
  );
}
