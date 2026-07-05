import { Service, GalleryItem, Testimonial } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "roof-cleaning",
    title: "Roof Cleaning & Moss Removal",
    description: "Professional roof scraped and softwashed, or steam-cleaned to safely eliminate moss, lichen, and black algae. Restores your roof's original color without high-pressure damage.",
    iconName: "ShieldCheck",
    benefits: [
      "Extends roof tile lifespan",
      "Prevents gutter blockages and damp",
      "Treats organic growth at the root",
      "Fully insured safe-access work"
    ],
    features: ["Manual Moss Scraping", "Biocide Softwash Treatment", "Steam Cleaning", "Broken Tile Replacement Check"]
  },
  {
    id: "driveway-patio",
    title: "Driveway & Patio Cleaning",
    description: "Deep-cleaning for block paving, natural stone, concrete, and tarmac. We remove weeds, black spots, lichen, and grime, followed by professional kiln-dried re-sanding or sealing.",
    iconName: "Sparkles",
    benefits: [
      "Removes slippery moss and algae",
      "Incredible cosmetic before/after transformations",
      "Fills joints with premium sand to prevent weed return",
      "Protective sealer options available"
    ],
    features: ["Industrial High-Flow Pressure Washing", "Weed and Moss Treatment", "Kiln-Dried Sand Jointing", "Stain & Oil Removal Treatment"]
  },
  {
    id: "render-cleaning",
    title: "Exterior Wall & Render Cleaning",
    description: "Low-pressure softwash treatment specifically designed for modern renders (K-Rend, Monocouche). Removes red, green, and black organic stains without stripping the surface.",
    iconName: "Layers",
    benefits: [
      "Safe low-pressure softwashing (no render cracking)",
      "Instant, dramatic kerb-appeal upgrade",
      "Long-lasting biocide protection",
      "Restores vibrant building facade color"
    ],
    features: ["Biocide Softwash Spraying", "Hot Low-Pressure Steam Clean", "Algae & Rust Stain Removal", "Cladding & Brick Cleansing"]
  },
  {
    id: "gutter-cleaning",
    title: "Professional Gutter Cleaning",
    description: "Full debris clearance using powerful high-reach gutter vacuum systems. We clear silt, leaves, and moss, and perform full flow checks to protect your home from water damage.",
    iconName: "Droplets",
    benefits: [
      "Prevents costly structural water damage",
      "Ground-based camera inspections",
      "Restores free-flowing rainwater drainage",
      "Fascia and soffit wash-downs included on request"
    ],
    features: ["High-Reach SkyVac Clearance", "Camera-Guided Inspections", "Downpipe Unblocking", "Soffit & Fascia Wash (Optional)"]
  },
  {
    id: "window-fascia",
    title: "Window & Fascia Restoration",
    description: "Pure water-fed pole cleaning for windows, sills, frames, fascias, and soffits. Our purified water dries completely spot-free, leaving your UPVC looking like new.",
    iconName: "Maximize",
    benefits: [
      "Spot-free, smear-free purified water",
      "Reaches up to 3 stories safely from the ground",
      "Deep cleans sills and UPVC frames",
      "Restores stained white fascias"
    ],
    features: ["Deionised Pure Water System", "Frame & Sill Scrubbing", "High-Reach Soffit Washing", "Conservatory Roof Valets"]
  },
  {
    id: "pressure-washing",
    title: "Jet Washing & Cladding Clean",
    description: "Heavy-duty pressure washing for commercial and domestic concrete, brickwork, cladding, garden walls, and pathways, stripping years of atmospheric grime.",
    iconName: "Compass",
    benefits: [
      "Eliminates slippery surfaces for safety",
      "Ideal for walls, steps, and garden pathways",
      "Heavy duty grease & dirt breakdown",
      "Environmentally friendly hot/cold options"
    ],
    features: ["Rotary Surface Cleaner", "Adjustable Pressure Lance", "Commercial Cladding Wash", "Pathway & Steps Descaling"]
  },
  {
    id: "full-transformation",
    title: "Full Exterior Transformations",
    description: "Our signature all-in-one property transformation package. We combine roof, gutter, render, and driveway cleaning to completely revitalize your home's exterior.",
    iconName: "Home",
    benefits: [
      "Saves hassle with a fully coordinated single visit",
      "Completed efficiently within 1-2 days",
      "Maximum kerb-appeal for selling or renting your home",
      "Complete comprehensive care from top to bottom"
    ],
    features: ["Full Property Cleansing Survey", "Coordinated Multi-Service Team", "Complete Eco-Friendly Safe Biocide Coverage", "Guaranteed Quality Handover"]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "Block Paving Driveway Restoration",
    category: "Driveway & Patio",
    beforeUrl: "https://picsum.photos/seed/drivewaybefore/600/450", // Standard placeholder that looks like dirty bricks
    afterUrl: "/images/driveway_cleaning_hero_1783244587378.jpg", // Our premium real generated clean driveway image!
    description: "Full deep-clean, black spot eradication, and re-sanding in Worcestershire. Removed years of embedded moss and weeds."
  },
  {
    id: "g2",
    title: "Clay Tile Roof De-mossing",
    category: "Roof Cleaning",
    beforeUrl: "https://picsum.photos/seed/roofbefore/600/450", // Moss-covered placeholder
    afterUrl: "/images/roof_cleaning_service_1783244609663.jpg", // Our gorgeous generated roof tile image
    description: "Completed safe manual scrape followed by full preventative biocide wash to protect against future moss growth."
  },
  {
    id: "g3",
    title: "Natural Stone Patio Transformation",
    category: "Driveway & Patio",
    beforeUrl: "https://picsum.photos/seed/patiobefore/600/450", // Black dirty patio placeholder
    afterUrl: "/images/patio_cleaning_service_1783244625816.jpg", // Our beautiful clean patio image
    description: "Restored Indian Sandstone patio in Solihull. Removed black spot lichen and applied breathable protective impregnator."
  },
  {
    id: "g4",
    title: "K-Rend Wall Facade Revitalisation",
    category: "Render Cleaning",
    beforeUrl: "https://picsum.photos/seed/wallbefore/600/450",
    afterUrl: "https://picsum.photos/seed/wallclean/600/450",
    description: "Gentle low-pressure softwash to eliminate heavy red and green algae blooms on a detached home."
  },
  {
    id: "g5",
    title: "Commercial Cladding & Gutter Clearance",
    category: "Gutter Cleaning",
    beforeUrl: "https://picsum.photos/seed/gutterbefore/600/450",
    afterUrl: "https://picsum.photos/seed/gutterafter/600/450",
    description: "High-reach vacuum clearing of deeply congested gutters followed by UPVC fascia scrub-down."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Mark Henderson",
    location: "Solihull, West Midlands",
    rating: 5,
    date: "June 2026",
    text: "Beacon did an outstanding job on our block paving driveway and back patio. They removed black spots I thought were permanent and re-sanded everything perfectly. It literally looks brand new. Very professional and polite crew!",
    service: "Driveway & Patio Cleaning"
  },
  {
    id: "t2",
    name: "Sarah Jenkins",
    location: "Bromsgrove, Worcestershire",
    rating: 5,
    date: "May 2026",
    text: "Highly recommend Beacon for roof cleaning! They scraped off thick moss from our roof and treated it with an eco-friendly wash. They were extremely neat, clearing up all the debris from the gardens and patios before they left. 5-star service.",
    service: "Roof Cleaning & Moss Removal"
  },
  {
    id: "t3",
    name: "David Croft",
    location: "Redditch, Worcestershire",
    rating: 5,
    date: "April 2026",
    text: "Beacon softwashed the red algae off our rendered walls and cleared the gutters. The results are amazing – our house hasn't looked this clean in 10 years. Excellent communication from the team from start to finish.",
    service: "Exterior Wall & Render Cleaning"
  },
  {
    id: "t4",
    name: "Emma Wilson",
    location: "Stourbridge, West Midlands",
    rating: 5,
    date: "June 2026",
    text: "We booked the Full Exterior Transformation package before listing our house for sale. The value was incredible and the home looks gorgeous now. The buyer even commented on how clean the driveway and roof were!",
    service: "Full Exterior Transformations"
  }
];

export const BUSINESS_INFO = {
  name: "Beacon Exterior Cleaning Services",
  tagline: "All exterior cleaning services in one place – from roof to driveway and patio.",
  description: "Professional cleaning for roofs, driveways, patios, and all exterior surfaces. Reliable, high-quality, fully-insured UK service.",
  phone: "+44 7708 234054",
  phoneFormatted: "07708 234054",
  email: "beaconexteriorcleaning@gmail.com",
  areasServed: ["Worcestershire", "West Midlands", "Solihull", "Bromsgrove", "Redditch", "Stourbridge", "Birmingham & surrounding areas"],
  workingHours: "Mon - Sat: 8:00 AM - 6:00 PM"
};
