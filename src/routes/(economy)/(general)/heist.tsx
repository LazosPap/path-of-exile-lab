import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/(general)/heist')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/heist"!</div>
}
