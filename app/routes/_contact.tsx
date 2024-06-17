import { Outlet } from '@remix-run/react';

export default function ContactLayoutRoute() {
  return (
    <div>
      <h1>Contact Layout</h1>
      <Outlet />
    </div>
  )
}