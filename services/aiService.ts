import { OpenAI } from "openai";

const client = new OpenAI({
  baseURL: "https://router.huggingface.co/v1",
  apiKey: process.env.EXPO_PUBLIC_HF_API_KEY,
});

export async function enviarMensagemIA(mensagem: string, history: any[] = []) {
  try {
    // Mensagem de system que sempre vai entrar no começo
    const systemPrompt = {
      role: "system",
      content: `
Você é um orientador profissional conversando em um chat com o usuário. 
Seu objetivo é guiá-lo de forma contínua, natural e dinâmica.

Seu papel:
- entender os objetivos do usuário;
- identificar pontos fortes e fracos durante o diálogo;
- sugerir trilhas de aprendizagem personalizadas;
- recomendar cursos práticos;
- ajudar o usuário a montar um cronograma de estudos;
- esclarecer dúvidas técnicas ou de carreira;
- motivar e apoiar o usuário.

Regras importantes:
- Responda de forma curta, clara e conversacional.
- Nunca entregue tudo de uma vez — vá guiando aos poucos.
- Faça perguntas de acompanhamento quando necessário.
- Use linguagem amigável e natural.
- Adapte-se sempre ao fluxo do diálogo.

Você NÃO está gerando relatórios.
Você está tendo uma conversa contínua.
      `
    };

    // Transforma o history em mensagens do modelo
    // history: [ { role: "user", content: "..."} , { role: "assistant", content: "..."} ]
    const mensagensHistorico = history.map((msg) => ({
      role: msg.role,
      content: msg.content
    }));

    // Nova mensagem do usuário
    const mensagemUsuario = {
      role: "user",
      content: mensagem
    };

    // Mensagens finais enviadas ao modelo
    const mensagens = [
      systemPrompt,
      ...mensagensHistorico,
      mensagemUsuario
    ];

    const completion = await client.chat.completions.create({
      model: "openai/gpt-oss-20b:groq",
      messages: mensagens
    });

    return completion.choices?.[0]?.message?.content || "Não consegui gerar uma resposta.";
  } catch (err) {
    console.log("ERRO IA:", err);
    return "Erro ao conversar com a IA.";
  }
}
