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

  const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((page) => {
      const loc = `${baseUrl}/${page}`.replace(/\/+$/, ""); // son slash'ı temizle
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`;
    })
    .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function SiteMap() {
  return null;
}
