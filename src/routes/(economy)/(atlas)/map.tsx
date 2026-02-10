import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/(atlas)/map')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/map"!</div>
}
