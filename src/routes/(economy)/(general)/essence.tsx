import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/(general)/essence')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/essence"!</div>
}
