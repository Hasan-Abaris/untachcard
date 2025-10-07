import ThemeFivepage from "@/components/preview/theme_five";




export default function Page({ params }) {
  return <ThemeFivepage slug={params.slug} />;
}
