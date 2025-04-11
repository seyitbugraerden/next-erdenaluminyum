export async function getServerSideProps({ res }) {
  const content = `User-agent: *
  Allow: /
  Sitemap: https://www.erdemaluminyum.com.tr/sitemap.xml
  `;

  res.setHeader("Content-Type", "text/plain");
  res.write(content);
  res.end();

  return { props: {} };
}

export default function Robots() {
  return null;
}
