import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/(equipment_gems)/armour')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/armour"!</div>
}
