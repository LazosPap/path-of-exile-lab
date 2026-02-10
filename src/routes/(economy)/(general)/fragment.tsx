import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/(general)/fragment')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/fragment"!</div>
}
