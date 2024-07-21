import Link from "next/link";
import Image from "next/image";

const Landing = () => {
  return (
    <>
      <section
        id="landing"
        className="landing-background relative z-10 grid place-items-center min-h-screen bg-black text-white"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <Image className="p-10 lg:p-14 heroImage" src="/hero.png" alt="landing" width={500} height={300} />
            <div className="landingForm justify-center">
              <div className="justify-center">
                <h2 className="text-4xl font-bold mb-1 text-[#923c4a] lg:text-5xl">Bangladesh</h2>
                <h2 className="maintitle text-[#923c4a] mb-3 text-2xl font-bold lg:text-3xl">
                  Is under state repression, violence, and extrajudicial killing
                </h2>
                <div className="mb-5 text-base leading-relaxed text-white sm:text-lg md:text-xl max-w-3xl ">
                  <ul className="mb-3 text-base leading-relaxed sm:text-lg md:text-xl max-w-3xl list-disc list-inside">
                    <li>200+ students and civilians killed for protesting against the 56% reserved quota in civil service jobs.</li>
                    <li>Telecommunication blockage for over 72 hours and counting.</li>
                    <li>Shoot-on-sight order during indefinite curfew.</li>
                  </ul>
                  The Bangladesh Awami League (BAL), in power for nearly two decades, leveraged liberation war sentiment and reserved <b className="text-[#923c4a]">one-third of government jobs for war-hero families</b>,
                  sparking protests over discrimination amid rising unemployment. Nationwide unrest followed Premier Sheikh Hasina&apos;s labelling of protestors
                  as <b className="text-[#923c4a]">national traitors</b>, resulting in <b className="text-[#923c4a]">hundreds killed</b> and thousands injured by the police and the pro-BAL student wing activists, leading to
                  a <b className="text-[#923c4a]">shoot-on-sight order</b>, indefinite <b className="text-[#923c4a]">curfew</b>, and internet <b className="text-[#923c4a]">outage</b>. Disregarding the people&apos;s voices, the ruling party is proven <b className="text-[#923c4a]">zero accountable</b> for the public good and should step down.
                  The citizens of Bangladesh deserve justice, equality, accountability, and prosperity.
                  <p className="mt-5 font-bold text-[#923c4a]">
                    #SaveBangladeshiStudents | #StopKillingStudents | #StepDownHasina
                  </p>
                  <p className="mt-1 text-[#585858]">
                    - Leeds Bangladesh Community
                  </p>
                  <p className="mt-5 mb-5 text-base leading-relaxed text-white sm:text-lg md:text-xl max-w-3xl">
                    Sign the petition below to support our cause and demand justice.
                  </p>
                </div>
                <Link href="https://chng.it/PstRX7qTrx">
                  <button
                    type="button"
                    className="w-full rounded bg-[#923c4a] px-6 py-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-red-950 hover:text-[#white] focus:bg-white focus:text-[#923c4a] focus:outline-none focus:ring-2 focus:ring-white active:bg-[#923c4a] active:text-white"
                  >
                    Sign the Petition
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
