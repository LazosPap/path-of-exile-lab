import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/incubator')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/incubator"!</div>
}
