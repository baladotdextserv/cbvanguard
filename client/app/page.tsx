import List from "@/features/List/List";

export default function Home() {
  console.log("Home page");
  return (
    <section>
      <div className='border-b border-indigo-200 border-solid mb-4'>
        <h1 className='mx-auto text-2xl my-4 w-fit'>CB Vanguard</h1>
      </div>
      <div>
        <List />
      </div>
    </section>
  );
}
