export const generateWellnessAdvice = async (
  query: string, 
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  // Simulate a brief delay for a more natural feel
  await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
  
  const lowerQuery = query.toLowerCase();
  
  // Keyword-based responses for common inquiries
  if (lowerQuery.includes('price') || lowerQuery.includes('cost') || lowerQuery.includes('membership fee')) {
    return "Membership at Josh's Gym is bespoke, tailored to your unique journey. We invite you to schedule a private tour where we can discuss how we can best serve your transformation. Our concierge team will craft a membership experience that aligns with your aspirations.";
  }
  
  if (lowerQuery.includes('equipment') || lowerQuery.includes('machines') || lowerQuery.includes('weights')) {
    return "Our sanctuary features state-of-the-art equipment curated for the discerning athlete. From premium free weights to cutting-edge resistance machines, every piece has been selected to elevate your training. Join our community to experience equipment that matches your dedication.";
  }
  
  if (lowerQuery.includes('hours') || lowerQuery.includes('open') || lowerQuery.includes('time')) {
    return "Josh's Gym operates on a schedule that honors dedication. Our doors are open to members who understand that transformation knows no clock. Schedule a private tour to learn more about our exclusive access hours.";
  }
  
  if (lowerQuery.includes('tour') || lowerQuery.includes('visit') || lowerQuery.includes('see')) {
    return "We would be honored to welcome you for a private tour of our sanctuary. This is where iron meets the will, and where your transformation begins. Please contact us to arrange your exclusive visit and discover how you can become part of our legacy.";
  }
  
  if (lowerQuery.includes('classes') || lowerQuery.includes('training') || lowerQuery.includes('program')) {
    return "Our training programs are designed for those who seek excellence. Each session is crafted to push boundaries and forge strength. Membership grants you access to our curated programs that will elevate your journey. Join us to begin your transformation.";
  }
  
  if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey')) {
    return "Welcome to Josh's Gym. I am here to guide you through our exclusive membership privileges. How may I assist you in joining our community today?";
  }
  
  // Default response for other queries
  const responses = [
    "At Josh's Gym, we believe in creating an experience that transcends the ordinary. Membership here is not just access—it's joining a legacy of transformation. How may I help you begin your journey?",
    "Our sanctuary is designed for those who understand that fitness is a lifestyle. We invite you to become part of our community and experience what it means when iron meets the will. What would you like to know?",
    "Josh's Gym is an aesthetic sanctuary where dedication meets excellence. Membership opens doors to a world where every detail is crafted for your success. How can I assist you in joining us?",
    "We are delighted by your interest in Josh's Gym. Our membership experience is bespoke, designed for those who seek the extraordinary. Schedule a private tour to discover how you can become part of our legacy."
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
};