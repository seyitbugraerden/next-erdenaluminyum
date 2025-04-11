export async function getServerSideProps({ res }) {
  const baseUrl = "https://www.erdemaluminyum.com.tr";

  const staticPages = [
    "", // anasayfa
    "hakkimizda/biz-kimiz",
    "hakkimizda/galeri",
    "hakkimizda/referanslarimiz",
    "iletisim",
    "hizmetlerimiz/cam-balkon-sistemleri",
    "hizmetlerimiz/cephe-giydirme-sistemleri",
    "hizmetlerimiz/dis-cephe-kaplama-sistemleri",
    "hizmetlerimiz/korkuluk-ve-guvenlik-sistemleri",
    "hizmetlerimiz/aluminyum-dograma-sistemleri",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((page) => {
      return `
    <url>
      <loc>${baseUrl}/${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>`;
    })
    .join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function SiteMap() {
  // sayfa tarayıcıda render edilmez, sadece XML üretir
  return null;
}
