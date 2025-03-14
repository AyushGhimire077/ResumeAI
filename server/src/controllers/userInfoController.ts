import { Request, Response } from "express";
import { googleAI } from "../config/openaiConfig";
import  userInfoSch from "../models/userInfoModel";

// Define the ResumeRequest interface
interface ResumeRequest {
  userInfo: string;
}


// Helper function to validate the user input
const validateUserInfo = (userInfo: string): boolean => {
  return typeof userInfo === "string" && userInfo.trim().length >= 10;
};

// Function to generate the resume prompt dynamically
const generateResumePrompt = (userInfo: string): string => {
  return `
    Extract professional resume details from the following user information:
    "${userInfo}"

    **Rules:**
    - If any section is missing, omit it.
    - Try to fillfull all filed with data from user information(if possible , if not then skip that). 
    - Like if education is not provided then add self learning or something like this(better of appying to companies).
    - Try to fillfull all fields with provided data(as far possible , if not then skip that).
    - In tech use only one name like Tailwind not TailwindCSS or Tailwind CSS.
    - If exprecience is fresher or not define but project is meantion try to make expercerience one year of exp in that filed by creating different projects . 
    - If a section is incomplete or vague, use general details or fill in gaps.
    - Format the response strictly as JSON with no extra text.
    - In lagauage add english by default and add other languages as per user information like where to loction of user is.
    
    **Expected JSON structure:**
    {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "phone": "+1234567890",
      "location": "New York, USA",
      "profilePicture": "http://example.com/pic.jpg",
      "links": {
        "linkedin": "https://linkedin.com/in/johndoe",
        "github": "https://github.com/johndoe",
        "portfolio": "https://johndoe.com"
      },
      "summary": "Experienced web developer skilled in modern frameworks.",
      "technicalSkills": {
        "Frontend": ["HTML", "CSS", "JavaScript", "React"],
        "Backend": ["Node.js", "Express.js"],
        "Database": ["MongoDB", "MySQL"]
      },
      "professionalExperience": [
        {
          "title": "Software Engineer",
          "company": "TechCorp",
          "dates": "2021-Present",
          "location": "New York, USA",
          "responsibilities": [
            "Developed scalable web applications",
            "Led frontend architecture"
          ]
        }
      ],
      "education": [
        {
          "degree": "BSc Computer Science",
          "institution": "XYZ University",
          "dates": "2015-2019",
          "gpa": "3.8/4.0"
        }
      ],
      "certifications": [
        {
          "name": "AWS Certified Solutions Architect",
          "organization": "AWS",
          "dateIssued": "2021",
          "expirationDate": "2024"
        }
      ],
      "projects": [
        {
          "name": "Portfolio Website",
          "description": "Built a React-based portfolio showcasing personal projects.",
          "technologies": ["React", "CSS"],
          "links": {
            "github": "https://github.com/johndoe/portfolio",
            "live": "https://johndoe.com"
          }
        }
      ],
      "languages": [
        {
          "language": "English",
          "proficiency": "Fluent"
        },
        {
          "language": "Spanish",
          "proficiency": "Intermediate"
        }
      ],
      "volunteerExperience": [
        {
          "role": "Volunteer Developer",
          "organization": "Non-Profit Tech Org",
          "dates": "2018-Present",
          "description": "Developed tools for managing donations."
        }
      ],
      "awards": [
        {
          "award": "Employee of the Month",
          "organization": "TechCorp",
          "date": "2022-05",
          "description": "Recognized for exceptional performance in front-end development."
        }
      ]
       "protfolio" : "https://johndoe.com" 
    }

    **Additional Instructions:**
    - Complete the user deilt if incompleted or make better, only if you think needed
    - Improve summary to 3-4 lines
    - Imporve everything , if need and you think but with user input and while filfulling other data.
    - Fullfilling other data should be realted (or may possible) to user input(if possible , if not then skip that).
    - If any section is missing, skip it or use general details as per user input, If you think it is important and can be possible . 
    - Use your own details to fill in gaps, if necessary (e.g., email, phone, location) but try to realte with userInput.
    - Ensure the response is strictly valid JSON.

    - Applying for job with this data you make it better(Specailly in eduation in fresher or not provided)
  `;
};

// Main function to handle the resume generation
export const giveResponse = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { userInfo } = req.body as ResumeRequest;

  // Validate the user input
  if (!validateUserInfo(userInfo)) {
    return res.status(400).json({
      success: false,
      message: "Valid userInfo (minimum 10 characters) is required",
    });
  }

  try {
    // Generate the AI prompt for the resume generation
    const resumePrompt = generateResumePrompt(userInfo);

    // Call the generative AI model (assuming `googleAI.getGenerativeModel` works as expected)
    const model = googleAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(resumePrompt);

    let generatedResume = await result.response.text();

    // Remove any extra markdown formatting from the AI response
    generatedResume = generatedResume.replace(/```json|```/g, "").trim();

    // Parse the generated JSON to ensure it is valid
    try {
      const parsedResume = JSON.parse(generatedResume);

    let user = await userInfoSch.findOne({ email: parsedResume.email });
    if (!user) {
      user = new userInfoSch({
        name: parsedResume.name,
        email: parsedResume.email,
        phone: parsedResume.phone,
        location: parsedResume.location,
        links: parsedResume.links,
        summary: parsedResume.summary,
      });
    } else {
      user.name = parsedResume.name;
      user.phone = parsedResume.phone;
      user.location = parsedResume.location;
      user.links = parsedResume.links;
      user.summary = parsedResume.summary;
      }
    await user.save();
      
      return res.json({ success: true, resume: parsedResume });
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to parse AI response as valid JSON.",
      });
    }
  } catch (error) {
    console.error("Error generating resume:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};
