import LoginButton from "../../components/LoginButton";
import SignUpButton from "../../components/SignUpButton";

export default function Home() {
  return (
    <>
      <div className="container-home">
        <h1 className="title-home">
          Bienvenidos a <br />
          FaproChallenge
        </h1>
        <section className="sect-home">
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
