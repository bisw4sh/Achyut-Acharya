import animal1 from '../../../assets/svgs/1.svg';
import animal2 from '../../../assets/svgs/2.svg';
import animal3 from '../../../assets/svgs/3.svg';

const Animals = () => {
  return (
    <div className="h-1/6 flex justify-between items-end mt-4 mx-4 opacity-70 -z-10 bg-slate-800 rounded-xl p-1">
      <img src={animal1} alt="animal svg" className="w-1/4 -z-10" />
      <img src={animal2} alt="animal svg" className="w-1/4 -z-10" />
      <img src={animal3} alt="animal svg" className="w-1/4 -z-10" />
    </div>
  );
}

export default Animals