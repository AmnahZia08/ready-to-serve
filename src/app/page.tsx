import Container from "./components/container";
import ServiceBtns from "./components/home-page/service-btn";
import { poppins } from "./utils/fonts";

export default function Home() {
  return (
    <main className={poppins}>
      <Container className="block relative top-[60px]">
        <div className="bg-black md:bg-hero md:bg-contain bg-no-repeat w-full md:h-[530px]">
          <div className="h-full lg:w-1/2 flex justify-center items-center min-h-96">
            <div>
              <p className="text-white text-4xl font-semibold">
                Fastest delivery in UK
              </p>
              <p className="text-xl text-white mt-3">
                Enjoy quality and speed with the best delivery in the UK!
              </p>
              <ServiceBtns />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
