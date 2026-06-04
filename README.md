# Yunuo Wu Academic Homepage

Personal academic website built with Next.js, TypeScript, and Tailwind CSS.

## Run Locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

If development mode has file-watching issues on macOS, use the stable preview
command instead:

```bash
npm run preview
```

Then open:

```text
http://localhost:3001
```

To stop an old preview and open the latest version:

```bash
npm run refresh
```

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Research Materials

The website currently points to:

```text
public/files/master_thesis_defense.pdf
```

Place the PDF version of the master thesis defense slides at that path. PDF is
recommended because browsers can preview it reliably inside the page.

If you want to use another file name, update `filePath` in:

```text
locales/en.ts
locales/ja.ts
locales/zh.ts
```

For example:

```ts
filePath: "/files/my_master_thesis.pdf"
```

If you also want to offer the PPTX file as a download, place it in
`public/files/` and add a separate link in `components/Materials.tsx`.

## Content Updates

Most website text is managed in:

```text
locales/en.ts
locales/ja.ts
locales/zh.ts
```

The section components are in:

```text
components/
```
