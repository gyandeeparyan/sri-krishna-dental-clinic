export default function sitemap() {
  return [
    {
      url: "https://srikrishnadentalclinic.in",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://srikrishnadentalclinic.in/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://srikrishnadentalclinic.in/services",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://srikrishnadentalclinic.in/hygiene",
      lastModified: new Date(),
      changeFrequency: "bi-weekly",
      priority: 0.7,
    },
    {
      url: "https://srikrishnadentalclinic.in/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
