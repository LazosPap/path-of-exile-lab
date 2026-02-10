import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/scarab')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/scarab"!</div>
}
