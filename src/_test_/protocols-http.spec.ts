import { InvalidArgument } from "../errors/invalid-arg";
import { UrlLogin, UrlUser } from "../protocols/protocols-http";

describe("Protocols Http and Querys", () => {
  test("Url login ", () => {
    const parsedUrl = UrlLogin.parseUrl("http://localhost:3000/login");

    expect(parsedUrl.href).toBe("http://localhost:3000/login");
    expect(parsedUrl.port).toBe("3000");
  });

  test("Response Query", () => {
    const parseUrl = UrlLogin.parseUrl(
      "http://localhost:3000/login?user=user&password=password"
    );
    const expectAuth = {
      user: "user",
      password: "password",
    };
    expect(parseUrl.query).toEqual(expectAuth);
  });

  test("Url user", () => {
    const parseUrl = UrlUser.parseUrl("http://localhost:3000/user");

    expect(parseUrl.href).toBe("http://localhost:3000/user");
    expect(parseUrl.port).toBe("3000");
  });

  test("Response Query User", () => {
    const parseUrl = UrlUser.parseUrl(
      "http://localhost:3000/user?user=user&password=password&name=name&lastname=lastname"
    );

    const expectAuth = {
      user: "user",
      password: "password",
      name: "name",
      lastname: "lastname",
    };
    expect(parseUrl.query).toEqual(expectAuth);
  });

  test("Invalid Url", () => {
    function expectError(): void {
      UrlLogin.parseUrl("");
    }
    expect(expectError).toThrowError(new InvalidArgument(''));
  });
});
