import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/accessory')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/accessory"!</div>
}
