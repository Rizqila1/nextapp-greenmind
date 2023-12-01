import LandingPage from "./(pages)/(landingpage)/page";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  return (
    <main>
      <section className="px-24">
        <LandingPage />
      </section>
    </main>
  );
}

library.add(fab, fas, far);
