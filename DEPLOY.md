Deploy notes for Vercel
=======================

1) Environment variables

- Set `MONGODB_URI` in Vercel project settings (Production & Preview). Example:
  `mongodb+srv://<user>:<password>@cluster0.xxxxxx.mongodb.net/ecommerceDB?retryWrites=true&w=majority`

2) Uploads and file storage

- This project now uses Multer `memoryStorage` and stores uploaded images as base64 data URLs in MongoDB.
- Serverless platforms (Vercel) don't provide persistent writable disk. For production, switch to external storage (S3, Cloud Storage) and save only URLs in the DB.

3) Vercel config

- `vercel.json` contains:

```
{
  "version": 2,
  "functions": {
    "api/**/*.js": { "runtime": "nodejs18.x" }
  }
}
```

4) Deploy commands (CLI)

```
npm i -g vercel
vercel login
vercel --prod
```

5) Local dev

```
npm run dev
```

6) Recommended improvements

- Move large images to S3 and store secure URLs in DB.
- Add rate-limiting, authentication, and validation for uploads.
- Use connection reuse for MongoDB to reduce cold-start overhead in serverless functions.
