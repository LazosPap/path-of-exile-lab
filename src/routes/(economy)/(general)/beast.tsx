import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/(general)/beast')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/beast"!</div>
}
