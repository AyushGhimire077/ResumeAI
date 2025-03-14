import { createContext, useState } from "react";
import axios from "axios";

const ResumeContext = createContext()

const ResumeProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [resume, setResume] = useState(null);


    //Post Resume info 
    const resumeInfo = async (userInfo) => {
        setIsLoading(true);
        try {
            const { data } = await axios.post(
              "http://localhost:3000/api/get-resume",
              {userInfo}
            );
            if (data.success) {
                setResume(data.resume);
            } else {
                alert("Failed to generate resume. Please try again.");
            }
        } catch (error) {
            alert(error.message || "Error occurred while generating the resume. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    const value = {
      resumeInfo,
      resume,
      isLoading,
    };
    

    return (
        <ResumeContext.Provider value={value}>
            {children}
        </ResumeContext.Provider>
    )
};

export { ResumeProvider, ResumeContext };