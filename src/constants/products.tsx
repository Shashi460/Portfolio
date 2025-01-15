import sidefolioNike from "public/images/SidefolioNike.png";
import sidefolioNike2 from "public/images/SidefolioNike2.png";
import sidefolioPromptopia from "public/images/SidefolioPromptopia.png";
import sidefolioPromptopia2 from "public/images/SidefolioPromptopia2.png";
import sidefolioInfinity from "public/images/SideFolioInfinity.png";
import sidefolioInfinity2 from "public/images/SideFolioInfinity2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";
import promptopiathumbnail from "public/images/promptopiathumbnail.png";
import promptopiathumbnail2 from "public/images/promptopiathumbnail2.png";
export const products = [
  {
    href: "https://infinity-three.vercel.app/",
    codebase:"https://github.com/Shashi460/Infinity",
    title: "Infinity",
    description:
      "A Modern banking application that helps you manage your finances .",
    thumbnail: sidefolioInfinity,
    images: [sidefolioInfinity, sidefolioInfinity2],
    stack: ["Nextjs", "Tailwindcss","Typescript","Reactjs","Appwrite"],
    slug: "Infinity",
    content: (
      <div>
        <p>
        I developed a secure, server-side-rendered (SSR) authentication system leveraging Appwrite, ensuring robust validation and authorization mechanisms. The goal was to create a platform that prioritizes user data security while delivering a seamless login experience.{" "}
        </p>

        <p>
        To enhance the platform’s financial management capabilities, I integrated the Plaid API, allowing users to securely link multiple bank accounts. This feature not only streamlines transactions but also provides users with a unified view of their finances, ultimately driving higher engagement and increasing the number of active users.{" "}
        </p>

        <p>
        One of the standout features I worked on is a dynamic dashboard. It gives users a comprehensive overview of their accounts, including the total balance across all connected banks, recent transactions, and a categorized spending analysis. This real-time data empowers users to make smarter financial decisions and significantly improves engagement.{" "}
        </p>
        <p>
        Lastly, I implemented a secure funds transfer system using Dwolla, enabling users to move money between accounts effortlessly. The system incorporates critical fields like recipient bank IDs to ensure every transaction is both secure and compliant with financial regulations.{" "}
        </p>
        
        <p>
        This project showcases my ability to combine technical expertise with user-centric design, delivering a platform that simplifies complex financial workflows while maintaining top-notch security.
        </p>
        {" "}
      </div>
    ),
  },
  {
    href: "https://promptopia-mocha-zeta.vercel.app/",
    codebase:"https://github.com/Shashi460/Promptopia",
    title: "Promptopia",
    description:
      "AI prompt sharing platform that helps you generate ideas for you.",
    thumbnail: sidefolioPromptopia,
    images: [promptopiathumbnail, promptopiathumbnail2],
    stack: ["Nextjs","Reactjs", "Javascript","MongoDB","Tailwindcss"],
    slug: "Promptopia",
    content: (
      <div>

        <p>
        Let me tell you about one of my favorite projects, Promptopia.{" "}
        </p>
        <p>

      To start, I integrated NextAuth to create a highly secure and efficient user authentication system. This was a key feature to streamline the signup and login processes. It not only ensured data integrity but also safeguarded the platform from unauthorized access, making it both user-friendly and secure..{" "}
        </p>
        <p>
        I also developed a robust backend system to handle CRUD operations (Create, Read, Update, Delete) for managing prompts. This gave users full control over their content, enabling them to create, edit, and manage their prompts effortlessly.{" "}
        </p>

        <p>
        Performance was another major focus for this project. Using Next.js, I implemented server-side rendering (SSR) and static site generation (SSG). These technologies drastically reduced page load times by pre-rendering pages and delivering content efficiently, even during periods of high traffic.{" "}
        </p>

        <p>
        One of the standout features of the platform is the advanced search system I designed. This system allows users to easily find prompts by using tags, usernames, or specific keywords, making it incredibly easy to discover relevant content in a large database.{" "}
        </p>

        <p>
        Through Promptopia, I combined security, performance, and usability to create an engaging and efficient platform for users.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://nike-woad-chi.vercel.app",
    codebase:"https://github.com/Shashi460/Nike",
    title: "Nike Landing Page",
    description:
      "A modern landing page for Nike shoes.",
    thumbnail: sidefolioNike,
    images: [sidefolioNike, sidefolioNike2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "NikeLandingPage",
    content: (
      <div>
        <p>
        Nike’s landing page is a seamless blend of innovation, style, and functionality, designed to captivate and inspire every visitor. The homepage showcases a dynamic, visually engaging layout with bold imagery of their latest products, athletes, and campaigns, creating an immersive experience. A clean and intuitive navigation bar allows users to easily explore categories like footwear, apparel, and accessories, while interactive elements highlight exclusive drops, seasonal collections, and limited-edition collaborations. The strategic use of bold typography and vibrant colors reinforces Nike’s brand identity and energizes the browsing experience..{" "}
        </p>
        <p>
          The landing page also emphasizes personalization and connectivity, offering tailored recommendations based on user preferences. Features like “Join Nike” and membership benefits are prominently displayed to encourage engagement and loyalty. With seamless integration of storytelling through inspiring athlete stories, video content, and motivational campaigns, the page not only promotes products but also resonates with the audience’s aspirations. Mobile-optimized design and smooth navigation ensure a consistent, high-quality experience across all devices, embodying Nike’s commitment to empowering every athlete, everywhere.
        </p>{" "}
      </div>
    ),
  },
];
