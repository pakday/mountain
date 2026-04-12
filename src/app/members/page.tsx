import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Member Directory",
  description:
    "Browse our member business directory serving Riverton, Herriman, and Bluffdale, Utah.",
};

/* ─── data ─────────────────────────────────────────────── */

type Member = {
  name: string;
  contact?: string;
  phone?: string;
  address?: string;
  url?: string;
};

type Category = {
  id: string;
  label: string;
  members: Member[];
};

const categoriesAM: Category[] = [
  {
    id: "accounting",
    label: "Accounting",
    members: [],
  },
  {
    id: "advertising",
    label: "Advertising",
    members: [
      {
        name: "City Publication SLC South",
        contact: "Heidi Patzold",
        phone: "385-336-7006",
        address: "4993 W. Rose Quartz Rd., Herriman, UT 84096",
        url: "https://www.citypubnationwide.com/salt-lake-city-south/",
      },
      {
        name: "EXPAND Business Solutions, Inc.",
        contact: "Ed Brinton",
        phone: "801-641-0789",
        address: "11654 Hidden Valley Blvd., Sandy, UT 84092",
        url: "http://www.expandbusinesssolutions.com",
      },
      {
        name: "My City Journals",
        contact: "Bryan Scott",
        phone: "801-264-6649",
        address: "9500 S. 500 W., Suite 205, Sandy, UT 84070",
        url: "https://www.valleyjournals.com/",
      },
      {
        name: "Viteri & Associates Advertising",
        contact: "Elena Viteri",
        phone: "801-759-1139",
        address: "5064 W. Valmont Way, Herriman, UT 84096",
      },
    ],
  },
  {
    id: "apartments",
    label: "Apartments",
    members: [
      {
        name: "Legacy Springs Apartments",
        contact: "Rayito Lessard",
        phone: "801-208-3900",
        address: "12657 S. Legacy Springs Drive, Riverton, UT 84065",
        url: "https://www.legacyspringsapts.com/",
      },
      {
        name: "Incline at Anthem",
        contact: "Renae Cook",
        phone: "(801) 727-3800",
        address: "11901 S. Freedom Park Dr., Herriman, UT 84096",
        url: "https://www.inclineatanthem.com",
      },
    ],
  },
  {
    id: "architects",
    label: "Architects",
    members: [
      {
        name: "Fred C. Cox Architect",
        contact: "Fred Cox",
        phone: "801-968-3733",
        address: "4466 Early Duke Street, West Valley City, UT",
        url: "http://www.fredccox.com/",
      },
    ],
  },
  {
    id: "assisted",
    label: "Assisted & Independent Living",
    members: [
      {
        name: "Legacy Retirement Center",
        contact: "Lelani Palmer",
        phone: "801-253-4556",
        address: "1617 West Temple Lane, South Jordan, UT 84095",
        url: "https://legacyretiresouthjordan.com/",
      },
    ],
  },
  {
    id: "attorney",
    label: "Attorneys",
    members: [
      {
        name: "Eternal Estate Planning",
        contact: "Crystal Flynn",
        phone: "801-631-0298",
        address: "7533 Center View Ct., West Jordan, UT 84084",
        url: "https://www.eternalep.com/",
      },
    ],
  },
  {
    id: "autoservices",
    label: "Auto Services",
    members: [
      {
        name: "Les Schwab Tire Center",
        contact: "Nickolas Kinion",
        phone: "385-529-5552",
        address: "5232 West Anthem Peak Lane, Herriman, UT 84096",
        url: "https://www.lesschwab.com/store/?storeId=529",
      },
      {
        name: "Intermountain Tire Pros",
        contact: "Robert Christensen",
        phone: "801-878-9444",
        address: "13333 S. Towne Market Place, Herriman, UT 84065",
        url: "https://www.intermountaintirepros.com/",
      },
      {
        name: "Master Muffler",
        contact: "Barbara Madsen",
        phone: "801-506-6007",
        address: "2284 West 12600 South, Riverton, UT",
        url: "https://riverton.mastermuffler.net/",
      },
      {
        name: "McNeils Auto Care",
        contact: "Manny Lopez",
        phone: "801-302-5935",
        address: "3311 West 12600 South, Riverton, UT 84065",
        url: "https://mcneilsutah.com",
      },
      {
        name: "Tint World",
        contact: "Terry Wood",
        phone: "801-784-2060",
        address: "14659 South 855 West, Bluffdale, UT 84065",
        url: "https://www.tintworld.com",
      },
    ],
  },
  {
    id: "bakery",
    label: "Bakery",
    members: [
      {
        name: "JulieAnn Caramels",
        contact: "Tanner",
        phone: "(385) 225-6920",
        address: "14587 S 790 W Suite C-103, Bluffdale, UT 84065",
        url: "https://julieanncaramels.com/",
      },
      {
        name: "Nothing Bundt Cakes",
        contact: "Mike",
        phone: "801-619-3757",
        address: "10389 S. State Street, Sandy, UT",
        url: "https://www.nothingbundtcakes.com/bakery/ut/sandy",
      },
    ],
  },
  {
    id: "banking",
    label: "Banking",
    members: [
      {
        name: "CC Bank",
        contact: "Will Dickerson",
        phone: "801-615-7660",
        address: "49 W University Pkwy, Orem, UT",
        url: "https://ccbank.com/locations/orem",
      },
      {
        name: "First Utah Bank",
        contact: "Aubrey Clay",
        phone: "(801) 316-6700",
        address: "4168 W 12600 S, Riverton, UT 84065",
      },
      {
        name: "US Bank",
        contact: "Amber Topham",
        phone: "801-701-2235",
        address: "13383 S. Rock Wren Lane, Riverton, UT 84065",
        url: "https://www.usbank.com/locations/utah/riverton/",
      },
      {
        name: "Zions Bank",
        contact: "Jon Lewis",
        phone: "801-215-0111",
        address: "5048 W. Herriman Blvd, Herriman, UT 84096",
        url: "https://www.zionsbank.com",
      },
    ],
  },
  {
    id: "businessservices",
    label: "Business Services & Furniture",
    members: [
      {
        name: "Economic Development Corp of Utah",
        phone: "801-328-8824",
        address: "201 South Main Street #2010, Salt Lake City, UT",
      },
      {
        name: "EXPAND Business Solutions, Inc.",
        contact: "Ed Brinton",
        phone: "801-641-0789",
        address: "11654 Hidden Valley Blvd., Sandy, UT 84092",
        url: "http://www.expandbusinesssolutions.com",
      },
      {
        name: "Main Street Office Furniture",
        phone: "385-384-0507",
        address: "3965 S. State St, Salt Lake City, UT 84107",
        url: "https://msof.com/",
      },
      {
        name: "Megaplex – The District",
        phone: "801-304-4052",
        address: "3751 W. Parkway Plaza Dr., South Jordan, UT 84095",
        url: "https://www.megaplextheatres.com/i/private_events",
      },
      {
        name: "My City Journals",
        contact: "Brian Scott",
        phone: "801-264-6649",
        address: "4001 S. 700 E., Salt Lake City, UT 84107",
        url: "https://www.valleyjournals.com/",
      },
      {
        name: "Rocky Mountain Power",
        phone: "801-220-4437",
        address: "201 South Main, Suite 2300, Salt Lake City, UT 84111",
      },
      {
        name: "Teleira",
        contact: "KanaMarie Poulson",
        phone: "866-576-3231",
        address: "14901 Heritage Crest Way Suite B, Bluffdale, UT",
        url: "https://teleira.com/",
      },
      {
        name: "The UPS Store",
        contact: "Pattie Pearce",
        phone: "801-446-1906",
        address: "1878 West 12600 South, Riverton, UT 84065",
        url: "https://locations.theupsstore.com/ut/riverton/1878-w-12600-south",
      },
      {
        name: "CMIT Solutions",
        contact: "Stephanie Isiko",
        phone: "385-255-9528",
        address: "Herriman, UT 84065",
        url: "https://cmitsolutions.com/sandy-ut-1080/",
      },
      {
        name: "ZenBusiness",
        phone: "844-493-6249",
        address: "5511 Parkcrest Dr. Ste 103, Austin, TX 78731",
        url: "https://www.zenbusiness.com/",
      },
    ],
  },
  {
    id: "carwash",
    label: "Car Wash",
    members: [
      {
        name: "Crystal Clean Car Wash II",
        contact: "Brett Stewart",
        phone: "801-707-7011",
        address: "12569 South 1580 West, Riverton, UT",
      },
      {
        name: "Quick Quack Car Wash – Herriman",
        contact: "Maddie Jackson",
        phone: "806-670-6496",
        address: "13400 South 5702 West, Herriman, UT 84096",
      },
      {
        name: "Quick Quack Car Wash – Bluffdale",
        contact: "Maddie Jackson",
        phone: "806-670-6496",
        address: "1896 W Porter Rockwell Blvd, Bluffdale, UT 84065",
      },
      {
        name: "Quick Quack Car Wash – Riverton",
        contact: "Madie Jackson",
        phone: "801-668-5248",
        address: "4148 W 13400 S, Riverton, UT 84065",
      },
    ],
  },
  {
    id: "caterers",
    label: "Caterers",
    members: [
      {
        name: "Isabellas Experience Catering",
        contact: "James & Isabella Lake",
        phone: "801-255-9504",
        address: "2674 West 9000 South, West Jordan, UT",
        url: "http://isabellascatering.com/",
      },
      {
        name: "Salsa Leedos",
        contact: "Travis Bonino",
        phone: "801-565-8818",
        address: "3956 West 13400 South, Riverton, UT",
        url: "https://salsaleedos.net/",
      },
    ],
  },
  {
    id: "chiropractors",
    label: "Chiropractors",
    members: [
      {
        name: "Atomic Pilates & Chiropractic",
        contact: "Ryan Griffeth",
        phone: "801-901-0867",
        address: "14003 South Redwood Road, Bluffdale, UT 84065",
        url: "https://atomicpilateschiro.com/",
      },
      {
        name: "Mind, Body, Soul Chiropractic",
        contact: "Dr. JC Allen",
        phone: "(435) 994-8599",
        address: "14241 S. Redwood Road A130, Bluffdale, UT 84065",
        url: "https://chiropracticsoul.com/",
      },
      {
        name: "Iron Mountain Chiropractic",
        contact: "Dr. Clayton Horstman",
        phone: "(385) 274-4185",
        address: "13268 South 5600 West, Herriman, UT 84096",
        url: "https://www.ironmtnchiro.com/",
      },
    ],
  },
  {
    id: "churches",
    label: "Churches",
    members: [
      {
        name: "Holy Trinity Lutheran Church",
        contact: "Rev. Al Borcher",
        phone: "801-860-6412",
        address: "13249 S. Redwood Road, Riverton, UT 84065",
        url: "https://www.holytrinityut.org/",
      },
    ],
  },
  {
    id: "cleaners",
    label: "Cleaners",
    members: [],
  },
  {
    id: "construction",
    label: "Construction & Countertops",
    members: [
      {
        name: "Arches Roofing",
        contact: "Matthew Elisan",
        phone: "(804) 336-3096",
        address: "11743 S. Hill Stone Dr., South Jordan, UT 84009",
        url: "https://archesroofingutah.com/",
      },
      {
        name: "Brady Roofing",
        contact: "Jameson Jenkins",
        phone: "(385) 317-3659",
        address: "1024 W Emily Francis Cir, South Jordan, UT 84095",
        url: "https://www.bradyroofing.com/south-jordan",
      },
      {
        name: "Groundworks",
        contact: "Bayleigh Stelling",
        phone: "(386) 899-2775",
        address: "16332 S. Bringhurst Blvd, Bluffdale, UT 84065",
        url: "https://www.groundworks.com/",
      },
      {
        name: "Pinnacle Stone Design",
        contact: "Morgan May",
        phone: "(801) 722-8867",
        address: "14100 South Redwood Road, Riverton, UT",
        url: "https://www.pinnaclestonedesign.com/",
      },
      {
        name: "Re-Up Construction",
        contact: "Neru Palu",
        phone: "(385) 257-9334",
        address: "1111 W 590 N, Provo, UT 84601",
        url: "https://www.re-upconstruction.com",
      },
      {
        name: "Staker Parson Companies",
        contact: "Mike Kurz",
        phone: "(801) 731-1111",
        address: "2350 South 1900 West, Ogden, UT",
        url: "https://stakerparson.com/",
      },
    ],
  },
  {
    id: "counseling",
    label: "Counseling",
    members: [
      {
        name: "Monarch Family Counseling",
        contact: "Sarah Stroup",
        phone: "801-349-9606",
        address: "5629 West 13100 South, Herriman, UT 84096",
        url: "https://monarchfamilycounseling.com",
      },
      {
        name: "South Valley Services",
        phone: "801-255-1095",
        address: "PO Box 1028, West Jordan, UT 84084",
        url: "https://svsutah.org/en/home/",
      },
    ],
  },
  {
    id: "creditunions",
    label: "Credit Unions",
    members: [
      {
        name: "America First Credit Union – Riverton",
        contact: "Ashley Perry",
        phone: "801-215-3146",
        address: "12600 S 3600 W, Riverton, UT",
        url: "https://www.americafirst.com/",
      },
      {
        name: "America First Credit Union – Herriman",
        contact: "Shea Quintanna",
        phone: "801-215-3740",
        address: "5438 West 13400 South, Herriman, UT 84096",
        url: "https://www.americafirst.com/",
      },
      {
        name: "Canyon View Credit Union",
        phone: "801-481-8876",
        address: "13347 S. Market Center Dr., Riverton, UT 84065",
      },
      {
        name: "Chartway Credit Union",
        phone: "801-856-9974",
        address: "3557 W 9800 S, South Jordan, UT 84095",
        url: "https://www.chartway.com/",
      },
      {
        name: "Goldenwest Credit Union – Bluffdale",
        contact: "Andrea Summerhays",
        phone: "801-428-7953",
        address: "13903 South Redwood Road, Bluffdale, UT 84065",
        url: "https://www.gwcu.org",
      },
      {
        name: "Goldenwest Credit Union – Herriman",
        contact: "Lana White",
        phone: "801-786-8497",
        address: "5573 W. 13400 South, Herriman, UT 84096",
        url: "https://www.gwcu.org",
      },
      {
        name: "Hercules Credit Union – Riverton",
        phone: "385-275-0579",
        address: "1543 West 12600 South Unit 103, Riverton, UT 84065",
        url: "https://herculescu.com/",
      },
      {
        name: "Hercules Credit Union – Herriman",
        contact: "Angie Ockerman",
        phone: "385-275-0581",
        address: "13238 S. Rosecrest Road, Herriman, UT 84096",
        url: "https://herculescu.com/",
      },
      {
        name: "Hercules First Credit Union",
        contact: "Kami Dixon",
        phone: "(801) 968-9011",
        address: "3141 West 4700 South, Taylorsville, UT 84129",
        url: "https://herculescu.com/",
      },
      {
        name: "Jordan Credit Union",
        contact: "Cyndi Coyle",
        phone: "801-253-5152",
        address: "2523 West 12600 South, Riverton, UT 84065",
      },
      {
        name: "Utah Community Credit Union",
        phone: "(801) 223-8188",
        address: "13372 S. Rosecrest Road, Herriman, UT 84096",
        url: "https://www.uccu.com/",
      },
    ],
  },
  {
    id: "daycare",
    label: "Daycare",
    members: [
      {
        name: "ABC Great Beginnings",
        contact: "Kellirae Long",
        phone: "801-316-1071",
        address: "12523 South 4150 West, Riverton, UT",
        url: "https://www.abcgreatbeginnings.com/locations/riverton/",
      },
      {
        name: "Bear-O-Care",
        contact: "Mike Braga",
        phone: "801-419-4731",
        address: "2464 West 12600 South Suite 180, Riverton, UT",
        url: "https://www.bearocare.org/",
      },
      {
        name: "Children's Courtyard",
        contact: "Melanee Knorr",
        phone: "385-543-3059",
        address: "13880 S 2700 W, Bluffdale, UT 84065",
        url: "https://www.childrenscourtyard.com",
      },
    ],
  },
  {
    id: "dentists",
    label: "Dentists & Orthodontists",
    members: [
      {
        name: "Boulder Corridor Dental Care",
        phone: "(385) 340-7505",
        address: "14723 S. Marketplace Dr, Ste B, Herriman, UT 84096",
        url: "https://www.bouldercorridordentalcare.com/",
      },
      {
        name: "South Hills Pediatric Dentistry",
        contact: "Dr. Sloan",
        phone: "385-210-1000",
        address: "4013 West 13400 South, Riverton, UT 84096",
        url: "http://www.southhillsdentalspecialists.com",
      },
      {
        name: "Talbot Orthodontics",
        contact: "Travis Talbot",
        phone: "801-446-7175",
        address: "2364 West 12600 South Suite 2-C, Riverton, UT",
        url: "https://www.talbotbraces.com/",
      },
    ],
  },
  {
    id: "education",
    label: "Education",
    members: [
      {
        name: "Athlos Academy of Utah",
        contact: "Alan Anderson",
        phone: "801-438-4619",
        address: "12309 Mustang Trail Way, Herriman, UT 84096",
        url: "http://www.athlosutah.org/",
      },
      {
        name: "Herriman High School",
        contact: "Lynn Allred",
        phone: "801-567-8530",
        address: "11917 S. Mustang Trail Way, Herriman, UT 84096",
        url: "https://herrimanhigh.org/",
      },
      {
        name: "Jordan Applied Tech Center",
        phone: "801-256-5906",
        address: "9301 South Wight Fort Road, West Jordan, UT 84088",
        url: "https://www.jordantech.org/",
      },
      {
        name: "Kiddie Academy of Herriman",
        contact: "Drashti Kaneria",
        phone: "435-233-4849",
        address: "5158 West Denali Park Drive, Herriman, UT 84096",
        url: "https://kiddieacademy.com/",
      },
      {
        name: "Providence Hall",
        contact: "Nathan Hall",
        phone: "801-432-7866",
        address: "4557 West Patriot Ridge Road, Herriman, UT 84096",
        url: "https://providencehall.com",
      },
      {
        name: "Riverton High School",
        phone: "801-256-5801",
        address: "12476 Silverwolf Way, Riverton, UT 84065",
        url: "http://rivertonhigh.org/",
      },
      {
        name: "Salt Lake Community College",
        contact: "Scott Brown",
        phone: "801-957-2020",
        address: "231 East 400 South, Salt Lake City, UT 84101",
        url: "http://www.slcc.edu/",
      },
      {
        name: "St. Andrew Catholic School",
        phone: "801-253-6000",
        address: "11835 South 3600 West, Riverton, UT",
        url: "https://www.sacs.family/",
      },
      {
        name: "Summit Academy K-6 Bluffdale",
        phone: "801-254-9488",
        address: "1940 West 14400 South, Bluffdale, UT 84065",
        url: "https://www.summitacademyschools.org/",
      },
      {
        name: "Summit Academy K-8 Independence",
        phone: "801-987-8755",
        address: "15327 South 1000 West, Bluffdale, UT 84065",
        url: "https://www.summitacademyschools.org/",
      },
      {
        name: "Summit Academy High School",
        phone: "801-495-3272",
        address: "14942 South 560 West, Bluffdale, UT 84065",
        url: "https://www.summitacademyschools.org/",
      },
    ],
  },
  {
    id: "engineering",
    label: "Engineering",
    members: [],
  },
  {
    id: "entertainment",
    label: "Entertainment",
    members: [
      {
        name: "Fat Cats Fun",
        phone: "808-723-9752",
        address: "13901 South 1550 West, Bluffdale, UT 84065",
        url: "https://www.fatcatsfun.com/locations/bluffdale/",
      },
    ],
  },
  {
    id: "eventplan",
    label: "Event Planning",
    members: [
      { name: "Events by Lyla", contact: "Lyla Nock", phone: "385-444-0534" },
      {
        name: "Wasatch Party Rentals",
        contact: "Brian Cowley",
        phone: "801-406-7878",
        address: "5704 W. Hitching Post Ct., Herriman, UT 84096",
        url: "https://www.wasatchpartyrentals.com/",
      },
    ],
  },
  {
    id: "eyecare",
    label: "Eye Care",
    members: [
      {
        name: "Family Focused Eyecare",
        contact: "Paul Hulet",
        phone: "801-302-3080",
        address: "5528 West 13400 South, Herriman, UT",
        url: "http://visionbeyond2020.com/",
      },
    ],
  },
  {
    id: "farmers",
    label: "Farmer's Markets",
    members: [
      {
        name: "Good4Life Markets",
        contact: "Denise Christensen",
        phone: "801-413-8973",
        address: "6772 West Clear Water Drive, Herriman, UT 84096",
      },
    ],
  },
  {
    id: "financialservices",
    label: "Financial Services",
    members: [
      {
        name: "Cyprus Credit Union",
        contact: "Toni Pelcastre",
        phone: "801-446-5454",
        address: "13717 South Redwood Road, Riverton, UT 84065",
        url: "https://www.cypruscu.com/",
      },
      {
        name: "Edward Jones – Riverton",
        contact: "Spencer Royce",
        phone: "801-890-0999",
        address: "2364 W 12600 S Ste E, Riverton, UT 84096",
        url: "https://www.edwardjones.com/us-en/financial-advisor/spencer-royce",
      },
      {
        name: "Edward Jones – Riverton (2)",
        contact: "Megan Bennett",
        phone: "801-601-1110",
        address: "12523 Creek Meadow Rd Suite 101, Riverton, UT 84065",
      },
      {
        name: "Granite Credit Union",
        contact: "Erika Bodily",
        phone: "(385) 288-3124",
        address: "12538 Creek Meadow Rd., Riverton, UT 84065",
      },
      {
        name: "Jordan Credit Union",
        contact: "Cyndi Coyle",
        phone: "801-253-5152",
        address: "2523 West 12600 South, Riverton, UT 84065",
        url: "https://jordan-cu.org/",
      },
      {
        name: "University Federal Credit Union",
        phone: "801-481-8876",
        address: "13347 S. Market Center Dr., Riverton, UT 84065",
        url: "https://www.ucreditu.com/contact/riverton-branch.html",
      },
    ],
  },
  {
    id: "fitness",
    label: "Fitness",
    members: [
      {
        name: "Adaptive Arena",
        contact: "Ashley Guymon",
        phone: "(801) 917-2838",
        address: "14675 South 855 West, Bluffdale, UT 84065",
        url: "https://adaptivearena.org/",
      },
    ],
  },
  {
    id: "flooring",
    label: "Flooring",
    members: [
      {
        name: "AFS Flooring",
        contact: "Aaron Higgs",
        phone: "801-859-1224",
        address: "5629 West 13100 South, Herriman, UT 84065",
        url: "https://thecarpetbus.com/",
      },
      {
        name: "Bowcutt's Flooring America",
        contact: "Nathan Bowcutt",
        phone: "(801) 256-9200",
        address: "13863 S. 2700 W. Suite 208, Bluffdale, UT 84065",
        url: "https://www.bowcuttsflooringamerica.com/",
      },
    ],
  },
  {
    id: "floral",
    label: "Floral",
    members: [
      {
        name: "The Rose Shop",
        contact: "Tami Long",
        phone: "801-254-7673",
        address: "3688 West 12600 South, Riverton, UT 84065",
        url: "http://www.roseshopflowers.com/",
      },
    ],
  },
  {
    id: "funeralservices",
    label: "Funeral Services",
    members: [
      {
        name: "Broomhead Funeral Home",
        contact: "Caesar Procunier",
        phone: "801-254-3389",
        address: "12590 McDougal Drive, Riverton, UT",
        url: "https://www.broomheadfuneralhome.com/",
      },
      {
        name: "Family Funeral Care",
        contact: "David White",
        phone: "801-253-2795",
        address: "13001 South 3600 West, Riverton, UT 84065",
        url: "https://Utahfamilyfuneralcare.com",
      },
      {
        name: "Larkin Mortuary",
        contact: "Mitch",
        phone: "801-254-4850",
        address: "3688 West 12600 South, Riverton, UT 84065",
        url: "https://www.larkinmortuary.com/",
      },
      {
        name: "Serenity Funeral Home",
        contact: "Lehi Rodriguez",
        phone: "801-255-2801",
        address: "13863 South 2700 West, Bluffdale, UT 84065",
        url: "https://www.serenityfhs.com",
      },
    ],
  },
  {
    id: "golf",
    label: "Golf",
    members: [
      {
        name: "Apex Golf",
        contact: "Scott Cunningham",
        phone: "801-718-2144",
        address: "12300 South 185 East Suite 100, Draper, UT 84020",
        url: "https://www.apexgolfinstruction.com",
      },
    ],
  },
  {
    id: "grocery",
    label: "Grocery Stores",
    members: [
      {
        name: "Lee's Marketplace",
        contact: "Ryan Morris",
        phone: "801-540-3496",
        address: "4083 W. Marketplace Drive, Herriman, UT 84096",
        url: "https://www.leesmarketplace.com",
      },
      {
        name: "The Nut Garden",
        phone: "801-860-0336",
        address: "13863 South 2700 West #204, Bluffdale, UT 84065",
      },
      {
        name: "Peterson Fresh Market",
        contact: "Monte Peterson",
        phone: "801-254-0761",
        address: "1784 West 12600 South, Riverton, UT",
      },
    ],
  },
  {
    id: "handyman",
    label: "Handyman",
    members: [
      {
        name: "Handy Hammer",
        contact: "Dylan Stump",
        phone: "720-270-5870",
        address: "13073 South Twisted Oak Drive, Herriman, UT 84096",
        url: "http://handyhammer.co",
      },
    ],
  },
  {
    id: "hardware",
    label: "Hardware",
    members: [
      {
        name: "ACE Hardware of Herriman",
        contact: "John Powell",
        phone: "801-890-4451",
        address: "13342 S. 5600 W., Herriman, UT 84096",
      },
    ],
  },
  {
    id: "healthservices",
    label: "Health Services",
    members: [
      {
        name: "Atomic Pilates & Chiropractic",
        contact: "Ryan Griffeth",
        phone: "(801) 901-0867",
        address: "14003 S. Redwood Rd. Suite 200, Bluffdale, UT 84065",
        url: "https://atomicpilateschiro.com/",
      },
      {
        name: "Bear-O-Care",
        contact: "Mike Braga",
        phone: "801-419-4731",
        address: "2464 West 12600 South Ste 180, Riverton, UT",
        url: "https://www.bearocare.org/",
      },
      {
        name: "Foundation PT",
        contact: "Brad Powell",
        phone: "(801) 981-5171",
        address: "11962 Anthem Park Blvd, Herriman, UT 84096",
        url: "https://foundationptutah.com/",
      },
      {
        name: "Hydrate IV Bar",
        contact: "Keshia Smallwood",
        phone: "(801) 548-2523",
        address: "968 South Jordan Pkwy Ste B, South Jordan, UT 84095",
        url: "https://hydrateivbar.com/locations/south-jordan/",
      },
      {
        name: "Kinetic Physical Therapy",
        phone: "(801) 303-1991",
        address: "5089 West Herriman Blvd. Suite 2B, Herriman, UT 84096",
        url: "https://kinetic-pt.net",
      },
      {
        name: "Lone Peak Hospital",
        contact: "JD Drasbek",
        address: "13306 South Fort Herriman Pkwy, Herriman, UT",
        url: "https://mountainstar.com/locations/lone-peak-hospital/",
      },
      {
        name: "Pure Sweat + Float Spa",
        contact: "Stacey Millhorn",
        phone: "(435) 640-4402",
        address: "11506 District Dr. #300, South Jordan, UT",
        url: "https://www.puresweatstudios.com/south-jordan-utah",
      },
      {
        name: "Riverton Hospital",
        contact: "Laura Klarman",
        phone: "801-285-2016",
        address: "3741 West 12600 South, Riverton, UT 84065",
        url: "https://intermountainhealthcare.org/locations/riverton-hospital/",
      },
      {
        name: "South Bangerter Health Center",
        phone: "801-562-3129",
        address: "13348 South Market Center Drive, Riverton, UT 84065",
        url: "https://www.jordanvalleymc.org",
      },
      {
        name: "Sun Kisst Salon & Spa",
        contact: "Nicole Mery",
        phone: "(801) 647-7035",
        address: "14647 S Porter Rockwell Blvd, Bluffdale, UT 84065",
        url: "https://sunkisstsalon.com",
      },
      {
        name: "Talbot Orthodontics",
        contact: "Travis Talbot",
        phone: "801-446-7175",
        address: "2364 West 12600 South #2-C, Riverton, UT 84065",
        url: "https://www.talbotbraces.com/",
      },
      {
        name: "University of Utah Healthcare Center",
        phone: "801-213-4500",
        address: "5126 Daybreak Pkwy, South Jordan, UT 84095",
        url: "https://healthcare.utah.edu/",
      },
      {
        name: "Wasatch Allergy and Asthma",
        contact: "Alby Chenworth",
        phone: "385-831-1861",
        address: "13348 S. Market Center Dr, #220, Riverton, UT 84065",
        url: "https://wasatchallergy.com/",
      },
      {
        name: "Zivel of Riverton",
        contact: "Colin Jackson",
        phone: "801-824-2421",
        address: "2722 West 12600 South #1, Riverton, UT 84065",
        url: "https://www.zivel.com",
      },
    ],
  },
  {
    id: "hotel",
    label: "Hotels",
    members: [
      {
        name: "Best Western Cottontree Inn",
        contact: "Angie Carnell",
        phone: "801-523-8484",
        address: "10695 South Automall Drive, Sandy, UT 84070",
        url: "https://www.bestwestern.com",
      },
    ],
  },
  {
    id: "hvac",
    label: "HVAC",
    members: [
      {
        name: "Temperature Difference LLC",
        contact: "Dustin Thomas",
        phone: "801-347-0848",
        address: "Riverton, UT",
        url: "http://www.tempdiff.com",
      },
    ],
  },
  {
    id: "insurance",
    label: "Insurance",
    members: [
      {
        name: "American Family Insurance",
        contact: "Donna Rentmeister",
        phone: "801-302-9114",
        address: "12569 South 2700 West Ste 200, Riverton, UT",
        url: "https://agent.amfam.com/donna-rentmeister/ut/riverton/12569-s-2700-w/",
      },
      {
        name: "One Stop Insurance – Draper",
        contact: "Jonathan Laker",
        phone: "801-900-5223",
        address: "13084 South 150 East, Draper, UT 84020",
        url: "http://www.onestopinsurance.com",
      },
      {
        name: "One Stop Insurance – West Jordan",
        contact: "Jonathan Laker",
        phone: "801-505-9945",
        address: "8833 South Redwood Road #B-1, West Jordan, UT 84088",
        url: "http://www.onestopinsurance.com",
      },
      {
        name: "Royals Insurance",
        contact: "Daniel Korolev",
        phone: "801-618-6621",
        address: "14933 South Fawley Lane, Herriman, UT 84096",
        url: "https://www.royalsinsurance.com",
      },
      {
        name: "State Farm Insurance",
        contact: "T. Olson",
        phone: "801-302-7902",
        address: "5524 West 13400 South Suite 100, Herriman, UT 84065",
        url: "https://www.statefarm.com",
      },
      {
        name: "Water Your Wealth",
        contact: "Tara Holmes",
        phone: "318-510-3000",
        address: "Sandy, UT 84092",
      },
    ],
  },
  {
    id: "internet",
    label: "Internet, Cable, Phone",
    members: [
      {
        name: "Comcast Business",
        contact: "Ahrinda Gutierrez",
        address: "9602 South 300 West, Sandy, UT",
        url: "https://business.comcast.com/",
      },
    ],
  },
  {
    id: "itservices",
    label: "IT Services",
    members: [
      {
        name: "CMIT Solutions",
        contact: "Stephanie Isiko",
        phone: "385-755-9528",
        address: "5053 Leila Lane, Herriman, UT 84065",
        url: "https://cmitsolutions.com",
      },
      {
        name: "Blue Disc Cybersecurity",
        contact: "Alex Martin",
        phone: "(801) 889-7968",
        address: "14015 S. Minuteman Drive, Draper, UT 84020",
      },
    ],
  },
  {
    id: "mailing",
    label: "Mailing & Printing",
    members: [
      {
        name: "CopyTec South Jordan",
        contact: "Brian",
        phone: "385-526-3350",
        address: "11506 District Main Dr Ste 100, South Jordan, UT 84095",
      },
      {
        name: "The UPS Store",
        contact: "Pattie Pearce",
        phone: "801-446-1906",
        address: "1878 West 12600 South, Riverton, UT 84065",
        url: "https://locations.theupsstore.com/ut/riverton/1878-w-12600-south",
      },
    ],
  },
  {
    id: "manufacture",
    label: "Manufacturing, Production & Wholesale",
    members: [
      {
        name: "Bull Frog Spas",
        contact: "Spencer Smith",
        phone: "801-565-8111",
        address: "668 West 14600 South, Bluffdale, UT",
        url: "https://www.bullfrogspas.com/",
      },
      {
        name: "Merit Medical Systems",
        contact: "Sandra",
        phone: "801-253-1600",
        address: "1600 West Merit Parkway, South Jordan, UT 84095",
        url: "https://www.merit.com/",
      },
      {
        name: "Rio Tinto Kennecott",
        phone: "801-204-2355",
        address: "4700 Daybreak Parkway, South Jordan, UT 84095",
      },
      {
        name: "Staker Parson Companies",
        contact: "Mike Kurz",
        phone: "(801) 731-1111",
        address: "2350 South 1900 West, Ogden, UT",
        url: "https://stakerparson.com/",
      },
      {
        name: "Stampin' Up",
        phone: "801-257-0727",
        address: "12907 South 3600 West, Riverton, UT 84065",
        url: "https://www.stampinup.com/",
      },
      {
        name: "Ultradent Products, Inc.",
        contact: "Shannon Powell",
        phone: "801-553-4511",
        address: "505 West 10200 South, South Jordan, UT 84095",
        url: "https://www.ultradent.com/",
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    members: [
      {
        name: "City Publications",
        contact: "Heidi Patzold",
        phone: "385-336-7006",
        address: "4993 W Rose Quartz Rd, Herriman, UT 84096",
        url: "https://www.citypubnationwide.com/salt-lake-city-south/",
      },
      {
        name: "EXPAND Business Solutions, Inc.",
        contact: "Ed Brinton",
        phone: "801-641-0789",
        address: "11654 Hidden Valley Blvd., Sandy, UT 84092",
        url: "http://www.expandbusinesssolutions.com",
      },
      {
        name: "Hello Story",
        contact: "Amy Kendall",
        phone: "801-885-5597",
        address: "6371 West 10830 North, Highland, UT",
        url: "http://www.hirehellostory.com",
      },
      {
        name: "My City Journals",
        contact: "Bryan Scott",
        phone: "801-264-6649",
        address: "8679 S. 700 W., Sandy, UT",
        url: "https://www.valleyjournals.com/",
      },
    ],
  },
  {
    id: "mortgage",
    label: "Moving",
    members: [
      {
        name: "The Best of Utah Moving Company",
        contact: "Cameron Batty",
        phone: "801-441-1235",
        address: "859 S 600 W, Salt Lake City, UT 84101",
        url: "https://www.bestofutahmoving.com/movers-in-riverton-utah/",
      },
    ],
  },
  {
    id: "municipalities",
    label: "Municipalities",
    members: [
      {
        name: "Bluffdale City",
        contact: "Mayor Hall",
        phone: "801-254-2200",
        address: "14175 South Redwood Road, Bluffdale, UT",
        url: "https://www.bluffdale.com/",
      },
      {
        name: "Herriman City",
        contact: "Mayor Palmer",
        phone: "801-446-5323",
        address: "13011 S Pioneer St., Herriman, UT",
        url: "https://www.herriman.org/",
      },
    ],
  },
];

const categoryIndexAM = [
  { anchor: "accounting", label: "Accounting" },
  { anchor: "advertising", label: "Advertising" },
  { anchor: "apartments", label: "Apartments" },
  { anchor: "architects", label: "Architects" },
  { anchor: "assisted", label: "Assisted & Independent Living" },
  { anchor: "attorney", label: "Attorneys" },
  { anchor: "autoservices", label: "Auto Services" },
  { anchor: "bakery", label: "Bakery" },
  { anchor: "banking", label: "Banking" },
  { anchor: "businessservices", label: "Business Services" },
  { anchor: "carwash", label: "Car Wash" },
  { anchor: "caterers", label: "Caterers" },
  { anchor: "chiropractors", label: "Chiropractors" },
  { anchor: "churches", label: "Churches" },
  { anchor: "cleaners", label: "Cleaners" },
  { anchor: "construction", label: "Construction" },
  { anchor: "counseling", label: "Counseling" },
  { anchor: "creditunions", label: "Credit Unions" },
  { anchor: "daycare", label: "Daycare" },
  { anchor: "dentists", label: "Dentists & Orthodontists" },
  { anchor: "education", label: "Education" },
  { anchor: "engineering", label: "Engineering" },
  { anchor: "entertainment", label: "Entertainment" },
  { anchor: "eventplan", label: "Event Planning" },
  { anchor: "eyecare", label: "Eye Care" },
  { anchor: "farmers", label: "Farmer's Markets" },
  { anchor: "financialservices", label: "Financial Services" },
  { anchor: "fitness", label: "Fitness" },
  { anchor: "flooring", label: "Flooring" },
  { anchor: "floral", label: "Floral" },
  { anchor: "funeralservices", label: "Funeral Services" },
  { anchor: "golf", label: "Golf" },
  { anchor: "grocery", label: "Grocery Stores" },
  { anchor: "handyman", label: "Handyman" },
  { anchor: "hardware", label: "Hardware" },
  { anchor: "healthservices", label: "Health Services" },
  { anchor: "hotel", label: "Hotels" },
  { anchor: "hvac", label: "HVAC" },
  { anchor: "insurance", label: "Insurance" },
  { anchor: "internet", label: "Internet, Cable, Phone" },
  { anchor: "itservices", label: "IT Services" },
  { anchor: "mailing", label: "Mailing & Printing" },
  { anchor: "manufacture", label: "Manufacturing" },
  { anchor: "marketing", label: "Marketing" },
  { anchor: "mortgage", label: "Moving" },
  { anchor: "municipalities", label: "Municipalities" },
];

/* ─── sub-components ────────────────────────────────────── */

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="bg-white rounded-xl border border-light-gray p-5 hover:shadow-md transition-shadow">
      {member.url ? (
        <a
          href={member.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-accent font-700 text-primary hover:text-teal transition-colors text-sm leading-snug block mb-1"
        >
          {member.name}
        </a>
      ) : (
        <p className="font-accent font-700 text-primary text-sm leading-snug mb-1">
          {member.name}
        </p>
      )}
      {member.contact && (
        <p className="font-body text-xs text-slate-500 mb-0.5">
          {member.contact}
        </p>
      )}
      {member.phone && (
        <a
          href={`tel:${member.phone.replace(/\D/g, "")}`}
          className="font-body text-xs text-teal-dark hover:text-teal block mb-0.5"
        >
          {member.phone}
        </a>
      )}
      {member.address && (
        <p className="font-body text-xs text-slate-400 leading-snug">
          {member.address}
        </p>
      )}
    </div>
  );
}

function CategorySection({ cat }: { cat: Category }) {
  if (cat.members.length === 0) return null;
  return (
    <div id={cat.id} className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-5">
        <h2 className="heading-sm text-primary uppercase tracking-wide whitespace-nowrap">
          {cat.label}
        </h2>
        <div className="flex-1 h-px bg-light-gray" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cat.members.map((m) => (
          <MemberCard key={`${cat.id}-${m.name}`} member={m} />
        ))}
      </div>
    </div>
  );
}

/* ─── page ──────────────────────────────────────────────── */

export default function Page() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-28 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=75"
            alt="Business community meeting"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="section-container max-w-7xl relative z-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-teal mb-4">
              Mountain West Chamber of Commerce
            </p>
            <h1 className="heading-2xl text-white mb-4">Member Directory</h1>
            <div className="section-divider bg-teal mb-6" />
            <p className="font-body text-lg text-white/80 leading-relaxed mb-8">
              Be an active member of your business community. Our directory
              connects you with hundreds of local businesses across Riverton,
              Herriman, and Bluffdale.
            </p>
            <Link href="/becomeamember" className="btn btn-yellow">
              Join the Chamber
            </Link>
          </div>
        </div>
      </section>

      {/* ── Category index ── */}
      <section className="bg-off-white border-b border-light-gray py-10">
        <div className="section-container max-w-7xl">
          <div className="flex items-baseline gap-3 mb-5 flex-wrap">
            <p className="eyebrow">Member Categories A – M</p>
            <span className="font-body text-xs text-slate-400">
              (Categories N–Z coming soon)
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categoryIndexAM.map((c) => (
              <a
                key={c.anchor}
                href={`#${c.anchor}`}
                className="inline-block font-accent text-xs font-600 text-primary bg-white border border-light-gray rounded-full px-3 py-1 hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Directory listing ── */}
      <section className="py-16 bg-white">
        <div className="section-container max-w-7xl">
          <div className="flex flex-col gap-14">
            {categoriesAM.map((cat) => (
              <CategorySection key={cat.id} cat={cat} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 rounded-2xl bg-primary px-8 py-12 text-center">
            <p className="eyebrow text-teal mb-3">Not Listed Yet?</p>
            <h2 className="heading-lg text-white mb-4">
              Get Your Business in the Directory
            </h2>
            <p className="font-body text-white/75 text-base max-w-lg mx-auto mb-8">
              Join the Mountain West Chamber of Commerce and connect with
              hundreds of businesses and thousands of customers in the southwest
              Salt Lake Valley.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/becomeamember" className="btn btn-yellow">
                Become a Member
              </Link>
              <Link href="/contactus" className="btn btn-outline-white">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
