import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/deliriumOrb')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/deliriumOrb"!</div>
}
