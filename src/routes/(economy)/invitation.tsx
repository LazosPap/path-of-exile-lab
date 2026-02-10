import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/invitation')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/invitation"!</div>
}
