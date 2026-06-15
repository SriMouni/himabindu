// School data — single source of truth for school pages, directory, sitemap & schema.
import { img } from "@/assets/images";

export interface School {
  slug: string;
  name: string;
  shortName: string;
  area: string;
  city: string;
  region: string;
  established: string;
  overview: string;
  programs: string[];
  daycare: string;
  gallery: string[];
  faqs: { q: string; a: string }[];
  mapEmbed: string;
  addressLocality: string;
  enquiryUrl: string;
}

const ENQUIRY =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Admission+Enquiry+-+FirstCry+Intellitots&details=Admission+enquiry&location=Hyderabad";

export const schools: School[] = [
  {
    slug: "firstcry-intellitots-nizampet",
    name: "FirstCry Intellitots Preschool & Daycare — Nizampet",
    shortName: "FirstCry Intellitots Nizampet",
    area: "Nizampet",
    city: "Hyderabad",
    region: "Telangana",
    established: "2012",
    overview:
      "FirstCry Intellitots Preschool & Daycare in Nizampet Village, Hyderabad, established in 2012, is a trusted early-learning centre known for quality care and a strong community presence. Located on Eshwar Villas Road, it offers play-based preschool, playgroup, kindergarten, and full daycare programs for children aged 1–8.",
    programs: ["Playgroup", "Nursery", "Junior KG", "Senior KG", "Daycare", "After-school care"],
    daycare:
      "Safe, hygienic, and nurturing full-day and half-day daycare with nutritious meals, supervised naps, and structured activity routines led by trained caregivers.",
    gallery: ["school1.jpeg", "school2.jpeg", "school3.jpeg", "school4.jpeg", "school5.jpeg", "school7.jpeg"],
    faqs: [
      { q: "What age groups does FirstCry Intellitots Nizampet accept?", a: "The centre welcomes children aged 1 to 8 across playgroup, nursery, kindergarten, and daycare programs." },
      { q: "Does the Nizampet centre offer daycare?", a: "Yes. Full-day and half-day daycare is available with meals, naps, and supervised learning activities." },
      { q: "Who manages FirstCry Intellitots Nizampet?", a: "The centre is managed by Himabindu Rudrapaka, an early childhood education leader with 15+ years of experience." },
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12504.58140592084!2d78.3855293!3d17.5132144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9206d519497f%3A0x81b062c9c8eac70b!2sFirstcry%20Intellitots%20Preschool%20%26%20Daycare%20-%20Nizampet%2C%20Hyderabad!5e1!3m2!1sen!2sin!4v1751262726456!5m2!1sen!2sin",
    addressLocality: "Nizampet, Hyderabad",
    enquiryUrl: ENQUIRY,
  },
  {
    slug: "firstcry-intellitots-botanical-garden",
    name: "FirstCry Intellitots Preschool & Daycare — Botanical Garden",
    shortName: "FirstCry Intellitots Botanical Garden",
    area: "Kondapur",
    city: "Hyderabad",
    region: "Telangana",
    established: "2016",
    overview:
      "FirstCry Intellitots Botanical Garden, Kondapur, offers a nature-inspired learning environment where children's curiosity and love for learning blossom. Surrounded by greenery, young learners are guided by dedicated educators to explore, grow, and connect with the natural world.",
    programs: ["Playgroup", "Nursery", "Junior KG", "Senior KG", "Daycare", "Summer camp"],
    daycare:
      "Nature-themed daycare with outdoor play, sensory gardens, nutritious meals, and rest routines in a calm, secure setting.",
    gallery: ["school8.jpeg", "school9.jpeg", "school10.jpeg", "school11.jpeg", "school12.jpeg", "school13.jpeg"],
    faqs: [
      { q: "Where is FirstCry Intellitots Botanical Garden located?", a: "The centre is located in Kondapur, Hyderabad, near the Botanical Garden." },
      { q: "What makes the Botanical Garden centre unique?", a: "Its nature-inspired curriculum blends outdoor exploration and sensory learning with structured early education." },
      { q: "Who manages this preschool?", a: "It is managed by Himabindu Rudrapaka as part of her network of FirstCry Intellitots centres in Hyderabad." },
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.046735984192!2d78.34269607412564!3d17.46078410068864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ab6bb0dfa9%3A0x9bb3f3d15d5ec43a!2sFirstcry%20Intellitots%20Preschool%20%26%20Daycare%20-%20Botanical%20Garden%2C%20Hyderabad!5e1!3m2!1sen!2sin!4v1751262791527!5m2!1sen!2sin",
    addressLocality: "Kondapur, Hyderabad",
    enquiryUrl: ENQUIRY,
  },
  {
    slug: "firstcry-intellitots-hmt-hills",
    name: "FirstCry Intellitots Preschool & Daycare — HMT Hills",
    shortName: "FirstCry Intellitots HMT Hills",
    area: "Kukatpally",
    city: "Hyderabad",
    region: "Telangana",
    established: "2018",
    overview:
      "FirstCry Intellitots HMT Hills, Kukatpally, offers a nurturing and stimulating educational environment amid serene surroundings, blending academic excellence with holistic development. With dedicated educators, modern facilities, and personalised learning, the centre empowers children to reach their full potential.",
    programs: ["Playgroup", "Nursery", "Junior KG", "Senior KG", "Daycare", "Phonics & reading"],
    daycare:
      "Secure full-day daycare with personalised attention, balanced meals, and a calm rest environment supervised by trained staff.",
    gallery: ["school14.jpeg", "school15.jpeg", "school16.jpeg", "school17.jpeg", "school18.jpeg", "school19.jpeg"],
    faqs: [
      { q: "What programs are offered at HMT Hills?", a: "Playgroup, nursery, junior and senior kindergarten, daycare, and phonics & reading enrichment." },
      { q: "Is personalised learning available?", a: "Yes. The centre focuses on personalised learning and holistic development for every child." },
      { q: "Who leads FirstCry Intellitots HMT Hills?", a: "The centre is managed by Himabindu Rudrapaka, an award-winning early childhood educator." },
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.3269759079008!2d78.38953007412665!3d17.50266219947611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb912e793fc399%3A0x33e9688581bdd44a!2sFirstcry%20Intellitots%20Preschool%20%26%20Daycare%20-%20HMT%20Hills%2C%20Hyderabad!5e1!3m2!1sen!2sin!4v1751262847512!5m2!1sen!2sin",
    addressLocality: "Kukatpally, Hyderabad",
    enquiryUrl: ENQUIRY,
  },
  {
    slug: "firstcry-intellitots-mayuri-nagar",
    name: "FirstCry Intellitots Preschool & Daycare — Mayuri Nagar",
    shortName: "FirstCry Intellitots Mayuri Nagar",
    area: "Miyapur",
    city: "Hyderabad",
    region: "Telangana",
    established: "2024",
    overview:
      "FirstCry Intellitots Mayuri Nagar, Miyapur, is the newest centre in the network, bringing modern early childhood education methods, technology-supported learning, and personalised approaches to Hyderabad's growing communities.",
    programs: ["Playgroup", "Nursery", "Junior KG", "Senior KG", "Daycare", "Activity-based learning"],
    daycare:
      "Modern, secure daycare with activity-based routines, nutritious meals, and rest time in a child-friendly environment.",
    gallery: ["school20.jpeg", "school21.jpeg", "school22.jpeg", "school23.jpeg", "school24.jpeg", "school25.jpeg"],
    faqs: [
      { q: "When did FirstCry Intellitots Mayuri Nagar open?", a: "The Mayuri Nagar centre opened in 2024 as the newest addition to the network." },
      { q: "Where is it located?", a: "It is located in Miyapur, Hyderabad." },
      { q: "Who manages the Mayuri Nagar centre?", a: "Like the other centres, it is managed by Himabindu Rudrapaka." },
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12505.354516477679!2d78.35961558384648!3d17.501984948962672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93000f41caeb%3A0x1d6aac4c1f6021a7!2sFirstcry%20Intellitots%20Preschool%20%26%20Daycare%20-%20Mayurinagar%20New%2C%20Hyderabad!5e1!3m2!1sen!2sin!4v1751262878132!5m2!1sen!2sin",
    addressLocality: "Miyapur, Hyderabad",
    enquiryUrl: ENQUIRY,
  },
];

export function getSchool(slug: string): School | undefined {
  return schools.find((s) => s.slug === slug);
}

/** Resolve a gallery image name to its built URL. */
export function schoolImage(name: string): string {
  return img(name);
}
