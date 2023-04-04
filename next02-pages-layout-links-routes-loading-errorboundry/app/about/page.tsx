import Link from "next/link";

const About = () => {
  // this will throw an error when we load /about and /about/error.tsx will be show instead of this component
  //   throw new Error("Not today!");
  return (
    <>
      <div>About Component</div>
      <Link href="/">Go to Home</Link>
    </>
  );
};

export default About;
