import axios from "axios";
async function getData() {
  const res = await axios.get("http://localhost:3000/api/user");
  return res.data;
}

export default async function Home() {
  await new Promise((r) => setTimeout(r, 1000));
  const data = await getData();
  return (
    <div className="flex bg-slate-100 text-black flex-col items-center justify-center h-screen">
      <div className="bg-slate-300 rounded-lg p-4">
        <div>Hi there</div>
        {data.name}
        {data.email}
      </div>
    </div>
  );
}
