import { LinksFunction } from '@remix-run/node';
import stylesheet from '~/tailwind.css'

export const links: LinksFunction = () => {
  return [{
    rel: 'stylesheet',
    href: stylesheet,
  }]
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Hi there, Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial, lets go!
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial, you'll love this.
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs, do not forget to your coffee!
          </a>
        </li>
      </ul>
    </div>
  );
}
