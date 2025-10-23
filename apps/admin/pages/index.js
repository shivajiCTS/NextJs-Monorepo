import { hello } from "../../../packages/utils/dist"
export default function AdminHome() {
  return (
    <div>
      <h1>Admin app</h1>
      <p>This is the admin app in the monorepo.</p>
      <p>{hello()}</p>
    </div>
  )
}
