import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const generateConsultationResponse = async (
  userMessage: string,
  history: { role: 'user' | 'model'; text: string }[] = []
): Promise<string> => {
  if (!apiKey) {
    return "APIキーが設定されていないため、現在AIアシスタントをご利用いただけません。";
  }

  try {
    const systemInstruction = `
      あなたは「株式会社 匠塗装（たくみとそう）」のベテラン塗装コンサルタントAIです。
      以下の指針に従って、ウェブサイトの訪問者からの質問に答えてください。

      1. **専門性**: 外壁塗装、屋根塗装、防水工事に関する専門的な知識を、一般の方にもわかりやすく説明してください。
      2. **誠実さ**: 押し売りはせず、お客様の家の状態に最適なアドバイスを中立的な立場で行ってください。
      3. **トーン**: 丁寧で落ち着いた、信頼感のある日本語（です・ます調）を使ってください。
      4. **誘導**: 詳細な見積もりや現地調査が必要な場合は、サイト内の「お問い合わせフォーム」または電話連絡をお勧めしてください。
      5. **回答長**: チャットボックスに適した、簡潔な（200文字以内程度）回答を心がけてください。

      想定される質問:
      - 塗装の費用相場は？
      - どんな塗料がいいの？
      - 工事期間はどれくらい？
    `;

    // Format history for context (simplified context window)
    // In a real app, we would use the chat session features properly,
    // but for a simple widget, a single turn with history context in prompt is often sufficient or using the chat method.
    // Let's use the chat method for best practice.

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
        thinkingConfig: { thinkingBudget: 0 } // Speed over deep reasoning for simple chat
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "申し訳ありません。うまく回答を生成できませんでした。もう一度お試しください。";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "申し訳ありません。現在アクセスが集中しており応答できません。後ほど再度お試しいただくか、お問い合わせフォームをご利用ください。";
  }
};