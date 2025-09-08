export interface College {
  id: string;
  name: string;
  location: string;
  state: string;
  domain: string[];
  type: "Government" | "Private" | "Deemed";
  established: number;
  ranking: {
    nirf?: number;
    overall?: number;
  };
  courses: string[];
  fees: {
    min: number;
    max: number;
    currency: "INR";
  };
  cutoff: string;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  website: string;
  accreditation: string[];
  facilities: string[];
  reviews: {
    rating: number;
    totalReviews: number;
    highlights: string[];
    concerns: string[];
  };
}

export const colleges: College[] = [
  // Engineering Colleges
  {
    id: "iit-delhi",
    name: "Indian Institute of Technology Delhi",
    location: "New Delhi",
    state: "Delhi",
    domain: ["Engineering", "Technology"],
    type: "Government",
    established: 1961,
    ranking: { nirf: 2, overall: 1 },
    courses: ["Computer Science", "Mechanical", "Electrical", "Civil", "Chemical"],
    fees: { min: 200000, max: 250000, currency: "INR" },
    cutoff: "JEE Advanced Rank 1-500",
    image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    coordinates: { lat: 28.5449, lng: 77.1928 },
    website: "https://home.iitd.ac.in/",
    accreditation: ["NBA", "NAAC A++"],
    facilities: ["Library", "Hostels", "Labs", "Sports Complex", "Medical Center"],
    reviews: {
      rating: 4.5,
      totalReviews: 2500,
      highlights: ["Excellent faculty", "Great placement record", "World-class infrastructure"],
      concerns: ["High competition", "Stressful environment"]
    }
  },
  {
    id: "iit-bombay",
    name: "Indian Institute of Technology Bombay",
    location: "Mumbai",
    state: "Maharashtra",
    domain: ["Engineering", "Technology"],
    type: "Government",
    established: 1958,
    ranking: { nirf: 3, overall: 2 },
    courses: ["Computer Science", "Mechanical", "Electrical", "Aerospace", "Chemical"],
    fees: { min: 200000, max: 250000, currency: "INR" },
    cutoff: "JEE Advanced Rank 1-400",
    image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg",
    coordinates: { lat: 19.1334, lng: 72.9133 },
    website: "https://www.iitb.ac.in/",
    accreditation: ["NBA", "NAAC A++"],
    facilities: ["Central Library", "Hostels", "Research Labs", "Sports Facilities"],
    reviews: {
      rating: 4.6,
      totalReviews: 3200,
      highlights: ["Top-notch research facilities", "Industry connections", "Alumni network"],
      concerns: ["Very competitive atmosphere", "Heavy workload"]
    }
  },
  {
    id: "iit-madras",
    name: "Indian Institute of Technology Madras",
    location: "Chennai",
    state: "Tamil Nadu",
    domain: ["Engineering", "Technology"],
    type: "Government",
    established: 1959,
    ranking: { nirf: 1, overall: 1 },
    courses: ["Computer Science", "Mechanical", "Electrical", "Ocean Engineering"],
    fees: { min: 200000, max: 250000, currency: "INR" },
    cutoff: "JEE Advanced Rank 1-300",
    image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg",
    coordinates: { lat: 12.9915, lng: 80.2336 },
    website: "https://www.iitm.ac.in/",
    accreditation: ["NBA", "NAAC A++"],
    facilities: ["Central Library", "Hostels", "Research Centers", "Medical Facility"],
    reviews: {
      rating: 4.7,
      totalReviews: 2800,
      highlights: ["Best in India", "Research excellence", "Industry partnerships"],
      concerns: ["Intense academic pressure", "Limited social life"]
    }
  },
  {
    id: "nit-trichy",
    name: "National Institute of Technology Tiruchirappalli",
    location: "Tiruchirappalli",
    state: "Tamil Nadu",
    domain: ["Engineering", "Technology"],
    type: "Government",
    established: 1964,
    ranking: { nirf: 9, overall: 8 },
    courses: ["Computer Science", "Mechanical", "Electrical", "Civil", "ECE"],
    fees: { min: 150000, max: 200000, currency: "INR" },
    cutoff: "JEE Main Rank 1000-5000",
    image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg",
    coordinates: { lat: 10.7590, lng: 78.8147 },
    website: "https://www.nitt.edu/",
    accreditation: ["NBA", "NAAC A"],
    facilities: ["Library", "Hostels", "Labs", "Sports Complex"],
    reviews: {
      rating: 4.3,
      totalReviews: 1800,
      highlights: ["Good faculty", "Decent placements", "Campus life"],
      concerns: ["Infrastructure needs improvement", "Limited research opportunities"]
    }
  },
  {
    id: "bits-pilani",
    name: "Birla Institute of Technology and Science Pilani",
    location: "Pilani",
    state: "Rajasthan",
    domain: ["Engineering", "Technology", "Science"],
    type: "Deemed",
    established: 1964,
    ranking: { nirf: 25, overall: 20 },
    courses: ["Computer Science", "Mechanical", "Electrical", "Chemical", "Civil"],
    fees: { min: 400000, max: 500000, currency: "INR" },
    cutoff: "BITSAT Score 350+",
    image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg",
    coordinates: { lat: 28.3670, lng: 75.5890 },
    website: "https://www.bits-pilani.ac.in/",
    accreditation: ["NBA", "NAAC A"],
    facilities: ["Library", "Hostels", "Labs", "Sports Facilities"],
    reviews: {
      rating: 4.2,
      totalReviews: 2200,
      highlights: ["Industry exposure", "Flexible curriculum", "Good placements"],
      concerns: ["High fees", "Strict attendance policy"]
    }
  },

  // Medical Colleges
  {
    id: "aiims-delhi",
    name: "All India Institute of Medical Sciences Delhi",
    location: "New Delhi",
    state: "Delhi",
    domain: ["Medical", "Healthcare"],
    type: "Government",
    established: 1956,
    ranking: { nirf: 1, overall: 1 },
    courses: ["MBBS", "MD", "MS", "DM", "MCh"],
    fees: { min: 5000, max: 10000, currency: "INR" },
    cutoff: "NEET Rank 1-100",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg",
    coordinates: { lat: 28.5672, lng: 77.2100 },
    website: "https://www.aiims.edu/",
    accreditation: ["MCI", "NAAC A++"],
    facilities: ["Hospital", "Library", "Hostels", "Research Centers"],
    reviews: {
      rating: 4.8,
      totalReviews: 1500,
      highlights: ["Best medical education", "World-class faculty", "Research opportunities"],
      concerns: ["Extremely competitive", "High stress levels"]
    }
  },
  {
    id: "cmc-vellore",
    name: "Christian Medical College Vellore",
    location: "Vellore",
    state: "Tamil Nadu",
    domain: ["Medical", "Healthcare"],
    type: "Private",
    established: 1900,
    ranking: { nirf: 2, overall: 2 },
    courses: ["MBBS", "MD", "MS", "DM"],
    fees: { min: 100000, max: 200000, currency: "INR" },
    cutoff: "NEET Rank 100-500",
    image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg",
    coordinates: { lat: 12.9249, lng: 79.1353 },
    website: "https://www.cmch-vellore.edu/",
    accreditation: ["MCI", "NAAC A"],
    facilities: ["Multi-specialty Hospital", "Library", "Hostels"],
    reviews: {
      rating: 4.6,
      totalReviews: 1200,
      highlights: ["Excellent clinical exposure", "Experienced faculty", "Good infrastructure"],
      concerns: ["High fees for private college", "Limited seats"]
    }
  },

  // Management Colleges
  {
    id: "iim-ahmedabad",
    name: "Indian Institute of Management Ahmedabad",
    location: "Ahmedabad",
    state: "Gujarat",
    domain: ["Management", "Business"],
    type: "Government",
    established: 1961,
    ranking: { nirf: 1, overall: 1 },
    courses: ["MBA", "PGDM", "Executive MBA", "PhD"],
    fees: { min: 2500000, max: 2800000, currency: "INR" },
    cutoff: "CAT 99+ percentile",
    image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg",
    coordinates: { lat: 23.0370, lng: 72.5040 },
    website: "https://www.iima.ac.in/",
    accreditation: ["AACSB", "EQUIS"],
    facilities: ["Library", "Hostels", "Case Study Rooms", "Sports Complex"],
    reviews: {
      rating: 4.7,
      totalReviews: 2000,
      highlights: ["Best MBA in India", "Excellent placements", "Strong alumni network"],
      concerns: ["Extremely competitive", "High academic pressure"]
    }
  },
  {
    id: "iim-bangalore",
    name: "Indian Institute of Management Bangalore",
    location: "Bangalore",
    state: "Karnataka",
    domain: ["Management", "Business"],
    type: "Government",
    established: 1973,
    ranking: { nirf: 3, overall: 2 },
    courses: ["MBA", "PGDM", "Executive MBA"],
    fees: { min: 2400000, max: 2600000, currency: "INR" },
    cutoff: "CAT 98+ percentile",
    image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg",
    coordinates: { lat: 12.9698, lng: 77.6124 },
    website: "https://www.iimb.ac.in/",
    accreditation: ["AACSB", "EQUIS"],
    facilities: ["Library", "Hostels", "Computer Labs", "Sports Facilities"],
    reviews: {
      rating: 4.5,
      totalReviews: 1800,
      highlights: ["Great faculty", "Industry connections", "Beautiful campus"],
      concerns: ["High competition", "Expensive"]
    }
  },

  // Arts & Humanities Colleges
  {
    id: "jnu-delhi",
    name: "Jawaharlal Nehru University",
    location: "New Delhi",
    state: "Delhi",
    domain: ["Arts", "Humanities", "Social Sciences"],
    type: "Government",
    established: 1969,
    ranking: { nirf: 2, overall: 3 },
    courses: ["BA", "MA", "PhD", "MPhil"],
    fees: { min: 5000, max: 15000, currency: "INR" },
    cutoff: "JNUEE Entrance Exam",
    image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    coordinates: { lat: 28.5383, lng: 77.1641 },
    website: "https://www.jnu.ac.in/",
    accreditation: ["NAAC A++", "UGC"],
    facilities: ["Central Library", "Hostels", "Research Centers"],
    reviews: {
      rating: 4.3,
      totalReviews: 1500,
      highlights: ["Academic excellence", "Research opportunities", "Diverse community"],
      concerns: ["Political environment", "Infrastructure issues"]
    }
  },
  {
    id: "du-delhi",
    name: "University of Delhi",
    location: "New Delhi",
    state: "Delhi",
    domain: ["Arts", "Science", "Commerce"],
    type: "Government",
    established: 1922,
    ranking: { nirf: 11, overall: 8 },
    courses: ["BA", "BSc", "BCom", "MA", "MSc"],
    fees: { min: 10000, max: 50000, currency: "INR" },
    cutoff: "CUET Entrance Exam",
    image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg",
    coordinates: { lat: 28.6967, lng: 77.2167 },
    website: "https://www.du.ac.in/",
    accreditation: ["NAAC A++", "UGC"],
    facilities: ["Libraries", "Sports Complex", "Cultural Centers"],
    reviews: {
      rating: 4.1,
      totalReviews: 3000,
      highlights: ["Diverse courses", "Cultural activities", "Good faculty"],
      concerns: ["Overcrowded", "Administrative issues"]
    }
  },

  // Science Colleges
  {
    id: "iisc-bangalore",
    name: "Indian Institute of Science Bangalore",
    location: "Bangalore",
    state: "Karnataka",
    domain: ["Science", "Research", "Engineering"],
    type: "Deemed",
    established: 1909,
    ranking: { nirf: 1, overall: 1 },
    courses: ["BSc Research", "MSc", "PhD", "MTech"],
    fees: { min: 50000, max: 100000, currency: "INR" },
    cutoff: "KVPY/JEE Advanced/GATE",
    image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg",
    coordinates: { lat: 13.0218, lng: 77.5671 },
    website: "https://www.iisc.ac.in/",
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Research Labs", "Library", "Hostels", "Sports Complex"],
    reviews: {
      rating: 4.8,
      totalReviews: 800,
      highlights: ["World-class research", "Excellent faculty", "Beautiful campus"],
      concerns: ["Very competitive", "Limited undergraduate programs"]
    }
  },

  // Commerce Colleges
  {
    id: "srcc-delhi",
    name: "Shri Ram College of Commerce",
    location: "New Delhi",
    state: "Delhi",
    domain: ["Commerce", "Economics"],
    type: "Government",
    established: 1926,
    ranking: { nirf: 3, overall: 5 },
    courses: ["BCom", "BA Economics", "MCom"],
    fees: { min: 15000, max: 25000, currency: "INR" },
    cutoff: "CUET 98+ percentile",
    image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg",
    coordinates: { lat: 28.6967, lng: 77.2167 },
    website: "https://www.srcc.du.ac.in/",
    accreditation: ["NAAC A++", "UGC"],
    facilities: ["Library", "Computer Labs", "Auditorium"],
    reviews: {
      rating: 4.4,
      totalReviews: 1200,
      highlights: ["Excellent placements", "Strong alumni network", "Academic rigor"],
      concerns: ["High cut-offs", "Competitive environment"]
    }
  },

  // Law Colleges
  {
    id: "nlsiu-bangalore",
    name: "National Law School of India University",
    location: "Bangalore",
    state: "Karnataka",
    domain: ["Law", "Legal Studies"],
    type: "Government",
    established: 1987,
    ranking: { nirf: 1, overall: 1 },
    courses: ["BA LLB", "LLM", "PhD"],
    fees: { min: 200000, max: 300000, currency: "INR" },
    cutoff: "CLAT Rank 1-50",
    image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg",
    coordinates: { lat: 12.9698, lng: 77.6124 },
    website: "https://www.nls.ac.in/",
    accreditation: ["BCI", "NAAC A"],
    facilities: ["Law Library", "Moot Court", "Hostels"],
    reviews: {
      rating: 4.6,
      totalReviews: 600,
      highlights: ["Best law school in India", "Excellent faculty", "Great placements"],
      concerns: ["Very competitive", "High academic pressure"]
    }
  }
];

// Additional colleges for comprehensive coverage
export const additionalColleges: College[] = [
  // More Engineering Colleges
  {
    id: "iit-kanpur",
    name: "Indian Institute of Technology Kanpur",
    location: "Kanpur",
    state: "Uttar Pradesh",
    domain: ["Engineering", "Technology"],
    type: "Government",
    established: 1959,
    ranking: { nirf: 4, overall: 3 },
    courses: ["Computer Science", "Mechanical", "Electrical", "Aerospace"],
    fees: { min: 200000, max: 250000, currency: "INR" },
    cutoff: "JEE Advanced Rank 500-1000",
    image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg",
    coordinates: { lat: 26.5123, lng: 80.2329 },
    website: "https://www.iitk.ac.in/",
    accreditation: ["NBA", "NAAC A++"],
    facilities: ["Library", "Hostels", "Labs", "Sports Complex"],
    reviews: {
      rating: 4.4,
      totalReviews: 2100,
      highlights: ["Strong technical programs", "Good research facilities", "Alumni network"],
      concerns: ["Remote location", "Limited industry exposure"]
    }
  },
  {
    id: "iit-kharagpur",
    name: "Indian Institute of Technology Kharagpur",
    location: "Kharagpur",
    state: "West Bengal",
    domain: ["Engineering", "Technology"],
    type: "Government",
    established: 1951,
    ranking: { nirf: 5, overall: 4 },
    courses: ["Computer Science", "Mechanical", "Civil", "Mining"],
    fees: { min: 200000, max: 250000, currency: "INR" },
    cutoff: "JEE Advanced Rank 800-1500",
    image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    coordinates: { lat: 22.3149, lng: 87.3105 },
    website: "https://www.iitkgp.ac.in/",
    accreditation: ["NBA", "NAAC A++"],
    facilities: ["Central Library", "Hostels", "Research Centers"],
    reviews: {
      rating: 4.3,
      totalReviews: 2500,
      highlights: ["Oldest IIT", "Strong alumni base", "Diverse programs"],
      concerns: ["Infrastructure aging", "Location challenges"]
    }
  },
  {
    id: "nit-warangal",
    name: "National Institute of Technology Warangal",
    location: "Warangal",
    state: "Telangana",
    domain: ["Engineering", "Technology"],
    type: "Government",
    established: 1959,
    ranking: { nirf: 19, overall: 15 },
    courses: ["Computer Science", "Mechanical", "Electrical", "Civil"],
    fees: { min: 150000, max: 200000, currency: "INR" },
    cutoff: "JEE Main Rank 2000-8000",
    image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg",
    coordinates: { lat: 17.9784, lng: 79.5941 },
    website: "https://www.nitw.ac.in/",
    accreditation: ["NBA", "NAAC A"],
    facilities: ["Library", "Hostels", "Labs", "Sports Facilities"],
    reviews: {
      rating: 4.2,
      totalReviews: 1600,
      highlights: ["Good placements", "Active campus life", "Strong technical programs"],
      concerns: ["Limited research opportunities", "Infrastructure needs upgrade"]
    }
  },
  {
    id: "vit-vellore",
    name: "Vellore Institute of Technology",
    location: "Vellore",
    state: "Tamil Nadu",
    domain: ["Engineering", "Technology"],
    type: "Private",
    established: 1984,
    ranking: { nirf: 15, overall: 12 },
    courses: ["Computer Science", "Mechanical", "Electrical", "Biotechnology"],
    fees: { min: 300000, max: 500000, currency: "INR" },
    cutoff: "VITEEE Rank 1-10000",
    image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg",
    coordinates: { lat: 12.9698, lng: 79.1559 },
    website: "https://vit.ac.in/",
    accreditation: ["NBA", "NAAC A++"],
    facilities: ["Modern Labs", "Hostels", "Sports Complex", "Library"],
    reviews: {
      rating: 4.0,
      totalReviews: 2800,
      highlights: ["Good infrastructure", "Industry connections", "International exposure"],
      concerns: ["High fees", "Strict rules", "Large batch sizes"]
    }
  },
  {
    id: "manipal-institute",
    name: "Manipal Institute of Technology",
    location: "Manipal",
    state: "Karnataka",
    domain: ["Engineering", "Technology"],
    type: "Private",
    established: 1957,
    ranking: { nirf: 45, overall: 35 },
    courses: ["Computer Science", "Mechanical", "Electronics", "Information Technology"],
    fees: { min: 350000, max: 450000, currency: "INR" },
    cutoff: "MET Entrance Exam",
    image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg",
    coordinates: { lat: 13.3525, lng: 74.7854 },
    website: "https://manipal.edu/",
    accreditation: ["NBA", "NAAC A"],
    facilities: ["Modern Infrastructure", "Hostels", "Research Centers"],
    reviews: {
      rating: 3.9,
      totalReviews: 2200,
      highlights: ["Good campus life", "Industry exposure", "International programs"],
      concerns: ["Expensive", "Variable faculty quality"]
    }
  }
];

// Combine all colleges
export const allColleges = [...colleges, ...additionalColleges];

// Helper functions
export const getCollegesByDomain = (domain: string): College[] => {
  return allColleges.filter(college => 
    college.domain.some(d => d.toLowerCase().includes(domain.toLowerCase()))
  );
};

export const getCollegesByState = (state: string): College[] => {
  return allColleges.filter(college => 
    college.state.toLowerCase() === state.toLowerCase()
  );
};

export const getCollegeById = (id: string): College | undefined => {
  return allColleges.find(college => college.id === id);
};