// Vercel Serverless Function pro proxy Anthropic API
export default async function handler(req, res) {
  // Povolit CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Odpověď na preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Pouze POST metoda
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metoda není povolena' });
  }

  try {
    const { apiKey, image, imageType } = req.body;

    // Validace vstupů
    if (!apiKey || !image || !imageType) {
      return res.status(400).json({ error: 'Chybí povinné parametry' });
    }

    // Volání Anthropic API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5-20250929',
        max_tokens: 1024,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image',
                source: {
                  type: 'base64',
                  media_type: imageType,
                  data: image
                }
              },
              {
                type: 'text',
                text: `Analyzuj tuto fotografii tváře a urči emoce, které osoba vyjadřuje.

Proveď detailní analýzu a poskytni odpověď v následujícím formátu JSON:

{
  "primary_emotion": "název primární emoce (např. radost, smutek, vztek, strach, překvapení, znechucení, neutrální)",
  "confidence": "vysoká/střední/nízká",
  "detailed_analysis": "Podrobný popis výrazu tváře a pozorovaných emočních signálů (2-3 věty v češtině)",
  "indicators": [
    {
      "feature": "název rysu (např. oči, ústa, obočí, celková tvář)",
      "description": "popis tohoto rysu v češtině",
      "emotion_signal": "jakou emoci tento rys signalizuje"
    }
  ],
  "secondary_emotions": ["seznam dalších možných emocí, pokud jsou přítomny"],
  "notes": "další poznámky nebo kontext (volitelné, v češtině)"
}

Odpověz POUZE validním JSON objektem bez dalšího textu.`
              }
            ]
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return res.status(response.status).json({
        error: errorData.error?.message || `API chyba: ${response.status} ${response.statusText}`
      });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error('Proxy error:', error);
    return res.status(500).json({
      error: `Chyba serveru: ${error.message}`
    });
  }
}
