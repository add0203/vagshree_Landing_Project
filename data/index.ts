export const navItems = [
  {
    title: "Home",
    path: "/",
    isRoute: true,
    isBottom: false,
  },
  {
    title: "Services",
    path: "/services",
    isRoute: true,
    isBottom: false,
  },

  {
    title: "Products",
    path: "/products", // Assumes there's an element with id="product-section" on the page
    isRoute: false,
    isBottom: true,
  },

  {
    title: "About",
    path: "/about",
    isRoute: false,
    isBottom: false,
  },
  // {
  //   title: "Contact Us",
  //   path: "/contactus", // Assumes there's an element with id="contact-section" on the page
  //   isRoute: true,
  //   isBottom: false,
  // },
  { title: "Career", path: "/careers", isRoute: true, isBottom: false },
];

// Home
// Our service :
// Our mission :
// Our vision :
// About us :
// Contact us :
// Product :
// Career

const services = [
  {
    title: "Aerial Surveys",
    description: "Conducting aerial surveys for various applications.",
    categories: [
      "Mapping",
      "Video recording",
      "Visual inspection",
      "Thermal inspection",
    ],
    image: "/R.png", // Image link added
  },
  {
    title: "Solar Plant Inspection",
    description:
      "Performing inspections on solar plants for efficiency and maintenance.",
    categories: ["Visual inspection", "Thermal inspection"],
    image: "/R.png", // Image link added
  },
  {
    title: "Transmission Line Inspection",
    description: "Inspecting transmission lines for safety and reliability.",
    categories: ["Visual inspection", "Thermal inspection"],
    image: "/R.png", // Image link added
  },
  {
    title: "Railway Line Inspection",
    description: "Conducting inspections of railway lines to ensure safety.",
    categories: ["Visual inspection"],
    image: "/R.png", // Image link added
  },
  {
    title: "Wind Turbine Inspection",
    description: "Inspections for wind turbines to assess performance.",
    categories: ["Visual inspection", "Thermal inspection"],
    image: "/R.png", // Image link added
  },
  {
    title: "Factory Inspection",
    description: "Conducting inspections in factory environments.",
    categories: ["Visual inspection", "Thermal inspection"],
    image: "/R.png", // Image link added
  },
  {
    title: "Telecom Tower Inspection",
    description: "Inspecting telecom towers for maintenance and safety.",
    categories: ["Visual inspection"],
    image: "/R.png", // Image link added
  },
  {
    title: "Dam Inspection",
    description: "Inspection services for dams to ensure structural integrity.",
    categories: ["Visual inspection"],
    image: "/R.png", // Image link added
  },
  {
    title: "Hydropower Project Inspection",
    description: "Inspections for hydropower projects to ensure compliance.",
    categories: ["Visual inspection"],
    image: "/R.png", // Image link added
  },
  {
    title: "Mine Inspection",
    description:
      "Conducting inspections of mining sites for safety and compliance.",
    categories: ["Visual inspection"],
    image: "/R.png", // Image link added
  },
  {
    title: "River Inspection",
    description: "Inspections of river systems for environmental assessments.",
    categories: ["Visual inspection"],
    image: "/R.png", // Image link added
  },
  {
    title: "Smart Cities Planning",
    description: "Mapping and planning services for smart city development.",
    categories: ["Urban planning", "Mapping"],
    image: "/R.png", // Image link added
  },
  {
    title: "Agriculture Monitoring",
    description: "Utilizing aerial surveys for agricultural assessments.",
    categories: ["Visual inspection", "Thermal inspection"],
    image: "/R.png", // Image link added
  },
  {
    title: "Pipeline Inspection",
    description: "Inspecting pipelines for leaks and structural integrity.",
    categories: ["Visual inspection", "Thermal inspection"],
    image: "/R.png", // Image link added
  },
  {
    title: "Port Inspection",
    description: "Conducting inspections of port facilities.",
    categories: ["Visual inspection"],
    image: "/R.png", // Image link added
  },
  {
    title: "3D Modeling",
    description: "Creating 3D models for various applications.",
    categories: ["Mapping"],
    image: "/R.png", // Image link added
  },
  {
    title: "Contours Analysis",
    description: "Conducting contour analysis for topographical studies.",
    categories: ["Mapping"],
    image: "/R.png", // Image link added
  },
  {
    title: "Cut and Fill Analysis",
    description:
      "Analyzing cut and fill for construction and development projects.",
    categories: ["Mapping"],
    image: "/R.png", // Image link added
  },
  {
    title: "Linear Elevation Analysis",
    description:
      "Performing linear elevation analysis for infrastructure projects.",
    categories: ["Mapping"],
    image: "/R.png", // Image link added
  },
  {
    title: "Thermal Inspection",
    description: "Conducting thermal inspections for efficiency assessments.",
    categories: ["Thermal inspection"],
    image: "/R.png", // Image link added
  },
  {
    title: "Lidar Inspection",
    description:
      "Utilizing Lidar technology for precise mapping and inspection.",
    categories: ["Mapping"],
    image: "/R.png", // Image link added
  },
];

export default services;

export const products = [
  {
    title: "Aerial Surveys",
    description: "Conducting aerial surveys for mapping and inspections.",
    image: "/R.png",
  },
  {
    title: "Solar Plant Inspection",
    description: "Inspections for solar plant efficiency and maintenance.",
    image: "/R.png",
  },
  {
    title: "3D Modeling",
    description: "Creating 3D models for various applications.",
    image: "/R.png",
  },
];

// export default products;

export const gridItems = [
  {
    id: 1,
    title:
      "Our solutions are 20X faster, generating richer data for insightful analytics.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/d4.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "We offer low-cost, fast, and detailed drone-based solutions.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Accurate and rich data for well-informed business decisions.",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/d3.gif",
    spareImg: "/d3.gif",
  },
  {
    id: 4,
    title: "Enhancing productivity through our analytical tools.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    // img: "/grid.svg",
    img: "",
    spareImg: "",
    cssBg: "bg-black",
  },
  {
    id: 5,
    title: "We helps businesses cut expenses efficiently.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "/d5.gif",
  },
  {
    id: 6,
    title: "You can mail us directly",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "",
    img: "",
    nameImg: "/cl11.png",
  },
  {
    id: 2,
    name: "",
    img: "",
    nameImg: "/cl22.svg",
  },
  {
    id: 3,
    name: "",
    img: "",
    nameImg: "/cl3.png",
  },
  {
    id: 4,
    name: "",
    img: "",
    nameImg: "/cl8.png",
  },
  {
    id: 5,
    name: "",
    img: "",
    nameImg: "/cl9.png",
  },
  {
    id: 6,
    name: "",
    img: "",
    nameImg: "/cl7.png",
  },
  {
    id: 7,
    name: "",
    img: "",
    nameImg: "/cl5.jpg",
  },
];

// Import each image
import cl11 from "@/public/cl11.png";
import cl22 from "@/public/cl2.png";
import cl3 from "@/public/cl3.png";
import cl8 from "@/public/cl4.png";
import cl9 from "@/public/cl9.png";
import cl7 from "@/public/cl7.png";
import cl5 from "@/public/cl5.jpg";

// Array of images with width and height
export const companiesLogo = [
  { src: cl11, width: 100, height: 50 },
  { src: cl22, width: 100, height: 50 },
  { src: cl3, width: 100, height: 50 },
  { src: cl8, width: 100, height: 50 },
  { src: cl9, width: 100, height: 50 },
  { src: cl7, width: 100, height: 50 },
  { src: cl5, width: 100, height: 50 },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
