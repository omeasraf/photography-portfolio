import { BsInstagram, BsEnvelope } from "react-icons/bs";

export const ContactView = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] w-full">
      <div className="flex flex-col gap-6">
        <a
          href="https://instagram.com/photobyabhi"
          target="_blank"
          rel="noreferrer"
        >
          <h2 className="flex flex-row gap-5 text-[35px] hover:text-[#ff3549]">
            <BsInstagram /> Instagram
          </h2>
        </a>
        <a href="mailto:abhiasraf01@gmail.com" target="_blank" rel="noreferrer">
          <h2 className="flex flex-row gap-5 text-[35px] hover:text-[#35c6ff]">
            <BsEnvelope /> Email
          </h2>
        </a>
      </div>
    </div>
  );
};
