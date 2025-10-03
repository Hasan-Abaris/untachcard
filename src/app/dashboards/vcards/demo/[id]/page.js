// app/Dashboard/vcards/edit/[id]/page.js
import EditVcardPage from "./EditVcardPage";

export async function generateStaticParams() {
  // Return an array of all IDs you want to pre-render
  const ids = ["1", "2", "3"]; // Example, replace with real IDs or fetch from API

  return ids.map((id) => ({ id }));
}

export default function Page() {

  return <EditVcardPage />;
}
