import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/weapon')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/weapon"!</div>
}
