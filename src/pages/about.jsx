import * as React from "react";

export default function About() {
  return (
    <div className="page">
      <h1 className="title">about this site</h1>
      <p>
        hi. jacob frey (aka pee pee poo poo bitch boy) is the mayor of
        minneapolis.
      </p>
      <p>
        this site catalogs some (but not all, there&apos;s too much to keep
        track of) of the stupid shit that he says.
      </p>
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/kanadgupta"
        >
          @kanadgupta
        </a>{" "}
        built this with{" "}
        <a target="_blank" rel="noreferrer" href="https://reactjs.org/">
          react
        </a>{" "}
        and{" "}
        <a target="_blank" rel="noreferrer" href="https://vitejs.dev/">
          vite
        </a>
        . it was prototyped on{" "}
        <a target="_blank" rel="noreferrer" href="https://glitch.com/">
          glitch
        </a>
        . you can find the source code{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/kanadgupta/jacob-frey-soundboard"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}
