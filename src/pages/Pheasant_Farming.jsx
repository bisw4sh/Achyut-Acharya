import adult from "../markdown/img/adult.png";
import chicks from "../markdown/img/chicks.png";

export default function Pheasant_Farming() {
  return (
    <main className="blogs min-h-screen w-full flex flex-col justify-center items-center py-4 leading-6 mb-16 font-pop">
      <div className="md:w-2/3 max-md: px-8 flex flex-col gap-3 text-lg">
        <header>
          <h1>Pheasant Farming: An Overview and Condition in Nepal</h1>
          <span>Achyut Babu Acharya</span>
          <span>General Committee Member IVSA-NPI</span>
          <span>III Semester</span>
          <span>Nepal Polytechnic Institute, Bharatpur Nepal</span>
        </header>

        <section>
          <h2>Introduction</h2>
          <p>
            Pheasants, beautiful wild birds mainly found in South East Asia,
            have about 51 known varieties globally. In Nepal, notable species
            include the Blood pheasant, Cheer pheasant, Satyr pheasant, Kalij,
            Koklass Pheasant, and the Himalayan Monal (Danfe), which is the
            national bird of Nepal. Hunting and poaching of wild pheasants are
            illegal, and conservation efforts are mandated by the &apos;National
            Park and Wildlife Conservation Act-1973.&apos;
          </p>
        </section>

        <section>
          <h2>History of Pheasant Farming</h2>
          <p>
            The introduction of pheasants to Europe dates back to around 2000
            years ago, brought by Greek people from China. Commercialization
            began in the 19th century, with the common pheasant imported to
            Europe in 1768 AD. Pheasants were initially used for gaming and
            later transported to North America.
          </p>
        </section>

        <section>
          <h2>History of Farming in Nepal</h2>
          <p>
            Pheasant farming was introduced in Nepal in 2072 BS. Pheasant eggs
            were brought from Belgium, leading to the establishment of
            commercial farms across the country. Licensing from the Nepal
            Government is required for such farms.
          </p>
        </section>

        <section>
          <h2>Farming Techniques of Pheasant</h2>
          <br />
          <h2>Hatching of Eggs</h2>
          <li>
            Pheasants are seasonal breeders, laying 50-60 eggs per batch from
            March to July.
          </li>
          <li>
            Eggs are collected, stored at 50°F for 24 hours, then shifted to an
            incubator.
          </li>
          <li>After 21 days, they are moved to a hatcher for hatching.</li>
        </section>

        <section>
          <img
            src={chicks}
            alt="chick pheasant"
            className="py-4 w-full md:w-2/3 rounded-lg m-auto"
          />
          <figcaption className="text-center">
            Day old chicks of Ring neck pheasant
          </figcaption>
          <figcaption className="text-center">
            Source: Pokhara Prakritik Krishi Utpadan Pvt. Ltd.
          </figcaption>
        </section>

        <section>
          <h2>Brooding of Chicks</h2>
          <li>
            Day-old chicks are kept in small groups with a temperature of
            95-100°F.
          </li>
          <li>Chicks are given feed with 25% crude protein.</li>
          <li>
            Adequate space is crucial to avoid issues like feather picking and
            cannibalism.
          </li>
        </section>

        <section>
          <h2>Management of Adult Birds</h2>
          <li>
            Up to 8 weeks, pheasants are kept inside sheds; afterward, they are
            moved to open pens.
          </li>
          <li>
            Pens are constructed with iron wire netting, and proper space per
            bird is maintained.
          </li>
          <li>
            Sexual dimorphism is observed, with males being larger and more
            colorful.
          </li>
        </section>

        <section>
          <img
            src={adult}
            alt="adult pheasant"
            className="py-4 w-full md:w-2/3 rounded-lg m-auto"
          />
          <figcaption className="text-center">
            Male Ring Neck Pheasant
          </figcaption>
          <figcaption className="text-center">
            Source: Pokhara Prakritik Krishi Utpadan Pvt. Ltd.
          </figcaption>
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

        <section>
          <h2>Present Condition of Pheasant Farming in Nepal</h2>
          <p>
            In Nepal, Ring Neck pheasants and Melanistic Mutant pheasants are
            primarily reared. The total population is around 10,000-15,000 in
            2019-2020AD, projected to increase to 40,000-50,000 next year.
            Pheasant meat, high in protein and low in fat, has a growing market
            in hotels and restaurants. Despite being widely used as game birds
            in Europe and North America, such activities are not feasible in
            Nepal. However, there is potential for meat products and feathers in
            the garment industry. Government support through subsidies and
            insurance policies can encourage pheasant farming as a promising
            platform alongside the poultry market in Nepal.
          </p>
        </section>

        <article className="py-2">
          <h2 className="py-2 text-2xl font-bold">References</h2>
          <ul className="ref">
            <li>Pokhara Prakritik Krishi Utpadan Pvt. Ltd. (Pokhara-33)</li>
            <li>Nepal Wild Food Product Pvt. Ltd. (Pokhara-33)</li>
            <li>
              <a href="(https://www.thefield.co.uk/shooting/the-history-of-the-pheasant-22364">
                The History of the Pheasant
              </a>
            </li>
            <li>
              <a href="https://www.ag.ndsu.edu/publications/environment-natural-resources/raising-pheasants">
                Raising Pheasants - NDSU Extension
              </a>
            </li>
            <li>The History of Pheasants: Michael Yardley, 2015</li>
            <li>McFarlane Pheasant Inc., Rearing Guide</li>
            <li>
              IUCN Status Survey and Conservation Action Plan 2000-2004 of
              Pheasant, Edited by Richard A. Fuller and Peter J.
            </li>
            <li>
              <a href="https://therisingnepal.org.np/news/32384">
                The Rising Nepal - Pheasant Farming
              </a>
            </li>
          </ul>
        </article>
      </div>
    </main>
  );
}
