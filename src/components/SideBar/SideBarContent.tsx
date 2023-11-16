interface SideBarContentInterface {
  icon: React.ReactNode;
  text: string | "";
}

const SideBarContent = (props: SideBarContentInterface) => {
  return (
    <div className="flex items-end text-[#7C7C7C] mb-1">
      <div
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        className="mr-2 mb-[2px]"
      >
        {props.icon}
      </div>
      <p
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        className="self-end text-[14px]"
      >
        {props.text}
      </p>
    </div>
  );
};

export default SideBarContent;
