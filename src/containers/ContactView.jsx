import { BsInstagram, BsEnvelope } from "react-icons/bs";

export const ContactView = () => {
  return (
    <div className="contactView flex flex-col justify-center items-center h-[100vh] w-full">
      <div className="flex flex-col gap-6">
        <a
          href="https://instagram.com/photobyabhi"
          target="_blank"
          rel="noreferrer"
        >
          <h2
            className="flex flex-row gap-5 text-[35px] hover:text-[#ff3549]"
            data-aos="fade-up"
          >
            <BsInstagram /> Instagram
          </h2>
        </a>
        <a href="mailto:abhiasraf01@gmail.com" target="_blank" rel="noreferrer">
          <h2
            className="flex flex-row gap-5 text-[35px] hover:text-[#35c6ff]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <BsEnvelope /> Email
          </h2>
        </a>
      </div>
    </div>
  );
};
