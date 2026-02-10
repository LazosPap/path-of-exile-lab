import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/(equipment_gems)/jewel')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/jewel"!</div>
}
