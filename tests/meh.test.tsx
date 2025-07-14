import { assert } from "jsr:@std/assert";
import { DeskproProvider } from "@deskpro/app-sdk-react-test";

Deno.test("debug", () => {
  const a = <DeskproProvider<never> context={null}>Stuff</DeskproProvider>;

  assert(a !== null, "a should not be null");
})