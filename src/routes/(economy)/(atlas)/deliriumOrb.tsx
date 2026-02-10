import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/(atlas)/deliriumOrb')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/deliriumOrb"!</div>
}
