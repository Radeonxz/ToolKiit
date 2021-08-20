import MeetupList from "../components/meetups/MeetupList";

const meetupData = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://www.google.ca/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb6%2FImage_created_with_a_mobile_phone.png%2F1200px-Image_created_with_a_mobile_phone.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&tbnid=gxFxsvFBmxeZ9M&vet=12ahUKEwjYuY6e1bvyAhUZqHIEHXDJCj8QMygAegUIARDNAQ..i&docid=0JWe7yDOKrVFAM&w=1200&h=900&q=image&ved=2ahUKEwjYuY6e1bvyAhUZqHIEHXDJCj8QMygAegUIARDNAQ",
    address: "1 Foo, Bar",
    description: "This is the first one"
  }
];

const HomePage = () => {
  return <MeetupList meetups={meetupData} />;
};

export default HomePage;
