import ThemeFourpage from "@/components/preview/theme_four";




export default function Page({ params }) {
  return <ThemeFourpage slug={params.slug} />;
}
