import Catfish from "../markdown/img/catfish.png";

export default function African_Catfish() {
  return (
    <main className="blogs min-h-screen w-full flex flex-col justify-center items-center py-4 leading-6 mb-16 font-pop">
      <div className="md:w-2/3 max-md: px-8 flex flex-col gap-3 text-lg">
        <header>
          <h1>African Catfish: Is it a Real Threat in Nepal?</h1>
          <span>Achyut Babu Acharya</span>
          <span>B.VSc. & A.H</span>
          <span>V Semester</span>
          <span>Nepal Polytechnic Institute, Bharatpur Nepal</span>
        </header>

        <section>
          <h2>Introduction</h2>
          <p>
            African catfish, known as Clarias gariepinus of Claridae family, is
            a carnivorous fish with a grey-black appearance, commonly referred
            to as &apos;Mangur&apos; in the local Nepali language. This fish is
            characterized by its air-breathing capability, earning it the name
            sharptooth catfish.
          </p>
        </section>

        <section>
          <h2>History of African Catfish Farming</h2>
          <p>
            African Catfish, native to Africa and the Middle East, was
            introduced for aquaculture purposes in Brazil, Vietnam, Indonesia,
            and India in the 1980s. In Nepal, it was introduced in 1996-97 by
            fry traders from India and Bangladesh.
          </p>
        </section>

        <section>
          <img
            src={Catfish}
            alt="catfish.png"
            className="py-4 w-full md:w-2/3 rounded-lg m-auto"
          />
        </section>

        <section>
          <h2>Rearing of Catfish</h2>
          <p>
            Catfish rearing is flourishing, with the ability to thrive in
            earthen ponds, cemented ponds, and bioflocs. The fish is hardy and
            can tolerate various conditions, with an optimum temperature range
            of 20-30°C. Rearing in Nepal, especially in the Terai region, has
            uplifted the socio-economic status of farmers.
          </p>
        </section>

        <section>
          <h2>Positive Attributes to Farming</h2>
          <p>
            Fish farming, particularly African catfish, has economic benefits
            for farmers and the country. It is cost-effective, with high-density
            farming resulting in a higher yield. The fish&apos;s market
            potential in Nepal has been growing, and it fetches higher prices
            than Tilapia.
          </p>
        </section>

        <section>
          <h2>Market of African Catfish</h2>
          <p>
            Internationally, African catfish has been produced in various
            countries. In Nepal, the market is primarily local and domestic,
            lacking proper infrastructure and facilities. Despite this, the
            market is growing, with around 2500 metric tons of African catfish
            produced yearly.
          </p>
        </section>

        <section>
          <h2>Benefits for Consumers</h2>
          <p>
            The meat of African catfish is rich in high-grade proteins,
            essential amino acids, minerals, and vitamins. It contains mono and
            poly-saturated fatty acids, including omega-3 and omega-6 fatty
            acids, making it a valuable food product.
          </p>
        </section>

        <section>
          <h2>Health Concerns</h2>
          <p>
            In Nepal, catfish is sometimes fed with slaughterhouse wastage
            containing traces of lead. However, the Tolerable Daily Intake (TDI)
            of lead is below the acceptable limit, indicating that it poses a
            lower health risk and is consumable.
          </p>
        </section>

        <section>
          <h2>Threat of African Catfish in Nepal</h2>
          <p>
            The rapid growth and reproduction of African catfish pose a threat
            to local ecosystems, especially during flooding when ponds overflow,
            allowing the fish to reach rivers. There is concern about
            hybridization with local breeds and its impact on the gene pool.
          </p>
        </section>

        <section>
          <h2>Banning of African Catfish in Nepal</h2>
          <p>
            As of now, there is no legal ban on African catfish in Nepal. In
            India, the High Court has implemented a ban nationwide due to
            potential threats to indigenous fish and aquaculture diversities.
          </p>
        </section>

        <section>
          <h2>Is it Necessary to Ban in Nepal?</h2>
          <p>
            The author argues that if farming is done sustainably, maintaining
            ecological balance, African catfish farming can benefit Nepali
            farmers. Government policies should focus on modern and eco-friendly
            farming practices.
          </p>
        </section>

        <article className="py-2">
          <h2 className="py-2 text-2xl font-bold">References</h2>
          <ul className="ref">
            <li>Shukla Gandaki Agriculture Production and Research Pvt. Ltd</li>
            <li>Lamgadi Krishi Farm Pvt. Ltd</li>
            <li>
              The introduction of the African catfish Clarias gariepinus
              (Burchell, 1822) into Brazilian inland waters: a growing threat
            </li>
            <li>
              African Catfish: A boon or bane for the environment: A critical
              analysis
            </li>
            <li>
              An Appraisal of Introduced African Catfish _Clarias gariepinus_
              (Burchell, 1822) in India: Invasion and Risks
            </li>
            <li>
              <a href="https://animaldiversity.org/accounts/Clarias_gariepinus/">
                Animal Diversity Web - Clarias gariepinus
              </a>
            </li>
            <li>
              Effects of feed composition on the nutritional value of meat of
              African Catfish
            </li>
            <li>
              Forecast of the nutritional value of catfish (Clarias gariepinus)
              in the spawning period
            </li>
            <li>
              FAO Fisheries & Aquaculture - Cultured Aquatic Species Information
              Programme - Clarias gariepinus (Burchell, 1822)
            </li>
            <li>Aquaculture Development in Nepal and Current Needs</li>
            <li>
              M.A. Husen (2019) Int. J. Appl. Sci. Biotechnol. Vol 7(1): 1-5.
              DOI: 10.3126/ijasbt.v7i1.22938
            </li>
          </ul>
        </article>
      </div>
    </main>
  );
}
