import AllEntities from "../dashboard/AllEntities";

export default function Dashboard() {
  return (
    <>
      <div className=" bg-purple-300 text-white font-ChakraPetch min-h-screen">
        <h1 className="text-[30px] text-center  ">Perfil de entidades</h1>
        <section className="flex flex-col items-center">
          <AllEntities />
        </section>
      </div>
    </>
  );
}
