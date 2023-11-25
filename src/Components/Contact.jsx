import CForm from './CForm';

const Contact = () => {
  return (
    <>
      <div id="contacts" className="max-lg:px-8 lg:px-24 max-lg:mt-8 lg:mt-16">
        <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-teal-400 to-teal-950">
          Contact
        </h1>
        <CForm />
      </div>
    </>
  )
}

export default Contact