import { Footer, Header, Sidebar } from "../../components";
import { Feed } from "./Feed";

export function Home() {
  return (
    <>
      <Header />
      <div class="corpo">
        <Feed />
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}
