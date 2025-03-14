import  { GoogleGenerativeAI } from '@google/generative-ai'
import 'dotenv/config';

if (!process.env.GOOGLE_GEMI_API) {
  console.log("Open AI API key not found");
  process.exit(1);
}

//configure openai
export const googleAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMI_API);  
