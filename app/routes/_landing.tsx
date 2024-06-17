import { Outlet } from '@remix-run/react';

export default function LandingLayoutRoute() {
  return (
    <div>
      <h1>Landing Layout</h1>
      <Outlet />
    </div>
  )
}