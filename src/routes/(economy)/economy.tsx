import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/economy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/economy"!</div>
}
