import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/(atlas)/uniqueMap')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/uniqueMap"!</div>
}
