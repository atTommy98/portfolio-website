import ME from "../assets/ME.png";
import Image from "next/image";

export default function Intro({ id }: SectionProps) {
  return (
    <section data-section className="section-layout max-w-full p-0 h-[92.5vh]">
      <div className="flex w-full h-full">
        <div className="relative w-1/2 h-full">
          <Image
            alt="Me absailing"
            src={ME}
            className="w-full max-w-[400px] sticky top-[10vh]"
          />
        </div>
        <div className="w-1/2 mr-4 flex flex-col items-start justify-center">
          <h2 className="font-bold uppercase">I&apos;m Tommy</h2>
          <h2 className="font-bold uppercase mt-8 text-blue-500">
            FULL STACK WEB DEVELOPER
          </h2>
          <p className="subtext mb-8">React, Node, TypeScript</p>

          <div className="w-fit flex items-center">
        <ul className="flex items-center">
          <li className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-blue-500"
              href="https://github.com/atTommy98"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Github (Opens in new tab)"
              title="Github">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </li>

          <li className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-blue-500"
              href="https://www.linkedin.com/in/tommy-holt98/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Linked In (Opens in new tab)"
              title="Linked In">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
          </li>

          <li className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-blue-500"
              href="mailto: tommy_holt@icloud.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Email link"
              title="Email me">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 8 6"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true">
                <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
              </svg>
            </a>
          </li>

          <li className="mr-5 text-xs shrink-0">
            <a
              className="block hover:text-blue-500"
              href="https://wa.me/447944187708"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Whatsapp"
              title="Whatsapp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
        </div>
      </div>
    </section>
  );
}
