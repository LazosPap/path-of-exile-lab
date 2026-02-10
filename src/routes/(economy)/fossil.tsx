import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/fossil')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/fossil"!</div>
}
