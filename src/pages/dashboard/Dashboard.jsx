import AllEntities from "../dashboard/AllEntities";

export default function Dashboard() {
  return (
    <>
      <div className=" main-component-dashboard">
        <h1 className="h1-dashboard">Perfil de entidades</h1>
        <section className="sect-entities">
          <AllEntities />
        </section>
      </div>
    </>
  );
}
