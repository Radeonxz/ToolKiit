import Image from "next/image";

const MeetupDetails = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "20rem"
        }}
      >
        <Image
          src="https://miro.medium.com/max/1838/1*2tmzU7bve-VlTkOMWsk_Hw.jpeg"
          alt="first"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h1>First</h1>
      <address>This is the address</address>
      <p>The description</p>
    </>
  );
};

export default MeetupDetails;
