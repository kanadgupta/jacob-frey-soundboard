import * as React from "react";

export default function About() {
  return (
    <div className="page">
      <h1 className="title">about this site</h1>
      <p>hi. this site catalogs all the stupid shit the mayor of minneapolis says.</p>
      <p>
        <a href="https://twitter.com/kanadgupta">@kanadgupta</a> built this with{" "}
        <a href="https://reactjs.org/">react</a> and{" "}
        <a href="https://vitejs.dev/">vite</a> on{" "}
        <a href="https://glitch.com/">glitch</a>.
      </p>
    </div>
  );
}
