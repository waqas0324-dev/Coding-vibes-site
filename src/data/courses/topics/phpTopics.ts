import { TopicDefinition } from '../topicData';

export const PHP_TOPICS: Record<string, TopicDefinition> = {
  // Module 1: PHP Introduction & Syntax
  'introduction-to-php': {
    heroTagline: "The open-source server-side scripting language powering over 75% of the web",
    introduction: "PHP (recursive acronym for 'PHP: Hypertext Preprocessor') is a widely-used, open-source scripting language executed on the web server. Created by Rasmus Lerdorf in 1994, PHP powers major platforms including WordPress, Wikipedia, and Laravel frameworks.",
    definition: {
      term: "PHP",
      explanation: "A server-side scripting language embedded within HTML used to produce dynamic web page content, interact with databases, and handle authentication."
    },
    syntaxStructure: `<?php
// PHP code goes here
echo "Hello, World!";
?>`,
    codeExample: `<!DOCTYPE html>
<html>
<body>

<?php
echo "<h2>Welcome to PHP on Coding Vibes!</h2>";
$webServer = "Apache / Nginx";
$phpVersion = phpversion();

echo "<p>Running on server: <strong>" . $webServer . "</strong></p>";
echo "<p>PHP Engine Version: <strong>" . $phpVersion . "</strong></p>";
?>

</body>
</html>`,
    codeAnnotations: [
      { lineOrToken: "<?php ... ?>", description: "PHP execution tags telling the web server parser where PHP scripts begin and end." },
      { lineOrToken: "echo", description: "Language construct used to output one or more strings to the HTML response buffer." },
      { lineOrToken: ". (dot)", description: "String concatenation operator in PHP (combines two strings)." }
    ],
    commonMistakes: [
      {
        wrong: "echo 'Hello' + 'World';",
        correct: "echo 'Hello' . 'World';",
        reason: "In PHP, the concatenation operator is a period (.), not a plus sign (+). Plus is strictly arithmetic."
      }
    ],
    tips: [
      "PHP files must have a .php extension to be parsed by the server.",
      "Variable names in PHP always start with a dollar sign ($)."
    ],
    practice: [
      {
        id: "php-intro-p1",
        type: "multiple_choice",
        question: "Where is PHP code executed?",
        options: ["On the web server", "Directly in the client browser", "On the user's graphics card", "In the CSS stylesheet"],
        correctAnswer: 0,
        explanation: "PHP is a server-side language; the server processes the code and sends plain HTML to the browser."
      }
    ],
    quiz: [
      {
        id: "php-intro-q1",
        question: "What symbol do all variables in PHP start with?",
        options: ["$ (dollar sign)", "@ (at sign)", "& (ampersand)", "# (hashtag)"],
        correctAnswerIndex: 0,
        explanation: "Every PHP variable name must begin with the '$' symbol (e.g., $name, $age)."
      }
    ]
  },

  'php-echo-and-print-statements': {
    heroTagline: "echo vs print: outputting strings, HTML tags, and variables",
    introduction: "In PHP, there are two basic ways to get output: `echo` and `print`. `echo` has no return value and can take multiple parameters, while `print` has a return value of 1 so it can be used in expressions. `echo` is marginally faster.",
    definition: {
      term: "echo and print",
      explanation: "Language constructs used to send output directly into the HTTP response stream sent to the user's browser."
    },
    syntaxStructure: `echo "Text to output";
print "Text to output";`,
    codeExample: `<?php
$siteName = "Coding Vibes Academy";
$rating = 4.9;

echo "<h1>" . $siteName . "</h1>";
echo "<p>Student satisfaction rating: " . $rating . " / 5.0</p>";

// echo can also accept comma-separated strings:
echo "Learn ", "Code ", "Build ", "Succeed!";
?>`,
    practice: [
      {
        id: "php-echo-p1",
        type: "multiple_choice",
        question: "Which of the two output statements has a return value of 1?",
        options: ["print", "echo", "printf", "write"],
        correctAnswer: 0,
        explanation: "'print' returns 1, allowing it to be used in expressions, whereas 'echo' returns nothing."
      }
    ]
  },

  // Module 2: Variables & Scope
  'php-variables': {
    heroTagline: "Prefix with $, loosely typed, and dynamically allocated",
    introduction: "A variable starts with the `$` sign, followed by the name of the variable. Unlike other languages, PHP has no command for declaring a variable; it is created the moment you first assign a value to it.",
    definition: {
      term: "PHP Variable",
      explanation: "A named storage location marked with a preceding $ sign."
    },
    syntaxStructure: `$variable_name = value;`,
    codeExample: `<?php
$title = "Full-Stack Web Development";
$lessonsCount = 120;
$coursePrice = 99.99;
$isCertified = true;

echo "Course: " . $title . "<br>";
echo "Total Lessons: " . $lessonsCount . "<br>";
echo "Price: $" . $coursePrice . "<br>";
echo "Certification Included: " . ($isCertified ? "Yes" : "No") . "<br>";
?>`,
    practice: [
      {
        id: "php-var-p1",
        type: "fill_in_blank",
        question: "Fill in the correct character to define a variable in PHP:",
        instructions: "___userName = 'Sarah';",
        correctAnswer: "$",
        explanation: "All PHP variables must start with the dollar sign ($)."
      }
    ]
  },

  // Module 4: Control Structures
  'php-if-else-elseif': {
    heroTagline: "Conditional branching with if, elseif, and else",
    introduction: "Conditional statements are used to perform different actions based on different conditions. In PHP we have: `if`, `if...else`, and `if...elseif...else`.",
    definition: {
      term: "if...elseif...else in PHP",
      explanation: "A control structure used to execute different blocks of code depending on conditional expressions."
    },
    syntaxStructure: `if (condition) {
    // code
} elseif (another_condition) {
    // code
} else {
    // fallback code
}`,
    codeExample: `<?php
$score = 85;

if ($score >= 90) {
    echo "Distinction: Grade A";
} elseif ($score >= 75) {
    echo "Credit: Grade B";
} elseif ($score >= 50) {
    echo "Pass: Grade C";
} else {
    echo "Fail. Please revise.";
}
?>`,
    practice: [
      {
        id: "php-if-p1",
        type: "multiple_choice",
        question: "How is 'else if' typically written in standard PHP syntax?",
        options: ["elseif", "elif", "else-if", "then if"],
        correctAnswer: 0,
        explanation: "PHP standardizes on the single word 'elseif' (though 'else if' is also accepted with curly braces)."
      }
    ]
  },

  // Module 5: Arrays & Superglobals
  'php-associative-arrays': {
    heroTagline: "Named key-value mappings using the => double arrow operator",
    introduction: "Associative arrays are arrays that use named keys that you assign to them. Instead of index 0, 1, 2, you refer to values by descriptive strings.",
    definition: {
      term: "Associative Array",
      explanation: "An array mapping string keys to arbitrary values, declared with array() or [] and key => value."
    },
    syntaxStructure: `$age = ["Peter" => "35", "Ben" => "37", "Joe" => "43"];
echo $age['Peter']; // 35`,
    codeExample: `<?php
$user = [
    "username" => "dev_expert",
    "email"    => "dev@codingvibes.com",
    "role"     => "Senior Engineer",
    "status"   => "Active"
];

echo "<h3>User Profile</h3>";
echo "Username: " . $user["username"] . "<br>";
echo "Email: " . $user["email"] . "<br>";
echo "Role: " . $user["role"] . "<br>";

echo "<h4>All Profile Attributes:</h4>";
foreach ($user as $key => $val) {
    echo ucfirst($key) . ": " . $val . "<br>";
}
?>`,
    practice: [
      {
        id: "php-arr-p1",
        type: "multiple_choice",
        question: "Which operator associates a key with a value in a PHP associative array?",
        options: ["=>", "->", ":", "="],
        correctAnswer: 0,
        explanation: "The double arrow '=>' assigns values to keys in PHP arrays."
      }
    ]
  }
};
