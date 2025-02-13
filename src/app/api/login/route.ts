import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Simulação de usuário cadastrado no "banco"
    const fakeUser = {
      id: 1,
      name: "Admin",
      email: "admin@example.com",
      password: "123456", // ⚠️ Nunca armazene senhas em texto puro na vida real
    };

    // Verifica se as credenciais são válidas
    if (email === fakeUser.email && password === fakeUser.password) {
      return NextResponse.json({ id: fakeUser.id, name: fakeUser.name, email: fakeUser.email });
    }

    return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });

  } catch (error) {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
