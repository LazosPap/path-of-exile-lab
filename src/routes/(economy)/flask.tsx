import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/flask')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/flask"!</div>
}
