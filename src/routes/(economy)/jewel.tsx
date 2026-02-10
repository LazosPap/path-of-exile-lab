import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/jewel')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/jewel"!</div>
}
