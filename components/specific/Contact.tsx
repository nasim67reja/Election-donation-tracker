import SectionLayout from "../common/SectionLayout";
import Image from "next/image";
import Form from "./Form";
import SectionHeader from "../common/SectionHeader";

let address: {
  title: string;
  phone: string;
  address: string;
  email: string;
  // icon: string;
}[];

address = [
  {
    title: "USA Office",
    phone: "+1 (321) 765-9177",
    address: "1301 34th ST South, St. Petersburg FL 33711",
    email: "info@demo.com",
  },
  {
    title: "Asia Office",
    phone: "+8801612335239",
    address:
      "Flat : 2nd , House : 21, Road : 1, Block : A, Rampura, Dhaka - 1212",
    email: "info@demo.com",
  },
];

const Contact = () => {
  return (
    <div id="contact-us">
      <SectionLayout bg="bg-bgPrimary">
        <SectionHeader
          heading="Contact Us
"
          text=" Have questions or feedback? Reach out to us. We're here to assist you."
        />
        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center md:justify-between gap-20 "
        >
          <div className="md:flex-1 ">
            <Adress
              title="Tampa Office"
              address={address[0].address}
              phone={address[0].phone}
              email={address[0].email}
            />
          </div>

          <div className="md:flex-1 ">
            <Adress
              title="Asia Office"
              address={address[1].address}
              phone={address[1].phone}
              email={address[1].email}
            />
          </div>

          <div className="md:flex-[2]">
            <div className=" mx-auto">
              <h4 className="heading-four !text-center">
                Just send us your questions or concerns by starting a new
                message and we will give you the help you need.
              </h4>
              <Form />
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Contact;

const Row = ({ title, icon, address, phone, email }: any) => {
  return (
    <div className="flex flex-col md:items-start items-center ">
      <h4 className="heading-four mb-1 flex items-center gap-4">
        <span>
          <Image
            src={icon}
            alt="contact-office"
            width={600}
            height={80}
            className="w-[1.8rem] h-auto object-cover"
          />
        </span>
        <span>{title}</span>
      </h4>
      <div>
        <p className="text-small md:items-start items-center">{phone}</p>
        <p className="text-small !leading-[1.4] md:items-start items-center">
          {address}
        </p>
        <p className="text-small md:items-start items-centerr">{email}</p>
      </div>
    </div>
  );
};

const Adress = ({ address, title, phone, email }: any) => {
  return (
    <div className="flex flex-col justify-around items-center md:items-start">
      <h3 className="heading-tertiary mb-10">{title}</h3>
      <div className="flex flex-col gap-8 ">
        <Row title="Phone" icon="/assets/phone.svg" phone={phone} />
        <Row title="Address" icon="/assets/location.svg" address={address} />
        <Row title="Email" icon="/assets/email.svg" email={email} />
      </div>
    </div>
  );
};
