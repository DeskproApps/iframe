import { assertEquals } from "jsr:@std/assert";
import { Context } from "jsr:@deskpro/app-sdk-test@^0.0.8";
import getUrlFromContext from "../../src/utils/getUrlFromContext.ts";
import { Settings } from "../../src/types/deskpro.ts";

Deno.test("getUrlFromContext should return undefined when no iframe_url", () => {
  const context = {
    settings: {},
    data: {},
  } as unknown as Context<Settings>;

  assertEquals(getUrlFromContext(context), undefined);
});

Deno.test("getUrlFromContext should return unmodified url when no placeholders", () => {
  const context = {
    settings: {
      iframe_url: "https://example.com",
    },
    data: {},
  } as unknown as Context<Settings>;

  assertEquals(getUrlFromContext(context), "https://example.com");
});

Deno.test("getUrlFromContext should replace simple placeholders with context values", () => {
  const context = {
    settings: {
      iframe_url: "https://example.com/{{user.id}}/ticket/{{ticket.id}}",
    },
    data: {
      user: {
        id: "456",
      },
      ticket: {
        id: "789",
      },
    },
  } as unknown as Context<Settings>;

  assertEquals(
    getUrlFromContext(context),
    "https://example.com/456/ticket/789",
  );
});

Deno.test("getUrlFromContext should handle multiple same placeholders", () => {
  const context = {
    settings: {
      iframe_url: "https://{{user.domain}}/{{user.id}}/{{user.id}}",
    },
    data: {
      user: {
        id: "123",
        domain: "example.com",
      },
    },
  } as unknown as Context<Settings>;

  assertEquals(
    getUrlFromContext(context),
    "https://example.com/123/123",
  );
});

Deno.test("getUrlFromContext should handle missing values by replacing with empty string", () => {
  const context = {
    settings: {
      iframe_url: "https://example.com/{{nonexistent}}/{{also.nonexistent}}",
    },
    data: {
      user: {
        id: "123",
      },
    },
  } as unknown as Context<Settings>;

  assertEquals(
    getUrlFromContext(context),
    "https://example.com//",
  );
});

Deno.test("getUrlFromContext should handle nested object placeholders", () => {
  const context = {
    settings: {
      iframe_url: "https://{{org.subdomain}}.example.com/{{user.role.id}}",
    },
    data: {
      org: {
        subdomain: "test",
      },
      user: {
        role: {
          id: "admin",
        },
      },
    },
  } as unknown as Context<Settings>;

  assertEquals(
    getUrlFromContext(context),
    "https://test.example.com/admin",
  );
});

Deno.test("getUrlFromContext should handle complex URLs with mixed placeholders", () => {
  const context = {
    settings: {
      iframe_url:
        "https://{{org.domain}}/users/{{user.id}}?ticket={{ticket.id}}&role={{user.role}}",
    },
    data: {
      org: {
        domain: "company.com",
      },
      user: {
        id: "usr-123",
        role: "admin",
      },
      ticket: {
        id: "tck-456",
      },
    },
  } as unknown as Context<Settings>;

  assertEquals(
    getUrlFromContext(context),
    "https://company.com/users/usr-123?ticket=tck-456&role=admin",
  );
});
