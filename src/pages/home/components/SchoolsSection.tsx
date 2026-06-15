import { Link } from "react-router-dom";

const schools = [
  {
    title: "FirstCry Intellitots Nizampet",
    location: "Nizampet, Hyderabad",
    founded: "2012",
    desc: "Our flagship center established in 2012, known for quality care and a strong community presence with programs including daycare, preschool, playgroup, and kindergarten.",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12504.58140592084!2d78.3855293!3d17.5132144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9206d519497f%3A0x81b062c9c8eac70b!2sFirstcry%20Intellitots%20Preschool%20%26%20Daycare%20-%20Nizampet%2C%20Hyderabad!5e1!3m2!1sen!2sin!4v1751262726456!5m2!1sen!2sin",
    accentClass: "bg-primary-100 text-primary-600 border-primary-200",
    dotClass: "bg-primary-500",
    tags: ["Ages 1–8", "Preschool", "Day Care"],
  },
  {
    title: "FirstCry Intellitots Botanical Gardens",
    location: "Kondapur, Hyderabad",
    founded: "2016",
    desc: "A nature-inspired environment where children's curiosity and love for learning flourish amidst Hyderabad's lush greenery.",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.046735984192!2d78.34269607412564!3d17.46078410068864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ab6bb0dfa9%3A0x9bb3f3d15d5ec43a!2sFirstcry%20Intellitots%20Preschool%20%26%20Daycare%20-%20Botanical%20Garden%2C%20Hyderabad!5e1!3m2!1sen!2sin!4v1751262791527!5m2!1sen!2sin",
    accentClass: "bg-accent-100 text-accent-600 border-accent-200",
    dotClass: "bg-accent-500",
    tags: ["Ages 1–8", "Preschool", "Day Care"],
  },
  {
    title: "FirstCry Intellitots HMT Hills",
    location: "Kukatpally, Hyderabad",
    founded: "2018",
    desc: "Blending tranquil surroundings of HMT Hills with academic excellence, personalized learning, and strong community partnership.",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.3269759079008!2d78.38953007412665!3d17.50266219947611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb912e793fc399%3A0x33e9688581bdd44a!2sFirstcry%20Intellitots%20Preschool%20%26%20Daycare%20-%20HMT%20Hills%2C%20Hyderabad!5e1!3m2!1sen!2sin!4v1751262847512!5m2!1sen!2sin",
    accentClass: "bg-secondary-100 text-secondary-600 border-secondary-200",
    dotClass: "bg-secondary-500",
    tags: ["Ages 1–8", "Preschool", "Day Care"],
  },
  {
    title: "FirstCry Intellitots Mayuri Nagar",
    location: "Miyapur, Hyderabad",
    founded: "2024",
    desc: "Our newest and most innovative location, incorporating cutting-edge early childhood education methods with technology integration and personalized approaches.",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12505.354516477679!2d78.35961558384648!3d17.501984948962672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93000f41caeb%3A0x1d6aac4c1f6021a7!2sFirstcry%20Intellitots%20Preschool%20%26%20Daycare%20-%20Mayurinagar%20New%2C%20Hyderabad!5e1!3m2!1sen!2sin!4v1751262878132!5m2!1sen!2sin",
    accentClass: "bg-primary-100 text-primary-600 border-primary-200",
    dotClass: "bg-primary-500",
    tags: ["Ages 1–8", "Preschool", "Day Care"],
  },
];

const slugFor: Record<string, string> = {
  "FirstCry Intellitots Nizampet": "firstcry-intellitots-nizampet",
  "FirstCry Intellitots Botanical Gardens": "firstcry-intellitots-botanical-garden",
  "FirstCry Intellitots HMT Hills": "firstcry-intellitots-hmt-hills",
  "FirstCry Intellitots Mayuri Nagar": "firstcry-intellitots-mayuri-nagar",
};

export default function SchoolsSection() {
  return (
    <section id="schools" className="py-24 md:py-32 bg-background-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-primary-500" />
            <span className="text-xs font-label font-semibold tracking-widest text-primary-500 uppercase">Our Schools</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground-950 mb-4">
            Preschool Centers<br />
            <span className="italic font-light text-primary-500">Across Hyderabad</span>
          </h2>
          <p className="text-foreground-500 text-base leading-relaxed">
            Four thriving centers, each with a unique environment — united by the same commitment to joyful, child-led learning.
          </p>
        </div>

        {/* School cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {schools.map((school) => (
            <div
              key={school.title}
              className="bg-background-50 rounded-3xl overflow-hidden border border-background-200"
            >
              {/* Map */}
              <div className="h-48 overflow-hidden">
                <iframe
                  src={school.mapSrc}
                  width="100%"
                  height="192"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={school.title}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-base font-label font-semibold text-foreground-950 leading-snug mb-1">
                      {school.title}
                    </h3>
                    <p className="text-xs text-foreground-500 flex items-center gap-1">
                      <i className="ri-map-pin-line" />
                      {school.location}
                    </p>
                  </div>
                  <span className={`text-xs font-label font-semibold px-3 py-1 rounded-full border ${school.accentClass} whitespace-nowrap shrink-0`}>
                    Est. {school.founded}
                  </span>
                </div>
                <p className="text-sm text-foreground-600 leading-relaxed mb-4">{school.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {school.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-background-200 text-foreground-600 px-2.5 py-1 rounded-full font-label"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {slugFor[school.title] && (
                  <Link
                    to={`/schools/${slugFor[school.title]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-label font-medium text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    View school details <i className="ri-arrow-right-line" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}