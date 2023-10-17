import { Avatar } from "@mui/material";
interface ContactInterface {
  contact: {
    fullName: string;
    email: string;
    phoneNumber: string;
    tags: string[];
    image: string;
  };
}

const Contact = (props: ContactInterface) => {
  const contact = props.contact;
  return (
    <div className="flex justify-between items-center border border-[#cfd0d3] rounded p-4 mb-4">
      <div className="flex items-center">
        <div className="mr-6">
          <Avatar src={contact.image} />
        </div>
        <div className="mr-6">
          <p>{contact.fullName}</p>
        </div>
        <div className="mr-6">
          <p>{contact.phoneNumber}</p>
        </div>
        <div>
          <p>{contact.email}</p>
        </div>
        <div className="flex ml-8">
          {contact.tags.map((item, index) => (
            <div
              className="mr-2 font-bold text-[12px] text-[#d26c4e] bg-[#ffefd6] px-2 py-1 rounded"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div>icons</div>
    </div>
  );
};

export default Contact;
