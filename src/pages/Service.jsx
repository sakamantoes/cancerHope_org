import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div>
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-24">
        <div class="max-w-7xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-4 text-green-700">Our Services</h2>
          <p class="text-lg text-gray-600 mb-12">
            At Cancer Hope Organization (C.H.O.), we deliver a full spectrum of
            support through every stage of the cancer journey—empowering,
            guiding, and walking beside every individual we serve.
          </p>
        </div>

        <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              Clinical Trial Access & Referral
            </h3>
            <p class="text-gray-600 text-sm">
              We guide patients in accessing relevant clinical trials and
              experimental treatments through our connected network of research
              partners.
            </p>
          </div>

          <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              Patient Navigation & Care Planning
            </h3>
            <p class="text-gray-600 text-sm">
              Our coordinators assist in managing appointments, treatment
              schedules, and long-term care goals customized for each patient.
            </p>
          </div>

          <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              Mental & Emotional Health Support
            </h3>
            <p class="text-gray-600 text-sm">
              We provide one-on-one and group counseling to help patients and
              families handle emotional stress throughout their journey.
            </p>
          </div>

          <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              Survivorship & Recovery Programs
            </h3>
            <p class="text-gray-600 text-sm">
              We assist in post-treatment rehabilitation, lifestyle
              reintegration, and long-term wellness strategies for survivors.
            </p>
          </div>

          <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              Pediatric & Youth Cancer Services
            </h3>
            <p class="text-gray-600 text-sm">
              Specialized services for children and adolescents, including
              educational continuity, therapy, and family-centered support.
            </p>
          </div>

          <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              Community Outreach & Awareness
            </h3>
            <p class="text-gray-600 text-sm">
              Public education programs, health campaigns, and early detection
              awareness initiatives across schools, workplaces, and communities.
            </p>
          </div>

          <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              Wellness & Lifestyle Guidance
            </h3>
            <p class="text-gray-600 text-sm">
              Advice and planning around diet, fitness, and healthy
              living—customized to support treatment and recovery outcomes.
            </p>
          </div>

          <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              Support Groups & Peer Engagement
            </h3>
            <p class="text-gray-600 text-sm">
              Peer support sessions and survivor communities that foster
              encouragement, shared experience, and strength through connection.
            </p>
          </div>

          <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              Patient Advocacy & Resource Coordination
            </h3>
            <p class="text-gray-600 text-sm">
              Guidance through treatment options, referrals, medical documents,
              and informed decision-making at every stage.
            </p>
          </div>
        </div>
      </section>
      <div className=" py-16 px-4 sm:px-6 lg:px-24">
        <a
          href="https://t.me/drcanserfree"
          target="blank"
          rel="noopener noreferrer"
        >
          <p className="text-green-600 font-bold">Need clinical care?</p>
        </a>
        <a
          href="https://t.me/drcanserfree"
          target="blank"
          rel="noopener noreferrer"
        >
          <p className="text-green-600 font-bold">Need Drugs and cure?</p>
        </a>
      </div>
    </div>
  );
};

export default Service;
