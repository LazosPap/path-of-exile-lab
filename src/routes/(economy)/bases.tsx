import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/bases')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/bases"!</div>
}
