import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    toyota,
    bmw,
    golf
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Services",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Interior Detailing",
      icon: web,
    },
    {
      title: "Exterior Detailing",
      icon: mobile,
    },
    {
      title: "Paint Correction",
      icon: backend,
    },
    {
      title: "Ceramic Coating",
      icon: creator,
    },
    {
      title: "Engine Bay Detailing",
      icon: creator,
    },
    {
      title: "Glass Treatment",
      icon: creator,
    },
    {
      title: "Wheel & Tyre Detailing",
      icon: creator,
    },
    {
      title: "Undercarriage Cleaning",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Exterior Detailing",
      company_name: "",
      icon: starbucks,
      iconBg: "#383E56",
      date: "",
      points: [
        "Give your ride a spa day with our expert hand wash, making it shine like new",
        "Revive your car's beauty with our paint correction magic, erasing scratches and swirls.",
        "Experience smooth perfection as we use clay to remove contaminants and leave your car flawless",
        
      ],
    },
    {
      title: "Interior Detailing",
      company_name: "",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Rediscover the comfort of your car with our thorough and refreshing interior cleaning.",
        "Indulge your seats in luxury with our premium leather conditioning, bringing back that softness",
        "Bid farewell to unwanted odors as we leave your car smelling fresh and inviting",
        
      ],
    },
    {
      title: "Engine Bay Revitalisation",
      company_name: "",
      icon: shopify,
      iconBg: "#383E56",
      date: "",
      points: [
        "Experience the heart of your car come alive with our revitalizing engine bay cleaning",
        "Wave goodbye to grime as we meticulously cleanse your engine bay, making it shine like new.",
        "Keep your engine running strong and protected from the elements with our expert detailing",
        
      ],
    },
    {
      title: "Paint Perfection",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Transform your car's appearance with our paint correction service, unveiling its true beauty",
        "Bid farewell to unsightly swirls and scratches, revealing a flawless, glossy finish",
        "Witness a mirror-like reflection as we restore your paint's brilliance to showroom quality",
      
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Got my rear car windows tinted and roof, wing mirrors and spoiler wrapped. All work done was completed quickly and to a very high quality. Great customer service and price. Would highly recommend to anyone looking to get to have work done on their car.",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "Got my windows and front and back lights tinted , very satisfied with the professional service provided ,would definitely recommend to anyone , prices are very reasonable , great customer service too , overall happy with everything.",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "Done a fantastic job doing the tint for my back windows and also done the rest of the modifications I asked for to a high quality, would recommend to anyone looking for any customisation on their car",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "BMW Tint",
      description:
        "",
      tags: [
        {
          name: "windowtint",
          color: "blue-text-gradient",
        },
        {
          name: "smokedlights",
          color: "green-text-gradient",
        },
        {
          name: "blackout",
          color: "pink-text-gradient",
        },
      ],
      image: bmw,
      source_code_link: "https://www.instagram.com/vm_tintsandwraps/",
    },
    {
      name: "Toyota Tint",
      description:
        "",
      tags: [
        {
          name: "windowtint",
          color: "blue-text-gradient",
        },
        {
          name: "wrapping",
          color: "green-text-gradient",
        },
        {
          name: "racingstripes",
          color: "pink-text-gradient",
        },
      ],
      image: toyota,
      source_code_link: "https://www.instagram.com/vm_tintsandwraps/",
    },
    {
      name: "Golf Tint",
      description:
        "",
      tags: [
        {
          name: "tinting",
          color: "blue-text-gradient",
        },
        {
          name: "carwraps",
          color: "green-text-gradient",
        },
        {
          name: "carguys",
          color: "pink-text-gradient",
        },
      ],
      image: golf,
      source_code_link: "https://www.instagram.com/vm_tintsandwraps/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };