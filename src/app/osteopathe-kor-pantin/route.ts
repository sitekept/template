import { readFile } from "node:fs/promises";
import path from "node:path";

const templatePath = path.join(
  process.cwd(),
  "public",
  "templates",
  "osteopathe-kor-pantin",
  "index.html",
);

export async function GET() {
  const html = await readFile(templatePath, "utf8");

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}
