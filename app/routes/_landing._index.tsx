import { Link } from '@remix-run/react';

export default function LandingIndexRoute() {
  return (
    <div>
      <h1>Landing index</h1>
      <ul>
        <li><Link to='about'>About</Link></li>
        <li><Link to='contact'>Contact</Link></li>
      </ul>
    </div>
  )
}
