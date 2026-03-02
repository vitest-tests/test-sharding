import { test } from "vitest";

test("annotated", async ({ annotate }) => {
  await annotate("attach package.json", {
    contentType: "application/json",
    path: './package.json',
  });
});
