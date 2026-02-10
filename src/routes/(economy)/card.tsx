import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/card')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/card"!</div>
}
