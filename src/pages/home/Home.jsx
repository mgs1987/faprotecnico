import LoginButton from "../../components/LoginButton";
import SignUpButton from "../../components/SignUpButton";
import Navbar from "../../components/Navbar";
export default function Home() {
  return (
    <>
      <div className="bg-purple-300 flex flex-col justify-center items-center text-center h-screen">
        <Navbar />
        <h1 className="text-white font-semibold font-ChakraPetch text-[60px] py-8">
          Bienvenidos a <br />
          FaproChallenge
        </h1>
        <section className="text-white flex flex-row p-4 font-ChakraPetch">
          <section className="px-7">
            <h6 className="m-2">Ya te registraste?</h6>
            <LoginButton />
          </section>
          <section className="px-7">
            <h6 className="m-2">Primera vez aqui?</h6>
            <SignUpButton />
          </section>
        </section>
      </div>
    </>
  );
}
