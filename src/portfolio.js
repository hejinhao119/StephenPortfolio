/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Stephen Ho",
  title: "Jinhao He (Stephen)",
  subTitle: emoji(
    "A passionate software developer 🚀 having two years of experience in Full-Stack, Big-Data Analysis and Cloud Services in AWS & Azure."
  ),
  resumeLink:
    "https://1drv.ms/b/s!AnrJXy0QYlTYibsz8nzzgJzpUEpdRA?e=3Nexrc", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hejinhao119",
  linkedin: "https://www.linkedin.com/in/jinhaohe/",
  gmail: "stephen592562965@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I AM FAMILIAR WITH THE FOLLOWING TECH STACK:",
  skills: [
    emoji(
      "⚡ Build and maintain data pipelines to ensure efficient data processing, secure storage, and retrieval for analysis"
    ),
    emoji("⚡ Design and manage cloud infrastructures to ensure scalability, availability, security, and performance of applications conforming to clients' expectation"),
    emoji(
      "⚡ Develop highly interactive user interfaces for your web and mobile applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "SQL-database",
      fontAwesomeClassname: "fas fa-database"
    },
      {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Apache Spark",
      fontAwesomeClassname: "fab fa-spark"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-azure"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  educationSection: true, // Show education section if it is in the navigation bar
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Melbourne",
      logo: require("./assets/images/uomLogo.png"),
      subHeader: "Master of Software Engineering",
      duration: "Jul 2022 - Jun 2024",
      desc: "Notable courses awarded with High Distinction:",
      descBullets: [
        "Software Design and Architecture (85%)",
        "Software Requirements Analysis (83%)",
        "Advanced Database Systems (82%)",
        "Masters Software Engineering Project (80%)",
        "Masters Advanced Software Project (80%)",
      ]
    },
    {
      schoolName: "University of Auckland",
      logo: require("./assets/images/uoaLogo.jpg"),
      subHeader: "Bachelor of Computer Science",
      duration: "Jul 2017 - Jul 2020",
      desc: "Distinctive academic grade: GPA 7.0/9.0 (A-)",
      descBullets: [
        "Receive multiple Certificates of Merit (see more below) from the CS faculty.",
        "Regular attendee of web developer meetups and hackathons."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full-Stack", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Big-Data Analysis", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud DevOps",
      progressPercentage: "75%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Application Developer Internship",
      company: "InflaMed",
      companylogo: require("./assets/images/inflamedLogo.png"),
      date: "Jul 2023 – Oct 2023",
      desc: "Developed web interfaces for healthcare applications, consuming Twilio RESTful API and ensuring compliance with FHIR standards.",
      descBullets: [
        "Developed 22 web interfaces following Figma UI templates, ensuring consistency and quality in design implementation",
        "Implemented Firebase authentication IAM, enhancing user security for users with distinct roles and access levels",
        "Managed over 50 confidential data files stored in Google Cloud Bucket, implementing regular archiving processes to maintain data accessibility and integrity",
        "Prioritised effective communication skills to collaborate with UX team members, conducted regular peer review sessions",
        "Ensured compliance with FHIR standards and regulations in the development of healthcare applications, achieving 5 categories adherence to healthcare data regulations and standards",
      ]
    },
    {
      role: "Software Engineer",
      company: "HSBC",
      companylogo: require("./assets/images/hsbcLogo.png"),
      date: "Jul 2021 – Feb 2023",
      desc: "Developed tools for data ingestion, data warehousing and encryption in GCP.",
      descBullets: [
        "Migrated existing on-premises data of 1 terabyte volume to the Google Cloud Platform and ingested all raw data into Big Query",
        "Built pipelines using Apache Airflow and Jenkins to automatically notify the DevOps team of any job failure, decreasing over 20% incident recovery time",
        "Implemented PII attributes masking and sensitive information asynchronous encryption using Google Cloud KMS based on data compliance and security",
        "Communicated with service owners in global team to present best coding practices, serving over 50 developers in all sessions",
        "Achieved 1st place winner of 2021 HSBC Hackademy competition from among 20 participant teams by designing a B2B '''BuyNowPayLater''' product solution"
      ]
    },
    {
      role: "Software Engineer",
      company: "Bamboo Technologies",
      companylogo: require("./assets/images/bambooLogo.png"),
      date: "Sep 2020 – Jul 2021",
      desc: "Developed data-driven applications on Microsoft Power Platform, integrating with Azure visualisation tools.",
      descBullets: [
        "Developed a logical data flow in the backend of a task-approval application hosted on Azure and Power Platform, serving over 5,000 end users",
        "Performed root cause analysis, service interruption recovery and deployment troubleshooting for two products. Created preventative measures and presented to Group Management Team",
        "Handled monthly product deployment and backup of 2 Gigabytes of on-premise data to Azure",
        "Mentored 9 new joiners and gave detailed suggestions on large-scale database performance improvement and migration recovery",
        "Collaborated with cross teams on work estimation/planning and implementing new features within an Agile environment"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "HSBC Hackademy 2021 - 1st Place Winner",
      subtitle: "Provided a Buy Now Pay Later solution to solve the innovation challenge (Embed Finance Capabilities into Digital Platforms for B2B Customers).",
      image: require("./assets/images/HSBC_Hackademy_Certificate.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "View Award", url: "https://1drv.ms/b/s!AnrJXy0QYlTYib5-Qb2LpzUQNApB5g?e=79v5wc"}
      ]
    },
    {
      title: "AWS Certified Solutions Architect – Professional",
      subtitle:
        "Achieved the certification, showcasing expertise in designing scalable, secure, and cost-effective AWS solutions for businesses.",
      image: require("./assets/images/aws_sap_Logo.png"),
      imageAlt: "AWS SAP Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.youracclaim.com/badges/167521e4-f6c3-4d25-927e-d70c8439a840?source=linked_in_profile"
        }
      ]
    },
    {
      title: "Google Cloud Certified Professional Cloud Architect",
      subtitle:
        "Attained Google Cloud Certified Professional Cloud Architect certification, demonstrating expertise in architecting scalable and reliable cloud solutions on the Google Cloud Platform.",
      image: require("./assets/images/gcp_arc_Logo.png"),
      imageAlt: "Google Architect Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.credential.net/472f4999-023c-4989-8238-22f9411f7093"
        }
      ]
    },
    {
      title: "Certificates of Merit in the University of Auckland",
      subtitle:
        "Received Certificates of Outstanding Achievement in Computer Science, recognizing exceptional skills and knowledge in various areas of the field.",
      image: require("./assets/images/certificates_merit.png"),
      imageAlt: "Google Architect Logo",
      footerLink: [
        {
          name: "View Certifications",
          url: "https://1drv.ms/i/s!AnrJXy0QYlTYipNGlNTIvMzb-_Qrwg?e=ulIigw"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss opportunities or just want to say hi? My Inbox is open for all.",
  number: "+61-0404992406",
  email_address: "stephen592562965@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
