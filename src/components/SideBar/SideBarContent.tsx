interface SideBarContentInterface {
  icon: React.ReactNode;
  text: string;
}

const SideBarContent = (props: SideBarContentInterface) => {
  return (
    <div className="flex items-end text-[#7C7C7C] mb-1">
      <div className="mr-2 mb-[2px]">{props.icon}</div>
      <p className="self-end text-[14px]">{props.text}</p>
    </div>
  );
};

export default SideBarContent;
