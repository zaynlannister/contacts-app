import Contact from "../../components/Contact/Contact";
import ScrollBar from "../../components/ScrollBar";

const contacts = [
  {
    fullName: "Тулаев Бекзод",
    email: "zaynlannister@gmail.com",
    phoneNumber: "+998332488838",
    tags: ["family", "friend"],
    image: "",
  },
  {
    fullName: "Тулаев Бекзод",
    email: "zaynlannister@gmail.com",
    phoneNumber: "+998332488838",
    tags: ["family", "friend"],
    image: "",
  },
  {
    fullName: "Тулаев Бекзод",
    email: "zaynlannister@gmail.com",
    phoneNumber: "+998332488838",
    tags: ["family", "friend"],
    image: "",
  },
];

const Contacts = () => {
  return (
    <div className="w-full px-[150px] pt-6">
      <ScrollBar>
        {contacts.map((item, index) => (
          <Contact key={index} contact={item} />
        ))}
      </ScrollBar>
    </div>
  );
};

export default Contacts;
