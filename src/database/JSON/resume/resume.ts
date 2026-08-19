export interface ContactInfo {
  image: string;
  Phone: string;
  Email: string;
  portfolio: string;
  LinkedIn: string;
  Github: string;
  Github_AI: string;
}

export interface EducationEntry {
  degree: string;
  school: string;
}

export interface Education {
  undergraduate: EducationEntry;
  graduate: EducationEntry;
  miscellaneous: string[];
}

export interface Timeframe {
  month: string;
  year: string;
}

export interface Duration {
  start: Timeframe;
  end: Timeframe;
}

export interface WorkExperience {
  position: string;
  organization: string;
  location: string;
  duration: Duration;
  responsibilities: string[];
  link: string;
}

export interface Reference {
  name: string;
  number: string;
  position: string;
  organization: string;
  location: string;
}

export interface ResumeData {
  firstName: string;
  lastName: string;
  shortBlurb: string;
  contact: ContactInfo;
  education: Education;
  elevatorPitch: string[];
  hobbies: string;
  interests: string;
  location: string;
  resume: string;
  references: Reference[];
  workExperience: WorkExperience[];
}

// TypeScript-ready resume data
export const resume: ResumeData = {
  firstName: "First Name",
  lastName: "Last Name",
  shortBlurb:
    '"Blurb for Personal Info"',
  contact: {
    Phone: "Phone #",
    Email: "Email@Email.com",
    image:
      "https://res.cloudinary.com/",
    portfolio: "http://www.google.com",
    LinkedIn: "https://www.LinkedIn.com/",
    Github: "https://www.github.com/",
    Github_AI: "https://github.com/",
  },
  education: {
    undergraduate: {
      degree: "Undergraduate Degree",
      school: "University",
    },
    graduate: {
      degree: "Graduate Degree",
      school: "University",
    },
    miscellaneous: [
      "Misc Cert 1"
    ],
  },
  elevatorPitch: [
    "Personal Pitch info here"
  ],
  hobbies: "Hobbies here",
  interests:
    "Interests here",
  location: "Location and Citizenship status?",
  resume: "https://drive.google.com/",
  references: [
    {
      name: "Reference Name",
      number: "Reference Phone Number",
      position: "Relation",
      organization: "Organization",
      location: "Location of Organization",
    }
  ],
  workExperience: [
    {
      position: "Title",
      organization: "Organization",
      location: "Location of Organization",
      link: "https://www.google.com",
      duration: {
        start: {
          month: "Start Month",
          year: "Year",
        },
        end: {
          month: "End Month",
          year: "Year",
        },
      },
      responsibilities: [
        "Misc Details and responsibilities of work"
      ],
    }
  ],
};
