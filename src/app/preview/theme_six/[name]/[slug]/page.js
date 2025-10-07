// app/preview/theme_one/[slug]/page.js

import  ThemeSixpage  from "@/components/preview/theme_six";


export default function Page({ params }) {
  return <ThemeSixpage slug={params.slug} />;
}
