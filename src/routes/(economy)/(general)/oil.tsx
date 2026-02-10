import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/(general)/oil')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/oil"!</div>
}
