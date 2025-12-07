# Nasazení webu prakticky-lekar-sro.cz

## Předpoklady

- Node.js 18+
- MongoDB databáze (doporučeno MongoDB Atlas)
- Vercel účet (nebo jiný hosting s podporou Next.js)

## 1. Příprava databáze (MongoDB Atlas)

1. Vytvořte účet na [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Vytvořte nový cluster (Free tier M0 stačí)
3. V sekci "Database Access" vytvořte nového uživatele
4. V sekci "Network Access" povolte přístup z Vercelu (0.0.0.0/0)
5. Zkopírujte connection string z "Connect" → "Connect your application"

## 2. Nasazení na Vercel

### Varianta A: Přes Vercel CLI

```bash
# Instalace Vercel CLI
npm i -g vercel

# Přihlášení
vercel login

# Nasazení
vercel

# Pro produkci
vercel --prod
```

### Varianta B: Přes GitHub

1. Nahrajte projekt na GitHub
2. Připojte repozitář na [Vercel](https://vercel.com)
3. Vercel automaticky detekuje Next.js projekt

### Nastavení environment variables na Vercel

V Vercel Dashboard → Project Settings → Environment Variables nastavte:

```
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/prakticky-lekar
PAYLOAD_SECRET=vygenerujte-bezpecny-klic-min-32-znaku
NEXT_PUBLIC_SITE_URL=https://www.prakticky-lekar-sro.cz
```

Pro vygenerování bezpečného klíče:
```bash
openssl rand -base64 32
```

## 3. Připojení vlastní domény

1. V Vercel Dashboard → Project → Settings → Domains
2. Přidejte doménu `prakticky-lekar-sro.cz` a `www.prakticky-lekar-sro.cz`
3. Nastavte DNS záznamy u registrátora domény podle pokynů Vercelu

### DNS záznamy (příklad pro Wedos/Forpsi):

```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

## 4. První spuštění - vytvoření admin účtu

1. Otevřete `https://vas-projekt.vercel.app/admin`
2. Payload CMS vás vyzve k vytvoření prvního admin účtu
3. Zadejte email a bezpečné heslo

## 5. Konfigurace obsahu

Po přihlášení do admin rozhraní (`/admin`) můžete:

- **Site Settings**: Upravit kontaktní údaje, ordinační dobu, pojišťovny
- **Announcement**: Nastavit oznámení (např. "Nepřijímáme nové pacienty")
- **Media**: Nahrát obrázky (logo, fotky ordinace, portréty)
- **Appointments**: Spravovat přijaté objednávky

## Lokální vývoj

```bash
# Instalace závislostí
npm install

# Spuštění MongoDB lokálně (nebo použijte Atlas)
# Vyžaduje nainstalovaný MongoDB

# Spuštění dev serveru
npm run dev

# Build pro produkci
npm run build
npm start
```

## Struktura projektu

```
src/
├── app/
│   ├── (frontend)/          # Veřejné stránky
│   ├── (payload)/admin/     # CMS admin rozhraní
│   └── api/
│       ├── [...payload]/    # Payload API
│       └── appointments/    # API pro objednávky
├── components/              # React komponenty
├── collections/             # Payload CMS kolekce
└── globals/                 # Payload CMS globals
```

## Údržba

### Aktualizace závislostí
```bash
npm update
```

### Záloha databáze
MongoDB Atlas poskytuje automatické zálohy. Pro manuální zálohu:
```bash
mongodump --uri="mongodb+srv://..." --out=./backup
```

## Podpora

V případě problémů kontaktujte vývojáře nebo vytvořte issue na GitHub repozitáři.
