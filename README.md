# 😊 Analýza emocí z tváře - Claude AI

Webová aplikace pro analýzu emocí na základě výrazu tváře pomocí Claude AI.

## ✨ Funkce

- **AI analýza emocí**: Využití Claude 3.5 Sonnet pro detekci emocí z tváře
- **Detailní zpráva**: Primární emoce, sekundární emoce a indikátory
- **Vizuální náhled**: Preview nahraného obrázku před analýzou
- **Drag & Drop**: Snadné nahrání fotografií přetažením
- **Bezpečné API**: API klíč uložen pouze lokálně v prohlížeči
- **Responzivní design**: Funguje na všech zařízeních

## 🚀 Jak používat

1. **Otevřete aplikaci**: Otevřete [https://miloscermak.github.io/emoce/](https://miloscermak.github.io/emoce/) nebo lokálně `index.html`
2. **Zadejte API klíč**: Získejte Claude API klíč na [console.anthropic.com](https://console.anthropic.com/) a zadejte ho do formuláře
3. **Nahrajte fotografii**: Přetáhněte fotografii tváře do upload oblasti nebo klikněte pro výběr souboru
4. **Analyzujte**: Klikněte na tlačítko "Analyzovat emoce"
5. **Prohlédněte si výsledky**:
   - Primární emoce s úrovní jistoty
   - Detailní analýza výrazu tváře
   - Indikátory jednotlivých rysů (oči, ústa, obočí, atd.)

## 🛠️ Technologie

- **HTML5**: Struktura aplikace
- **CSS3**: Moderní a responzivní design
- **JavaScript (ES6+)**: Logika aplikace a komunikace s API
- **Claude API**: Anthropic Claude 3.5 Sonnet pro analýzu obrázků
- **Fetch API**: Asynchronní komunikace s Claude API

## 📋 Požadavky

- Moderní webový prohlížeč s podporou Fetch API
- Připojení k internetu
- **Claude API klíč** (získejte na [console.anthropic.com](https://console.anthropic.com/))

## 🎯 Použití - ideální pro:

- Výzkum emocí a výrazů tváře
- Analýzu zákaznických reakcí
- Studium lidských emocí
- Testování AI schopností rozpoznávání emocí
- Vzdělávací účely v psychologii
- UX testing a research

## 📝 Příklad použití

1. Získejte Claude API klíč na console.anthropic.com
2. Nahrajte fotografii tváře (ideálně přední pohled s dobře viditelným obličejem)
3. Klikněte na "Analyzovat emoce"
4. Claude AI vám poskytne detailní analýzu rozpoznaných emocí

## 🎨 Rozpoznávané emoce

Aplikace dokáže rozpoznat širokou škálu emocí:
- 😊 Radost / Štěstí
- 😢 Smutek
- 😠 Vztek
- 😨 Strach
- 😲 Překvapení
- 🤢 Znechucení
- 😐 Neutrální
- 🤔 Zamyšlení
- 😰 Úzkost
- 😞 Zklamání
- A další...

## 🔒 Bezpečnost a soukromí

- **API klíč**: Váš Claude API klíč je uložen pouze v localStorage vašeho prohlížeče
- **Zpracování dat**: Fotografie se odesílají přímo do Anthropic API přes HTTPS
- **Bez ukládání**: Žádné fotografie ani data nejsou ukládány na server
- **Lokální běh**: Aplikace běží kompletně ve vašem prohlížeči
- **Bez cookies**: Aplikace nepoužívá cookies ani tracking

## 🎨 Barevná paleta

Aplikace používá moderní gradientovou paletu:
- Primární barva: #667eea
- Sekundární barva: #764ba2
- Accent barvy: #f093fb, #4facfe, #43e97b, #fa709a, #fee140, #30cfd0

## 📊 Co aplikace analyzuje

### Primární emoce
Hlavní emoce, kterou osoba vyjadřuje, s úrovní jistoty (vysoká/střední/nízká).

### Detailní analýza
Podrobný popis výrazu tváře a pozorovaných emočních signálů.

### Indikátory emocí
Analýza jednotlivých rysů tváře:
- **Oči**: Tvar, otevřenost, směr pohledu
- **Ústa**: Úsměv, grimy, otevřenost
- **Obočí**: Pozice, tvar, napětí
- **Celková tvář**: Svalové napětí, symetrie

### Sekundární emoce
Seznam dalších možných emocí, pokud jsou přítomny.

## 📄 Licence

Tento projekt je k dispozici pro volné použití.

## 🤝 Přispění

Máte nápad na vylepšení? Neváhejte vytvořit pull request nebo issue!

## ⚠️ Poznámka

Analýza emocí je založena na viditelných výrazech tváře a nemusí vždy odpovídat skutečným pocitům člověka. Aplikace slouží pouze pro informační a vzdělávací účely.

---

Vytvořeno s pomocí Claude AI 🤖
