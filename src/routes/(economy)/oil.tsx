import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(economy)/oil')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(economy)/oil"!</div>
}
