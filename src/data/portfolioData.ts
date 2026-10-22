export interface SkillItem {
  id: string;
  name: string;
  category: 'languages' | 'web' | 'practical';
  status: 'Learning' | 'Familiar With' | 'Practicing';
  description: string;
  highlight: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  isUpcoming?: boolean;
  codeSnippet?: string;
}

export interface LearningGoal {
  id: string;
  title: string;
  status: string;
  focusArea: string;
  keyTopics: string[];
}

export const initialPortfolioConfig = {
  name: "Balu",
  fullName: "Balu",
  headline: "Hi, I'm Balu — Aspiring Software Developer.",
  subtitle: "I'm a Computer Science and Engineering (AI) student at Joy University, passionate about programming, web development, and exploring artificial intelligence. I enjoy building projects, learning new technologies, and turning ideas into working solutions.",
  role: "Aspiring Software Developer & AI Enthusiast",
  university: "Joy University",
  degree: "Computer Science and Engineering (Artificial Intelligence)",
  academicStatus: "Completed First Year",
  email: "balunadupuru1@gmail.com",
  github: "https://github.com/balunadupuru",
  linkedin: "https://linkedin.com/in/balunadupuru",
  pythonCalcRepo: "https://github.com/balunadupuru/python-calculator",
  webPracticeRepo: "https://github.com/balunadupuru/web-dev-practice",
  interests: [
    "Programming",
    "Web Development",
    "Artificial Intelligence",
    "Problem-Solving",
    "Software Development"
  ]
};

export const skillsData: SkillItem[] = [
  // Programming Languages
  {
    id: "python",
    name: "Python",
    category: "languages",
    status: "Practicing",
    description: "Core programming syntax, object structures, arithmetic operations, and script automation.",
    highlight: "Applied in building modular CLI calculator and algorithmic problem-solving.",
    iconName: "Code2"
  },
  {
    id: "cpp",
    name: "C++",
    category: "languages",
    status: "Learning",
    description: "Strong foundation in data types, loops, conditionals, functions, and memory concepts.",
    highlight: "Practicing algorithmic thinking and foundational computer science logic.",
    iconName: "Cpu"
  },

  // Web Development
  {
    id: "html",
    name: "HTML5",
    category: "web",
    status: "Practicing",
    description: "Semantic document structuring, forms, accessible element hierarchies, and page layouts.",
    highlight: "Creating structured web pages with semantic tags and clean document organization.",
    iconName: "FileCode"
  },
  {
    id: "css",
    name: "CSS3",
    category: "web",
    status: "Practicing",
    description: "Modern layout systems with Flexbox and Grid, styling rules, box model, and responsiveness.",
    highlight: "Designing clean responsive interfaces and experimenting with modern CSS techniques.",
    iconName: "Palette"
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "web",
    status: "Learning",
    description: "Core syntax, ES6 variables and functions, DOM manipulation, event handling, and logic.",
    highlight: "Developing interactive front-end behaviors and dynamic user interface responses.",
    iconName: "Braces"
  },

  // Tools & Practical Knowledge
  {
    id: "web-structure",
    name: "Web Page Structure & Styling",
    category: "practical",
    status: "Practicing",
    description: "Crafting organized layouts, applying consistent spacing scales, and responsive design.",
    highlight: "Translating mockups into mobile-friendly and well-structured web interfaces.",
    iconName: "Layout"
  },
  {
    id: "js-fundamentals",
    name: "JavaScript Fundamentals",
    category: "practical",
    status: "Learning",
    description: "Arrays, objects, control flow, functions, event listeners, and browser DOM interaction.",
    highlight: "Building interactive practice components like calculators, counters, and toggles.",
    iconName: "Terminal"
  },
  {
    id: "python-fundamentals",
    name: "Python Programming Fundamentals",
    category: "practical",
    status: "Practicing",
    description: "Variables, mathematical logic, conditionals, loops, functions, and error handling.",
    highlight: "Core foundation applied across academic assignments and practical utility scripts.",
    iconName: "CheckCircle2"
  },
  {
    id: "debugging",
    name: "Basic Problem-Solving & Debugging",
    category: "practical",
    status: "Familiar With",
    description: "Code tracing, reading console error messages, incremental testing, and logic verification.",
    highlight: "Diagnosing syntax errors, logical bugs, and refining clean code structures.",
    iconName: "Bug"
  }
];

export const pythonCalculatorCode = `"""
Python Calculator
Developed by Balu (Joy University)
A clean, modular arithmetic calculator in Python.
"""

def add(x: float, y: float) -> float:
    return x + y

def subtract(x: float, y: float) -> float:
    return x - y

def multiply(x: float, y: float) -> float:
    return x * y

def divide(x: float, y: float):
    if y == 0:
        raise ValueError("Cannot divide by zero.")
    return x / y

def modulo(x: float, y: float):
    if y == 0:
        raise ValueError("Cannot perform modulo by zero.")
    return x % y

def calculate(num1: float, op: str, num2: float):
    operations = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide,
        '%': modulo
    }
    if op not in operations:
        return f"Error: Unknown operator '{op}'"
    try:
        result = operations[op](num1, num2)
        return round(result, 4)
    except ValueError as e:
        return f"Error: {e}"

# Example execution:
if __name__ == "__main__":
    print("=== Python Calculator CLI ===")
    print("Result 12.5 + 7.5 =", calculate(12.5, '+', 7.5))
    print("Result 100 / 4    =", calculate(100, '/', 4))
    print("Result 25 * 16    =", calculate(25, '*', 16))
`;

export const projectsData: ProjectItem[] = [
  {
    id: "python-calc",
    title: "Python Calculator",
    tagline: "Modular arithmetic computation tool built with clean Python logic",
    description: "A calculator project developed using Python to perform basic arithmetic operations. Features clean function abstraction, input validation, defensive error handling against division by zero, and modular mathematical functions.",
    technologies: ["Python", "CLI Architecture", "Error Handling"],
    features: [
      "Performs addition, subtraction, multiplication, division, and modulo operations",
      "Defensive zero-division handling with descriptive error feedback",
      "Modular Python function architecture for easy extension",
      "Clean command-line interface logic and test cases"
    ],
    image: "/assets/images/project_python_calc_1792649972665.jpg",
    githubUrl: "https://github.com/balunadupuru/python-calculator",
    codeSnippet: pythonCalculatorCode
  },
  {
    id: "web-dev-practice",
    title: "Web Development Practice",
    tagline: "Hands-on exploration of responsive styling and JavaScript interaction",
    description: "A collection of practice exercises and web development work using HTML, CSS, and JavaScript. Focuses on mastering responsive page structures, CSS Flexbox and Grid layouts, semantic hierarchy, and interactive DOM events.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    features: [
      "Semantic HTML5 page structures and accessible content layouts",
      "Responsive CSS styling with Flexbox and media query breakpoints",
      "Interactive DOM manipulation experiments with JavaScript event listeners",
      "Hands-on exercises for practical front-end problem solving"
    ],
    image: "/assets/images/project_web_practice_1792649971742.jpg",
    githubUrl: "https://github.com/balunadupuru/web-dev-practice"
  }
];

export const upcomingProjectsData: ProjectItem[] = [
  {
    id: "ai-foundations-project",
    title: "AI & Machine Learning Foundations",
    tagline: "Data analysis and basic machine learning modeling in Python",
    description: "Upcoming academic and personal project applying Python libraries (NumPy, Pandas, Scikit-learn) to explore foundational classification and regression problems.",
    technologies: ["Python", "Machine Learning", "Data Analysis"],
    features: [
      "Exploring data pre-processing and feature exploration",
      "Implementation of basic supervised learning algorithms",
      "Evaluation metrics and performance analysis"
    ],
    image: "",
    githubUrl: "https://github.com/balunadupuru",
    isUpcoming: true
  },
  {
    id: "cpp-data-structures",
    title: "C++ Data Structures & Problem Solving",
    tagline: "Core algorithmic patterns and memory-efficient data structures",
    description: "Planned repository documenting clean implementations of linked lists, stacks, queues, binary trees, and foundational sorting and searching algorithms in C++.",
    technologies: ["C++", "Data Structures", "Algorithms"],
    features: [
      "Standard and custom data structure implementations",
      "Time and space complexity profiling",
      "Structured competitive programming exercises"
    ],
    image: "",
    githubUrl: "https://github.com/balunadupuru",
    isUpcoming: true
  },
  {
    id: "fullstack-web-app",
    title: "Full-Stack Web Application",
    tagline: "Connecting responsive front-end interfaces to persistent backend services",
    description: "Future project bridging front-end web development with server-side architecture, RESTful API consumption, and user-centered design.",
    technologies: ["JavaScript", "HTML/CSS", "Web APIs"],
    features: [
      "Dynamic component rendering and client-side routing",
      "Asynchronous data fetching and API communication",
      "Modern UI design and responsive user experience"
    ],
    image: "",
    githubUrl: "https://github.com/balunadupuru",
    isUpcoming: true
  }
];

export const learningGoalsData: LearningGoal[] = [
  {
    id: "python-cpp",
    title: "Strengthening Python and C++ programming",
    status: "Active Goal",
    focusArea: "Core Programming Languages",
    keyTopics: [
      "Object-Oriented Programming (classes, inheritance, encapsulation)",
      "Pointers, references, and memory management in C++",
      "Writing idiomatic Python scripts and automated tests"
    ]
  },
  {
    id: "html-css-js",
    title: "Improving HTML, CSS, and JavaScript skills",
    status: "Active Goal",
    focusArea: "Front-End Web Development",
    keyTopics: [
      "Deepening modern CSS layouts (CSS Grid, advanced Flexbox, animations)",
      "JavaScript asynchronous programming (Promises, fetch API, async/await)",
      "Accessible markup (ARIA roles, semantic landmarks, keyboard navigation)"
    ]
  },
  {
    id: "practical-web",
    title: "Building practical web development projects",
    status: "Active Goal",
    focusArea: "Applied Project Work",
    keyTopics: [
      "Creating end-to-end interactive web tools from scratch",
      "Mobile-first responsive styling across all screen sizes",
      "Version control workflows using Git and GitHub"
    ]
  },
  {
    id: "ai-ml",
    title: "Exploring artificial intelligence and machine learning",
    status: "Active Goal",
    focusArea: "AI Specialization",
    keyTopics: [
      "Understanding foundational AI principles and mathematical basics",
      "Introductory machine learning concepts and supervised learning",
      "Python data science tools and libraries"
    ]
  },
  {
    id: "problem-solving",
    title: "Improving problem-solving and coding skills",
    status: "Active Goal",
    focusArea: "Algorithmic Thinking",
    keyTopics: [
      "Solving structured programming challenges and logic puzzles",
      "Analyzing algorithm time and space complexity",
      "Code refactoring, debugging discipline, and testing edge cases"
    ]
  }
];
