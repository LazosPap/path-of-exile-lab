import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/armour')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/armour"!</div>
}
