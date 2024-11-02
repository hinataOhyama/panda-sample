import { css } from "../../styled-system/css";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateRows: "20px 1fr 20px",
        alignItems: "center",
        justifyItems: "center",
        minHeight: "100svh",
        padding: "80px",
        gap: "64px",
        fontFamily: "var(--font-geist-sans)",
        "--gray-rgb": "0, 0, 0",
        "--gray-alpha-200": "rgba(var(--gray-rgb), 0.08)",
        "--gray-alpha-100": "rgba(var(--gray-rgb), 0.05)",
        "--button-primary-hover": "#383838",
        "--button-secondary-hover": "#f2f2f2",
        "@media (prefers-color-scheme: dark)": {
          "--gray-rgb": "255, 255, 255",
          "--gray-alpha-200": "rgba(var(--gray-rgb), 0.145)",
          "--gray-alpha-100": "rgba(var(--gray-rgb), 0.06)",
          "--button-primary-hover": "#ccc",
          "--button-secondary-hover": "#1a1a1a",
        },
        "@media (max-width: 600px)": {
          padding: "32px",
          paddingBottom: "80px",
        },
      })}
    >
      <main
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          gridRowStart: "2",
          "@media (max-width: 600px)": {
            alignItems: "center",
          },
        })}
      >
        <Image
          className="logo"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <div
          className={css({
            display: "flex",
            gap: "16px",
            "@media (max-width: 600px)": {
              flexDirection: "column",
            },
          })}
        >
          <a
            className={css({
              appearance: "none",
              borderRadius: "128px",
              height: "48px",
              padding: "0 20px",
              border: "none",
              borderColor: "transparent",
              transition: "background 0.2s, color 0.2s, border-color 0.2s",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: "500",
              background: "var(--foreground)",
              color: "var(--background)",
              gap: "8px",
              "@media (hover: hover) and (pointer: fine)": {
                "&:hover": {
                  background: "var(--button-primary-hover)",
                  borderColor: "transparent",
                },
              },
            })}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="logo"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={css({
              appearance: "none",
              borderRadius: "128px",
              height: "48px",
              padding: "0 20px",
              border: "1px solid var(--gray-alpha-200)",
              transition: "background 0.2s, color 0.2s, border-color 0.2s",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: "500",
              "@media (hover: hover) and (pointer: fine)": {
                "&:hover": {
                  background: "var(--button-secondary-hover)",
                  borderColor: "transparent",
                },
              },
              "@media (max-width: 600px)": {
                height: "40px",
                padding: "0 16px",
                fontSize: "14px",
                minWidth: "auto",
              },
            })}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer
        className={css({
          gridRowStart: "3",
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          "@media (hover: hover) and (pointer: fine)": {
            "& a:hover": {
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            },
          },
        })}
      >
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={css({
            display: "flex",
            gap: "8px",
            alignItems: "center",
          })}
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={css({
            display: "flex",
            gap: "8px",
            alignItems: "center",
          })}
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={css({
            display: "flex",
            gap: "8px",
            alignItems: "center",
          })}
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
