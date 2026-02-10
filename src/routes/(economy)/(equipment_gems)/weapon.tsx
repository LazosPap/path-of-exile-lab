import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/(equipment_gems)/weapon')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/weapon"!</div>
}
