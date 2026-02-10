import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/resonator')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/resonator"!</div>
}
