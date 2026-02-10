import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/(equipment_gems)/accessory')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/accessory"!</div>
}
