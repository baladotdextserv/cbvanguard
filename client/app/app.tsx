import List from "@/features/List/List";

export default function MyApp({ children }: { children: React.ReactNode }) {
  console.log("Home page");
  return (
    <section>
      <h1>here we go</h1>
      {children}
      
      {/* <div className='border-b border-indigo-200 border-solid mb-4'>
        <h1 className='mx-auto text-2xl my-4 w-fit'>CB Vanguard</h1>
      </div>
      <div>
        <List />
      </div> */}
    </section>
  );
}
