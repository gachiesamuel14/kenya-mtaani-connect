# Kenya Mtaani Connect

Location-based matchmaking website for people in Kenya.

## Features (MVP)
- User profiles with photos, bio, age, interests, county
- Location-based discovery (GPS / county filter)
- Swipe / Like / Match UI
- Basic chat interface (mock)
- Safety report button

## Tech Stack
- Frontend: React + Vite + Tailwind CSS
- Hosting: Netlify
- Backend (recommended next): Supabase (Auth, Postgres, Realtime, Storage)
- Payments: M-Pesa (Daraja API)

## Local Development
```bash
npm install
npm run dev
```

## Deploy to Netlify
Connect this GitHub repo to Netlify. Build command: `npm run build`, Publish directory: `dist`.

## Kenya Localization
- Counties: Nairobi, Mombasa, Kisumu, Kiambu, Nakuru, etc.
- Sheng support in UI
- Modes: Student, Professional, Church

## Next Steps
1. Integrate Supabase for auth & database
2. Implement real GPS matching
3. Add real-time chat
4. Photo uploads to Supabase Storage
5. M-Pesa premium features
6. Report / block system

**Note:** This is an MVP skeleton. Full production requires backend, moderation, and compliance with Kenyan laws.