import { tokens } from "../Theme";

// export const mockDataTeam = [
//   {
//     id: 1,
//     name: "John Doe",
//     email: "john.doe@example.com",
//     phone: "+1 (123) 456-7890",
//     access: "admin",
//     team_type: "development",
//     status: "active",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     email: "jane.smith@example.com",
//     phone: "+1 (234) 567-8901",
//     access: "member",
//     team_type: "design",
//     status: "offline",
//   },
//   {
//     id: 3,
//     name: "Robert Johnson",
//     email: "robert.johnson@example.com",
//     phone: "+1 (345) 678-9012",
//     access: "member",
//     team_type: "marketing",
//     status: "in meeting",
//   },
//   {
//     id: 4,
//     name: "Emily Wilson",
//     email: "emily.wilson@example.com",
//     phone: "+1 (456) 789-0123",
//     access: "admin",
//     team_type: "development",
//     status: "active",
//   },
//   {
//     id: 5,
//     name: "Michael Brown",
//     email: "michael.brown@example.com",
//     phone: "+1 (567) 890-1234",
//     access: "member",
//     team_type: "design",
//     status: "offline",
//   },
//   {
//     id: 6,
//     name: "Sarah Lee",
//     email: "sarah.lee@example.com",
//     phone: "+1 (678) 901-2345",
//     access: "member",
//     team_type: "marketing",
//     status: "active",
//   },
//   {
//     id: 7,
//     name: "David Davis",
//     email: "david.davis@example.com",
//     phone: "+1 (789) 012-3456",
//     access: "admin",
//     team_type: "development",
//     status: "in meeting",
//   },
//   {
//     id: 8,
//     name: "Olivia Taylor",
//     email: "olivia.taylor@example.com",
//     phone: "+1 (890) 123-4567",
//     access: "member",
//     team_type: "design",
//     status: "active",
//   },
//   {
//     id: 9,
//     name: "James White",
//     email: "james.white@example.com",
//     phone: "+1 (901) 234-5678",
//     access: "member",
//     team_type: "marketing",
//     status: "offline",
//   },
//   {
//     id: 10,
//     name: "Linda Martinez",
//     email: "linda.martinez@example.com",
//     phone: "+1 (012) 345-6789",
//     access: "admin",
//     team_type: "development",
//     status: "active",
//   },
// ];

export const mockDataContacts = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@email.com",
    phone: "123-456-7890",
    task_types: [
      {
        task_types_id: 1,
        type: "Design",
        status: "completed",
      },
      {
        task_types_id: 2,
        type: "Development",
        status: "in progress",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@email.com",
    phone: "234-567-8901",
    task_types: [
      {
        task_types_id: 1,
        type: "Research",
        status: "pending",
      },
    ],
  },
  {
    id: 3,
    name: "Jane Smith",
    email: "janesmith@email.com",
    phone: "234-567-8901",
    task_types: [
      {
        task_types_id: 1,
        type: "Research",
        status: "pending",
      },
    ],
  },
  {
    id: 4,
    name: "Jane Smith",
    email: "janesmith@email.com",
    phone: "234-567-8901",
    task_types: [
      {
        task_types_id: 1,
        type: "Research",
        status: "pending",
      },
    ],
  },
  {
    id: 5,
    name: "Jane Smith",
    email: "janesmith@email.com",
    phone: "234-567-8901",
    task_types: [
      {
        task_types_id: 1,
        type: "Research",
        status: "pending",
      },
    ],
  },
  {
    id: 6,
    name: "Jane Smith",
    email: "janesmith@email.com",
    phone: "234-567-8901",
    task_types: [
      {
        task_types_id: 1,
        type: "Research",
        status: "pending",
      },
    ],
  },
  {
    id: 7,
    name: "Jane Smith",
    email: "janesmith@email.com",
    phone: "234-567-8901",
    task_types: [
      {
        task_types_id: 1,
        type: "Research",
        status: "pending",
      },
    ],
  },
  {
    id: 8,
    name: "Jane Smith",
    email: "janesmith@email.com",
    phone: "234-567-8901",
    task_types: [
      {
        task_types_id: 1,
        type: "Research",
        status: "pending",
      },
    ],
  },
  {
    id: 9,
    name: "Jane Smith",
    email: "janesmith@email.com",
    phone: "234-567-8901",
    task_types: [
      {
        task_types_id: 1,
        type: "Research",
        status: "pending",
      },
    ],
  },

  {
    id: 10,
    name: "Alice Bob",
    email: "alicebob@email.com",
    phone: "345-678-9012",
    task_types: [
      {
        task_types_id: 1,
        type: "Development",
        status: "completed",
      },
      {
        task_types_id: 2,
        type: "QA",
        status: "in progress",
      },
    ],
  },
];

export const TaskListData = [
  {
    id: "1",
    name: "Project Kickoff",
    email: "john.doe@example.com",
    task_type: "Meeting",
    task_bio: "Initial project discussion and planning",
    team: "Development",
    assignees: ["John Doe", "Jane Smith"],
    date_time: "2023-10-05T10:00:00",
  },
  {
    id: "2",
    name: "Design Review",
    email: "jane.smith@example.com",
    task_type: "Review",
    task_bio: "Review the initial design drafts",
    team: "Design",
    assignees: ["Jane Smith", "Mike Brown"],
    date_time: "2023-10-06T11:00:00",
  },
  {
    id: "3",
    name: "Backend API Development",
    email: "mike.brown@example.com",
    task_type: "Development",
    task_bio: "Create the API endpoints for user management",
    team: "Development",
    assignees: ["Mike Brown"],
    date_time: "2023-10-07T09:00:00",
  },
  {
    id: "4",
    name: "UI/UX Brainstorming",
    email: "emma.white@example.com",
    task_type: "Brainstorming",
    task_bio: "Discuss potential improvements to the user interface",
    team: "Design",
    assignees: ["Emma White", "Jane Smith"],
    date_time: "2023-10-08T13:00:00",
  },
  {
    id: "5",
    name: "Frontend Integration",
    email: "james.black@example.com",
    task_type: "Development",
    task_bio: "Integrate the frontend with the backend API",
    team: "Development",
    assignees: ["James Black"],
    date_time: "2023-10-09T14:00:00",
  },
  {
    id: "6",
    name: "Security Audit",
    email: "alice.green@example.com",
    task_type: "Audit",
    task_bio: "Check the system for potential vulnerabilities",
    team: "Security",
    assignees: ["Alice Green"],
    date_time: "2023-10-10T15:00:00",
  },
  {
    id: "7",
    name: "Database Optimization",
    email: "robert.grey@example.com",
    task_type: "Optimization",
    task_bio: "Improve database query speeds",
    team: "Development",
    assignees: ["Robert Grey"],
    date_time: "2023-10-11T16:00:00",
  },
  {
    id: "8",
    name: "Stakeholder Meeting",
    email: "linda.yellow@example.com",
    task_type: "Meeting",
    task_bio: "Discuss project progress with stakeholders",
    team: "Management",
    assignees: ["Linda Yellow", "John Doe"],
    date_time: "2023-10-12T17:00:00",
  },
  {
    id: "9",
    name: "Testing Phase",
    email: "william.blue@example.com",
    task_type: "Testing",
    task_bio: "Run integration tests on the new features",
    team: "QA",
    assignees: ["William Blue"],
    date_time: "2023-10-13T18:00:00",
  },
  {
    id: "10",
    name: "Documentation Update",
    email: "lucy.purple@example.com",
    task_type: "Documentation",
    task_bio: "Update the user guide with the new features",
    team: "Support",
    assignees: ["Lucy Purple"],
    date_time: "2023-10-14T19:00:00",
  },
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
];

export const mockBarData = [
  {
    country: "AD",
    "hot dog": 137,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 96,
    burgerColor: "hsl(296, 70%, 50%)",
    kebab: 72,
    kebabColor: "hsl(97, 70%, 50%)",
    donut: 140,
    donutColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 55,
    "hot dogColor": "hsl(307, 70%, 50%)",
    burger: 28,
    burgerColor: "hsl(111, 70%, 50%)",
    kebab: 58,
    kebabColor: "hsl(273, 70%, 50%)",
    donut: 29,
    donutColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 109,
    "hot dogColor": "hsl(72, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(96, 70%, 50%)",
    kebab: 34,
    kebabColor: "hsl(106, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 133,
    "hot dogColor": "hsl(257, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(326, 70%, 50%)",
    kebab: 43,
    kebabColor: "hsl(110, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 81,
    "hot dogColor": "hsl(190, 70%, 50%)",
    burger: 80,
    burgerColor: "hsl(325, 70%, 50%)",
    kebab: 112,
    kebabColor: "hsl(54, 70%, 50%)",
    donut: 35,
    donutColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 66,
    "hot dogColor": "hsl(208, 70%, 50%)",
    burger: 111,
    burgerColor: "hsl(334, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(182, 70%, 50%)",
    donut: 18,
    donutColor: "hsl(76, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 80,
    "hot dogColor": "hsl(87, 70%, 50%)",
    burger: 47,
    burgerColor: "hsl(141, 70%, 50%)",
    kebab: 158,
    kebabColor: "hsl(224, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(274, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "japan",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "plane",
        y: 101,
      },
      {
        x: "helicopter",
        y: 75,
      },
      {
        x: "boat",
        y: 36,
      },
      {
        x: "train",
        y: 216,
      },
      {
        x: "subway",
        y: 35,
      },
      {
        x: "bus",
        y: 236,
      },
      {
        x: "car",
        y: 88,
      },
      {
        x: "moto",
        y: 232,
      },
      {
        x: "bicycle",
        y: 281,
      },
      {
        x: "horse",
        y: 1,
      },
      {
        x: "skateboard",
        y: 35,
      },
      {
        x: "others",
        y: 14,
      },
    ],
  },
  {
    id: "france",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "plane",
        y: 212,
      },
      {
        x: "helicopter",
        y: 190,
      },
      {
        x: "boat",
        y: 270,
      },
      {
        x: "train",
        y: 9,
      },
      {
        x: "subway",
        y: 75,
      },
      {
        x: "bus",
        y: 175,
      },
      {
        x: "car",
        y: 33,
      },
      {
        x: "moto",
        y: 189,
      },
      {
        x: "bicycle",
        y: 97,
      },
      {
        x: "horse",
        y: 87,
      },
      {
        x: "skateboard",
        y: 299,
      },
      {
        x: "others",
        y: 251,
      },
    ],
  },
  {
    id: "us",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "plane",
        y: 191,
      },
      {
        x: "helicopter",
        y: 136,
      },
      {
        x: "boat",
        y: 91,
      },
      {
        x: "train",
        y: 190,
      },
      {
        x: "subway",
        y: 211,
      },
      {
        x: "bus",
        y: 152,
      },
      {
        x: "car",
        y: 189,
      },
      {
        x: "moto",
        y: 152,
      },
      {
        x: "bicycle",
        y: 8,
      },
      {
        x: "horse",
        y: 197,
      },
      {
        x: "skateboard",
        y: 107,
      },
      {
        x: "others",
        y: 170,
      },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];
