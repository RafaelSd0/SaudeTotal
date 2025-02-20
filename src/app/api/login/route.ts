import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    if (!req.body) {
      return NextResponse.json({ error: "Corpo da requisição vazio" }, { status: 400 });
    }

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
      return NextResponse.json(
        { id: fakeUser.id, name: fakeUser.name, email: fakeUser.email },
        { status: 200 }
      );
    }

    return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });

  } catch (error) {
    console.error("Erro no servidor:", error); // Log para depuração
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}