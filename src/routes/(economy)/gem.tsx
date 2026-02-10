import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/gem')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/gem"!</div>
}
