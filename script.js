const messageForm = document.querySelector(".prompt__form");
const chatHistoryContainer = document.querySelector(".chats");
const suggestionItems = document.querySelectorAll(".suggests__item");

const themeToggleButton = document.getElementById("themeToggler");
const clearChatButton = document.getElementById("deleteButton");

// Set control over location data usage
const useSiteContent = true; // Change it to false if you want to respond without data
const useChatHistory = false; // Keep chat

///////////////////////////////////////////////////////////////////////

// Website Data
const siteContent = [
  // Articles
  {
    type: "article",
    title: "How to Improve User Experience on Websites",
    details: "A detailed guide that explains how to optimize website layouts, navigation, and interaction to create a smooth and enjoyable user journey.",
    category: "UX & Design",
    date: "2025-01-15",
    extraDetails: "Includes real-world examples, checklists, and recommended tools."
  },
  {
    type: "article",
    title: "Best SEO Practices for 2025",
    details: "An in-depth article showing how to improve search rankings with keyword strategies, content optimization, and technical SEO improvements.",
    category: "SEO",
    date: "2025-02-01",
    extraDetails: "Covers the latest Google updates and algorithm changes."
  },
  {
    type: "article",
    title: "The Importance of Website Performance",
    details: "Explains why site speed matters, how it impacts bounce rates, and practical methods to reduce loading times.",
    category: "Performance",
    date: "2025-03-10",
    extraDetails: "Provides fresh industry statistics and performance testing tools."
  },
  {
    type: "article",
    title: "Responsive Web Design",
    details: "A complete breakdown of how to make websites mobile-friendly, including fluid grids, flexible images, and CSS techniques.",
    category: "Design",
    date: "2025-04-05",
    extraDetails: "Includes step-by-step responsive layout examples."
  },
  {
    type: "article",
    title: "The Future of Artificial Intelligence",
    details: "Discusses how AI is reshaping industries such as healthcare, education, and finance, and what it means for everyday users.",
    category: "Technology",
    date: "2025-05-20",
    extraDetails: "Includes expert predictions and potential risks."
  },
  {
    type: "article",
    title: "Top 10 Web Development Trends in 2025",
    details: "Explores upcoming technologies, including AI-powered frameworks, serverless computing, and modern frontend tools.",
    category: "Development",
    date: "2025-06-07",
    extraDetails: "Covers JavaScript, PHP, and AI integration."
  },
  {
    type: "article",
    title: "Cybersecurity Tips for Businesses",
    details: "Guidelines for securing company websites, protecting customer data, and preventing phishing or ransomware attacks.",
    category: "Security",
    date: "2025-07-12",
    extraDetails: "Includes recommended tools for malware detection."
  },

  // Pages
  {
    type: "page",
    title: "About Us",
    details: "A page introducing the company, its history, and the industries it serves.",
    category: "Info",
    date: "2024-12-01",
    extraDetails: "Highlights company vision, values, and leadership team."
  },
  {
    type: "page",
    title: "Services",
    details: "A detailed list of all services including website development, mobile apps, and digital marketing solutions.",
    category: "Services",
    date: "2025-01-10",
    extraDetails: "Explains service packages and pricing models."
  },
  {
    type: "page",
    title: "Contact Us",
    details: "Includes phone numbers, emails, and a contact form for inquiries.",
    category: "Contact",
    date: "2025-02-20",
    extraDetails: "Features an interactive office map with directions."
  },
  {
    type: "page",
    title: "FAQ",
    details: "Answers to the most frequent customer questions about services, pricing, and support.",
    category: "Support",
    date: "2025-03-01",
    extraDetails: "Provides quick troubleshooting guides."
  },
  {
    type: "page",
    title: "Privacy Policy",
    details: "Explains how the company collects, stores, and uses customer data.",
    category: "Legal",
    date: "2025-04-15",
    extraDetails: "Outlines user rights and data protection laws."
  },
  {
    type: "page",
    title: "Careers",
    details: "A page listing current job openings and internship opportunities.",
    category: "HR",
    date: "2025-05-18",
    extraDetails: "Allows candidates to apply directly online."
  },

  // Products
  {
    type: "product",
    title: "Project Management App",
    details: "A digital tool that helps teams assign tasks, track progress, and collaborate in real time.",
    category: "Software",
    date: "2025-01-25",
    extraDetails: "Integrates with Slack, Trello, and Google Workspace."
  },
  {
    type: "product",
    title: "Point of Sale System",
    details: "A complete retail solution that manages sales, billing, inventory, and reporting.",
    category: "Retail",
    date: "2025-02-12",
    extraDetails: "Supports e-invoicing and multiple currencies."
  },
  {
    type: "product",
    title: "E-Learning Platform",
    details: "A platform for creating, managing, and delivering online courses with video and live classes.",
    category: "Education",
    date: "2025-03-18",
    extraDetails: "Supports exams, certificates, and student tracking."
  },
  {
    type: "product",
    title: "Cloud Accounting Software",
    details: "An online accounting system that automates bookkeeping, invoices, and financial reports.",
    category: "Finance",
    date: "2025-04-08",
    extraDetails: "Includes tax calculators and expense tracking."
  },
  {
    type: "product",
    title: "Data Analytics Tool",
    details: "An AI-powered dashboard that processes data and generates insights for business growth.",
    category: "Analytics",
    date: "2025-05-05",
    extraDetails: "Supports predictive analytics and custom reports."
  },
  {
    type: "product",
    title: "CRM System",
    details: "Manages customer relationships, tracks leads, and automates follow-ups.",
    category: "Business",
    date: "2025-06-22",
    extraDetails: "Includes email marketing and analytics."
  },
  {
    type: "product",
    title: "Team Chat App",
    details: "A secure communication tool for instant messaging, video calls, and file sharing.",
    category: "Communication",
    date: "2025-07-02",
    extraDetails: "Supports integrations with project management tools."
  },

  // Jobs
  {
    type: "job",
    title: "Frontend Developer",
    details: "Responsible for building and optimizing web interfaces using HTML, CSS, and JavaScript.",
    category: "Software Development",
    date: "2025-01-05",
    extraDetails: "Location: Egypt - Full-time with flexible hours."
  },
  {
    type: "job",
    title: "Digital Marketing Manager",
    details: "Leads online campaigns, SEO, and paid advertising to grow brand visibility.",
    category: "Marketing",
    date: "2025-02-14",
    extraDetails: "Location: Saudi Arabia - Part-time with remote option."
  },
  {
    type: "job",
    title: "Software Engineer",
    details: "Designs, develops, and maintains complex software systems.",
    category: "Engineering",
    date: "2025-03-02",
    extraDetails: "Location: UAE - Full-time with benefits."
  },
  {
    type: "job",
    title: "Graphic Designer",
    details: "Creates digital and print designs for marketing and branding campaigns.",
    category: "Design",
    date: "2025-04-11",
    extraDetails: "Location: Egypt - Flexible working schedule."
  },
  {
    type: "job",
    title: "Technical Support Specialist",
    details: "Provides troubleshooting and technical assistance to customers via email and phone.",
    category: "Support",
    date: "2025-05-22",
    extraDetails: "Location: Qatar - Full-time, night shifts included."
  },
  {
    type: "job",
    title: "AI Researcher",
    details: "Explores and develops machine learning models for real-world applications.",
    category: "Research",
    date: "2025-06-15",
    extraDetails: "Location: Remote - Contract-based."
  },
  {
    type: "job",
    title: "Content Writer",
    details: "Writes blog posts, product descriptions, and social media content.",
    category: "Content",
    date: "2025-07-19",
    extraDetails: "Location: Remote - Freelance work."
  }
];


///////////////////////////////////////////////////////////////////////

// State variables
let currentUserMessage = null;
let isGeneratingResponse = false;

import config from "./config.js";

// Initialize highlight.js with common languages
hljs.configure({
    languages: ['javascript', 'python', 'bash', 'typescript', 'json', 'html', 'css']
});

// Initialize highlight.js
hljs.highlightAll();

const API_REQUEST_URL = `${config.API_BASE_URL}/models/${config.MODEL_NAME}:generateContent?key=${config.GEMINI_API_KEY}`;

// Load saved data from local storage
const loadSavedChatHistory = () => {
  const savedConversations =
    JSON.parse(localStorage.getItem("saved-api-chats")) || [];
  const isLightTheme = localStorage.getItem("themeColor") === "light_mode";

  document.body.classList.toggle("light_mode", isLightTheme);
  themeToggleButton.innerHTML = isLightTheme
    ? '<i class="bx bx-moon"></i>'
    : '<i class="bx bx-sun"></i>';

  chatHistoryContainer.innerHTML = "";

  // Iterate through saved chat history and display messages
  savedConversations.forEach((conversation) => {
    // Display the user's message
    const userMessageHtml = `

            <div class="message__content">
                <img class="message__avatar" src="assets/profile.png" alt="User avatar">
               <p class="message__text">${conversation.userMessage}</p>
            </div>

        `;

    const outgoingMessageElement = createChatMessageElement(
      userMessageHtml,
      "message--outgoing"
    );
    chatHistoryContainer.appendChild(outgoingMessageElement);

    // Display the API response
    const responseText =
      conversation.apiResponse?.candidates?.[0]?.content?.parts?.[0]?.text;
    const parsedApiResponse = marked.parse(responseText); // Convert to HTML
    const rawApiResponse = responseText; // Plain text version

    const responseHtml = `

           <div class="message__content">
                <img class="message__avatar" src="assets/gemini.svg" alt="Gemini avatar">
                <p class="message__text"></p>
                <div class="message__loading-indicator hide">
                    <div class="message__loading-bar"></div>
                    <div class="message__loading-bar"></div>
                    <div class="message__loading-bar"></div>
                </div>
            </div>
            <span onClick="copyMessageToClipboard(this)" class="message__icon hide"><i class='bx bx-copy-alt'></i></span>

        `;

    const incomingMessageElement = createChatMessageElement(
      responseHtml,
      "message--incoming"
    );
    chatHistoryContainer.appendChild(incomingMessageElement);

    const messageTextElement =
      incomingMessageElement.querySelector(".message__text");

    // Display saved chat without typing effect
    showTypingEffect(
      rawApiResponse,
      parsedApiResponse,
      messageTextElement,
      incomingMessageElement,
      true
    ); // 'true' skips typing
  });

  document.body.classList.toggle("hide-header", savedConversations.length > 0);
};

// create a new chat message element
const createChatMessageElement = (htmlContent, ...cssClasses) => {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", ...cssClasses);
  messageElement.innerHTML = htmlContent;
  return messageElement;
};

// Show typing effect
const showTypingEffect = (
  rawText,
  htmlText,
  messageElement,
  incomingMessageElement,
  skipEffect = false
) => {
  const copyIconElement =
    incomingMessageElement.querySelector(".message__icon");
  copyIconElement.classList.add("hide"); // Initially hide copy button

  if (skipEffect) {
    // Display content directly without typing
    messageElement.innerHTML = htmlText;
    hljs.highlightAll();
    addCopyButtonToCodeBlocks();
    copyIconElement.classList.remove("hide"); // Show copy button
    isGeneratingResponse = false;
    return;
  }

  const wordsArray = rawText.split(" ");
  let wordIndex = 0;

  const typingInterval = setInterval(() => {
    messageElement.innerText +=
      (wordIndex === 0 ? "" : " ") + wordsArray[wordIndex++];
    if (wordIndex === wordsArray.length) {
      clearInterval(typingInterval);
      isGeneratingResponse = false;
      messageElement.innerHTML = htmlText;
      hljs.highlightAll();
      addCopyButtonToCodeBlocks();
      copyIconElement.classList.remove("hide");
    }
  }, 75);
};

// Fetch API response based on user input
const requestApiResponse = async (incomingMessageElement) => {
  const messageTextElement =
    incomingMessageElement.querySelector(".message__text");

  try {
    const response = await fetch(API_REQUEST_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: currentUserMessage }] }],
      }),
    });

    const responseData = await response.json();
    if (!response.ok) throw new Error(responseData.error.message);

    const responseText =
      responseData?.candidates?.[0]?.content?.parts?.[0]?.text;
    const availableTypes =
      [...new Set(siteContent.map(item => item.type))];
      let errresponse = `Sorry, there is no information to answer your question. You can inquire about :  ${availableTypes.join("، ")}.`;

    if (!responseText) throw new Error(errresponse);

    const parsedApiResponse = marked.parse(responseText);
    const rawApiResponse = responseText;

    showTypingEffect(
      rawApiResponse,
      parsedApiResponse,
      messageTextElement,
      incomingMessageElement
    );

    // Save conversation in local storage
    let savedConversations =
      JSON.parse(localStorage.getItem("saved-api-chats")) || [];
    savedConversations.push({
      userMessage: currentUserMessage,
      apiResponse: responseData,
    });
    localStorage.setItem("saved-api-chats", JSON.stringify(savedConversations));
  } catch (error) {
    isGeneratingResponse = false;
    messageTextElement.innerText = error.message;
    messageTextElement.closest(".message").classList.add("message--error");
  } finally {
    incomingMessageElement.classList.remove("message--loading");
  }
};

// Add copy button to code blocks
const addCopyButtonToCodeBlocks = () => {
  const codeBlocks = document.querySelectorAll("pre");
  codeBlocks.forEach((block) => {
    const codeElement = block.querySelector("code");
    let language =
      [...codeElement.classList]
        .find((cls) => cls.startsWith("language-"))
        ?.replace("language-", "") || "Text";

    const languageLabel = document.createElement("div");
    languageLabel.innerText =
      language.charAt(0).toUpperCase() + language.slice(1);
    languageLabel.classList.add("code__language-label");
    block.appendChild(languageLabel);

    const copyButton = document.createElement("button");
    copyButton.innerHTML = `<i class='bx bx-copy'></i>`;
    copyButton.classList.add("code__copy-btn");
    block.appendChild(copyButton);

    copyButton.addEventListener("click", () => {
      navigator.clipboard
        .writeText(codeElement.innerText)
        .then(() => {
          copyButton.innerHTML = `<i class='bx bx-check'></i>`;
          setTimeout(
            () => (copyButton.innerHTML = `<i class='bx bx-copy'></i>`),
            2000
          );
        })
        .catch((err) => {
          console.error("Copy failed:", err);
          alert("Unable to copy text!");
        });
    });
  });
};

// Show loading animation during API request
const displayLoadingAnimation = () => {
  const loadingHtml = `

        <div class="message__content">
            <img class="message__avatar" src="assets/gemini.svg" alt="Gemini avatar">
            <p class="message__text"></p>
            <div class="message__loading-indicator">
                <div class="message__loading-bar"></div>
                <div class="message__loading-bar"></div>
                <div class="message__loading-bar"></div>
            </div>
        </div>
        <span onClick="copyMessageToClipboard(this)" class="message__icon hide"><i class='bx bx-copy-alt'></i></span>

    `;

  const loadingMessageElement = createChatMessageElement(
    loadingHtml,
    "message--incoming",
    "message--loading"
  );
  chatHistoryContainer.appendChild(loadingMessageElement);

  requestApiResponse(loadingMessageElement);
};

// Copy message to clipboard
const copyMessageToClipboard = (copyButton) => {
  const messageContent =
    copyButton.parentElement.querySelector(".message__text").innerText;

  navigator.clipboard.writeText(messageContent);
  copyButton.innerHTML = `<i class='bx bx-check'></i>`; // Confirmation icon
  setTimeout(
    () => (copyButton.innerHTML = `<i class='bx bx-copy-alt'></i>`),
    1000
  ); // Revert icon after 1 second
};

// Handle sending chat messages
const handleOutgoingMessage = () => {
  let userQuestion =
    messageForm.querySelector(".prompt__form-input").value.trim() ||
    currentUserMessage;

  if (!userQuestion || isGeneratingResponse) return;

  if (useSiteContent) {
    // Integrate location data into the prompt
    const contentText = siteContent.map(item => {
      return `[${item.type}] ${item.title} - ${item.details} (category: ${item.category}, date: ${item.date}) extra details: ${item.extraDetails}`;
    }).join("\n");

    currentUserMessage = `
Answer only using the following content:
${contentText}

---
Question: ${userQuestion}
`;
  } else {
    // Use only the user question
    currentUserMessage = userQuestion;
  }

  isGeneratingResponse = true;

  const outgoingMessageHtml = `
        <div class="message__content">
            <img class="message__avatar" src="assets/profile.png" alt="User avatar">
            <p class="message__text"></p>
        </div>
    `;

  // Show user question
  const outgoingMessageElement = createChatMessageElement(
    outgoingMessageHtml,
    "message--outgoing"
  );
  outgoingMessageElement.querySelector(".message__text").innerText = userQuestion;
  chatHistoryContainer.appendChild(outgoingMessageElement);

  messageForm.reset();
  document.body.classList.add("hide-header");
  setTimeout(displayLoadingAnimation, 500);
};



// Toggle between light and dark themes
themeToggleButton.addEventListener("click", () => {
  const isLightTheme = document.body.classList.toggle("light_mode");
  localStorage.setItem("themeColor", isLightTheme ? "light_mode" : "dark_mode");

  // Update icon based on theme
  const newIconClass = isLightTheme ? "bx bx-moon" : "bx bx-sun";
  themeToggleButton.querySelector("i").className = newIconClass;
});

// Clear all chat history
clearChatButton.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete all chat history?")) {
    localStorage.removeItem("saved-api-chats");

    // Reload chat history to reflect changes
    loadSavedChatHistory();

    currentUserMessage = null;
    isGeneratingResponse = false;
  }
});

// Handle click on suggestion items
suggestionItems.forEach((suggestion) => {
  suggestion.addEventListener("click", () => {
    currentUserMessage = suggestion.querySelector(
      ".suggests__item-text"
    ).innerText;
    handleOutgoingMessage();
  });
});

// Prevent default from submission and handle outgoing message
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleOutgoingMessage();
});

// Load saved chat history on page load
if (!useChatHistory) {
  localStorage.removeItem("saved-api-chats");
}
loadSavedChatHistory();
