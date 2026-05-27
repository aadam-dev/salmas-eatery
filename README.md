# Worth It Eatery

Delivery-focused marketing site for **Worth It Eatery** — Ghanaian rice, jollof, and banku in Accra. Built with Next.js 15, React 19, and Tailwind CSS v4.

**Live:** [worthiteatery.vercel.app](https://worthiteatery.vercel.app)  
**Repo:** [github.com/aadam-dev/salmas-eatery](https://github.com/aadam-dev/salmas-eatery)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL=https://worthiteatery.vercel.app` in Vercel (and locally in `.env`).

## Ordering flow

1. Customer browses `/menu` and taps **Add to cart**
2. Cart drawer collects items + delivery details (name, phone, address)
3. **Send order on WhatsApp** opens WhatsApp with a formatted order message

Configure the WhatsApp number in [`lib/site.ts`](lib/site.ts) → `orderWhatsAppNumber`.

---

## Before launch — checklist

Update [`lib/site.ts`](lib/site.ts):

- [ ] **orderWhatsAppNumber** — real WhatsApp line (digits only, e.g. `233XXXXXXXXX`)
- [ ] **Phone** — display number and `tel:` href
- [ ] **Email** — `hello@worthiteatery.com` or business email
- [ ] **Address** — kitchen / delivery base address
- [ ] **Google Maps URL**
- [ ] **Social links**
- [ ] **Opening hours**

Update [`lib/menu-data.ts`](lib/menu-data.ts) with final prices.

Replace photos in `public/images/dishes/` when available.

## Deploy (Vercel)

```bash
npx vercel link --project worthiteatery
npx vercel env add NEXT_PUBLIC_SITE_URL production
# value: https://worthiteatery.vercel.app
npx vercel --prod
```
