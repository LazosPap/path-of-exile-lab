import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/(equipment_gems)/bases')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/bases"!</div>
}
