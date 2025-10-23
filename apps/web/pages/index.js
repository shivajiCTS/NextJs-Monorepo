import { hello } from "../../../packages/utils/dist"
export default function Home() {
  return (
    <div>
      <h1>Web app</h1>
      <p>This is the web app in the monorepo. {hello()}</p>
    </div>
  )
}
