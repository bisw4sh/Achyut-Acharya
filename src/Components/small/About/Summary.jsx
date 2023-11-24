import MainImage from '../../../assets/img/1.png'

const Summary = () => {
  return (
    <div
      id="about"
      className="px-4 md:h-5/6 flex max-md:flex-col justify-around items-center"
    >
      <div className="h-full flex flex-col justify-center gap-4 w-2/6 ">
        <h1 className="top-16 text-4xl font-extrabold text-teal-400">
          About me
        </h1>
        <h2 className="font-bold text-5xl text-teal-400">
          Hi <span className="text-4xl">👋</span>
        </h2>
        <h3 className="text-2xl">
          I&apos;m &nbsp;
          <span className="font-bold text-emerald-500">
            Achyut Babu Acharya
          </span>
        </h3>
        <h4 className="text-2xl ">veterinarian by profession from</h4>
        <h5 className="text-2xl">Pokhara, Nepal</h5>
        <p className="text-xl">
          My responsibility is to safeguard the health & welfare of animals with
          the practices of animal science understanding animal physiology and
          anatomy, diagnostic and problem-solving sksurgical proficiency and
          dexterity, compassionate patient care, and effective communication
        </p>
      </div>

      <div className="h-full flex justify-center items-center">
        <img
          src={MainImage}
          alt="headshot"
          className="rounded-xl aspect-auto h-full drop-shadow-2xl	"
        />
      </div>
    </div>
  );
}

export default Summary