import { LessonContent } from '../../types';

// ============================================================
// HTML Course — Unique lesson content, Part 4
// Modules 8-9: HTML Forms, Advanced HTML
// ============================================================

export const htmlFormElementContent: LessonContent = {
  heroTagline: "The container that collects user input.",
  introduction: "The <form> tag wraps all the inputs a user fills in — text fields, checkboxes, buttons. When submitted, the browser sends the data to the address in the action attribute.",
  definition: {
    term: "<form> Element",
    explanation: "A container for interactive controls that collects user input and submits it to a server."
  },
  whyItMatters: "Logins, signups, checkouts, and contact pages all run on forms. No form, no interactivity.",
  realWorldAnalogy: {
    title: "A Paper Application Form",
    story: "You fill the boxes on a job application and hand it to the office.",
    comparison: [
      { item: "Paper form", meaning: "The <form> — collects all the answers" },
      { item: "The office", meaning: "The server in action — receives the data" }
    ]
  },
  syntaxStructure: `<form action="/signup" method="post">
  ...
</form>`,
  codeExample: `<form action="/subscribe" method="post">
  <label for="email">Email:</label>
  <input id="email" type="email" name="email">
  <button type="submit">Subscribe</button>
</form>`,
  codeAnnotations: [
    { lineOrToken: "action=\"/subscribe\"", description: "Where the collected data is sent." },
    { lineOrToken: "method=\"post\"", description: "How it's sent — post hides sensitive data in the request." }
  ],
  commonMistakes: [
    { wrong: `<input type="text" name="email">\n<button>Subscribe</button>`, correct: `<form action="/subscribe" method="post">\n  <input type="text" name="email">\n  <button type="submit">Subscribe</button>\n</form>`, reason: "Inputs floating outside a form can't be submitted together — the submit button won't collect them." }
  ],
  tryItYourself: {
    html: `<label for="n">Name:</label>\n<input id="n" type="text" name="name">`,
    instructions: "Wrap the label and input in a <form> with action=\"/hello\" and method=\"post\"."
  },
  takeaways: [
    "<form> wraps all inputs that submit together.",
    "action sets the destination; method sets how data travels.",
    "Inputs outside a form can't be submitted."
  ],
  quizQuestions: [
    { id: "html-form-el-1", question: "What does the <form> element do?", options: ["Styles text", "Collects inputs and submits them to a server", "Plays videos", "Creates tables"], correctAnswerIndex: 1, explanation: "<form> groups interactive controls and submits their data together." },
    { id: "html-form-el-2", question: "What does the action attribute specify?", options: ["The form's color", "Where the form data is sent", "The submit button text", "The page title"], correctAnswerIndex: 1, explanation: "action holds the URL that receives the submitted form data." }
  ]
};

export const htmlInputElementContent: LessonContent = {
  heroTagline: "One tag, many kinds of input.",
  introduction: "The <input> tag creates interactive fields. Its type attribute decides what it becomes — text box, checkbox, date picker, and twenty more. It's a void element with no closing tag.",
  definition: {
    term: "<input> Element",
    explanation: "A void element that creates an interactive input field; the type attribute sets its behavior."
  },
  whyItMatters: "Almost every form control is an <input> with a different type. Learn this one tag and you unlock dozens of controls.",
  realWorldAnalogy: {
    title: "A Multi-Tool",
    story: "One tool with flip-out attachments: knife, screwdriver, bottle opener.",
    comparison: [
      { item: "Flip-out attachment", meaning: "The type attribute — changes what the tool becomes" },
      { item: "The tool handle", meaning: "The <input> tag — the base everything builds on" }
    ]
  },
  syntaxStructure: `<input type="text" name="username">`,
  codeExample: `<input type="text" name="city" placeholder="Your city">
<input type="checkbox" name="news" checked>
<input type="date" name="birthday">`,
  codeAnnotations: [
    { lineOrToken: "type", description: "Chooses the control: text, checkbox, date, and many more." },
    { lineOrToken: "name", description: "Labels the data so the server knows what each value is." }
  ],
  commonMistakes: [
    { wrong: `<input type="text" name="city"></input>`, correct: `<input type="text" name="city">`, reason: "<input> is a void element — a closing tag is invalid HTML." }
  ],
  tryItYourself: {
    html: `<form action="/go" method="post">\n</form>`,
    instructions: "Add an <input type=\"text\" name=\"city\"> inside the form."
  },
  takeaways: [
    "<input> is a void element — no closing tag.",
    "The type attribute transforms it into many controls.",
    "name labels the submitted data."
  ],
  quizQuestions: [
    { id: "html-input-el-1", question: "Does <input> need a closing tag?", options: ["Yes, always", "No — it is a void element", "Only for type=\"text\"", "Only in forms"], correctAnswerIndex: 1, explanation: "<input> is a void element and never takes a closing tag." },
    { id: "html-input-el-2", question: "What does the type attribute do?", options: ["Sets the text color", "Chooses which kind of control the input becomes", "Sets the field width", "Makes it required"], correctAnswerIndex: 1, explanation: "type transforms <input> into text fields, checkboxes, date pickers, and more." }
  ]
};

export const htmlTextInputContent: LessonContent = {
  heroTagline: "The classic single-line text box.",
  introduction: "type=\"text\" creates a single-line text field for short answers — names, cities, usernames. It's the default input type.",
  definition: {
    term: "Text Input (type=\"text\")",
    explanation: "A single-line field accepting short free-form text."
  },
  whyItMatters: "Names and search boxes are the most common inputs on the web. This is the field you'll use most.",
  realWorldAnalogy: {
    title: "One Line on a Form",
    story: "Paper forms give you one ruled line for writing your name.",
    comparison: [
      { item: "Ruled line", meaning: "A text input — one line for a short answer" },
      { item: "The whole page", meaning: "A <textarea> — room for paragraphs" }
    ]
  },
  syntaxStructure: `<input type="text" name="firstname">`,
  codeExample: `<label for="name">Full name:</label>
<input type="text" id="name" name="name" maxlength="50">`,
  codeAnnotations: [
    { lineOrToken: "maxlength=\"50\"", description: "Caps the number of characters the user can type." }
  ],
  commonMistakes: [
    { wrong: `<input type="text" name="message" style="height: 200px;">`, correct: `<textarea name="message" rows="6"></textarea>`, reason: "Text inputs are single-line by design — stretching one tall doesn't make it multi-line. Long messages need a <textarea>." }
  ],
  tryItYourself: {
    html: `<form action="/search" method="get">\n</form>`,
    instructions: "Add a text input named \"q\" with placeholder \"Search...\" inside the form."
  },
  takeaways: [
    "type=\"text\" is a single-line field for short answers.",
    "It's the default input type.",
    "Use maxlength to limit characters; use <textarea> for paragraphs."
  ],
  quizQuestions: [
    { id: "html-textinput-1", question: "What is type=\"text\" for?", options: ["Multi-line essays", "Short single-line answers like names", "Passwords", "File uploads"], correctAnswerIndex: 1, explanation: "Text inputs accept short free-form answers on a single line." },
    { id: "html-textinput-2", question: "What does maxlength do?", options: ["Sets the visual width", "Limits how many characters can be typed", "Makes the field required", "Hides the text"], correctAnswerIndex: 1, explanation: "maxlength caps the characters a user can enter in the field." }
  ]
};

export const htmlPasswordInputContent: LessonContent = {
  heroTagline: "Hide secrets behind dots.",
  introduction: "type=\"password\" masks typed characters as dots or asterisks. It behaves like a text field but keeps passwords private from shoulder-surfers.",
  definition: {
    term: "Password Input (type=\"password\")",
    explanation: "A text field that masks entered characters for privacy."
  },
  whyItMatters: "Passwords typed in plain view are a security disaster. Masking is the bare minimum of login safety.",
  realWorldAnalogy: {
    title: "A Sealed Envelope",
    story: "You seal a letter so only the recipient can read it — not everyone nearby.",
    comparison: [
      { item: "Sealed envelope", meaning: "Password masking — hidden from onlookers" },
      { item: "Postcard", meaning: "A plain text field — visible to everyone" }
    ]
  },
  syntaxStructure: `<input type="password" name="pwd">`,
  codeExample: `<label for="pwd">Password:</label>
<input type="password" id="pwd" name="password" minlength="8">`,
  codeAnnotations: [
    { lineOrToken: "type=\"password\"", description: "Masks each typed character as a dot or asterisk." },
    { lineOrToken: "minlength=\"8\"", description: "Requires at least 8 characters before submission." }
  ],
  commonMistakes: [
    { wrong: `<!-- believing dots = encryption -->\n<input type="password" name="pw">`, correct: `<!-- dots hide from eyes; HTTPS encrypts in transit -->\n<form action="https://site.com/login" method="post">\n  <input type="password" name="pw">\n</form>`, reason: "Masking only hides text on screen — it doesn't encrypt anything. Always submit passwords over HTTPS." }
  ],
  tryItYourself: {
    html: `<label for="pw">Choose a password:</label>`,
    instructions: "Add a password input with id=\"pw\" and name=\"pw\" below the label."
  },
  takeaways: [
    "type=\"password\" masks typed characters.",
    "Masking hides from onlookers — it is not encryption.",
    "Always submit passwords over HTTPS with method=\"post\"."
  ],
  quizQuestions: [
    { id: "html-password-1", question: "What does type=\"password\" do?", options: ["Encrypts the password", "Masks typed characters as dots", "Generates a password", "Hides the whole form"], correctAnswerIndex: 1, explanation: "It visually masks characters so onlookers can't read them." },
    { id: "html-password-2", question: "Does password masking encrypt the data?", options: ["Yes, fully", "No — it only hides it on screen; HTTPS encrypts in transit", "Only on mobile", "Only with JavaScript"], correctAnswerIndex: 1, explanation: "Dots stop shoulder-surfing, not interception — encryption comes from HTTPS." }
  ]
};

export const htmlEmailInputContent: LessonContent = {
  heroTagline: "A text field that checks for an @ sign.",
  introduction: "type=\"email\" looks like a text field but validates the format — it rejects entries without an @ and a domain. Mobile keyboards also show a handy @ key.",
  definition: {
    term: "Email Input (type=\"email\")",
    explanation: "A text field with built-in email-format validation."
  },
  whyItMatters: "Typos like 'user@gmial' break signups. Built-in validation catches them before submission — no JavaScript needed.",
  realWorldAnalogy: {
    title: "A Bouncer Checking Invitations",
    story: "The bouncer glances at each invitation's format before letting guests in.",
    comparison: [
      { item: "Bouncer", meaning: "Browser validation — checks the format" },
      { item: "Invitation", meaning: "The typed email — must look right" }
    ]
  },
  syntaxStructure: `<input type="email" name="email">`,
  codeExample: `<label for="email">Email address:</label>
<input type="email" id="email" name="email" required>`,
  codeAnnotations: [
    { lineOrToken: "type=\"email\"", description: "Validates the format automatically — needs an @ and a domain." },
    { lineOrToken: "required", description: "Blocks submission until a valid email is entered." }
  ],
  commonMistakes: [
    { wrong: `<input type="email" name="email"> <!-- assumes address is real -->`, correct: `<input type="email" name="email" required>\n<!-- then send a confirmation email -->`, reason: "The browser only checks format — 'test@test' passes but may not be a real inbox. Real verification needs a confirmation email." }
  ],
  tryItYourself: {
    html: `<label for="e">Email:</label>`,
    instructions: "Add an email input with id=\"e\" and the required attribute."
  },
  takeaways: [
    "type=\"email\" validates email format automatically.",
    "Mobile keyboards show a convenient @ key.",
    "It checks format only — confirm real addresses by email."
  ],
  quizQuestions: [
    { id: "html-emailinput-1", question: "What does type=\"email\" validate?", options: ["That the inbox exists", "That the format looks like an email", "The password strength", "Nothing"], correctAnswerIndex: 1, explanation: "It checks the format (something@domain) — not whether the address is real." },
    { id: "html-emailinput-2", question: "How do you verify an email address is real?", options: ["type=\"email\" is enough", "Send a confirmation email", "Use maxlength", "Check the color"], correctAnswerIndex: 1, explanation: "Only a confirmation email to that inbox proves it's real and accessible." }
  ]
};
export const htmlNumberInputContent: LessonContent = {
  heroTagline: "Accept only numbers — with spinner buttons.",
  introduction: "type=\"number\" accepts only numeric input and shows little up/down spinner buttons. The min, max, and step attributes set the allowed range.",
  definition: {
    term: "Number Input (type=\"number\")",
    explanation: "A field restricted to numeric values, with optional min/max limits and spinners."
  },
  whyItMatters: "Quantities and ages must be numbers. This field rejects letters automatically and works great on mobile keyboards.",
  realWorldAnalogy: {
    title: "A Combination Lock",
    story: "The lock's dials only turn through digits — letters simply can't fit.",
    comparison: [
      { item: "Lock dials", meaning: "A number input — digits only" },
      { item: "A free-text box", meaning: "type=\"text\" — anything goes" }
    ]
  },
  syntaxStructure: `<input type="number" name="qty" min="1" max="10">`,
  codeExample: `<label for="tickets">Tickets (1–6):</label>
<input type="number" id="tickets" name="tickets" min="1" max="6" value="2">`,
  codeAnnotations: [
    { lineOrToken: "min=\"1\" max=\"6\"", description: "The allowed range — the browser rejects numbers outside it." },
    { lineOrToken: "value=\"2\"", description: "The starting number shown in the field." }
  ],
  commonMistakes: [
    { wrong: `<label>Phone: <input type="number" name="phone"></label>`, correct: `<label>Phone: <input type="tel" name="phone"></label>`, reason: "Phone numbers aren't quantities — leading zeros get stripped and spinners make no sense. Use type=\"tel\" instead." }
  ],
  tryItYourself: {
    html: `<label for="age">Age:</label>`,
    instructions: "Add a number input with id=\"age\", min=\"1\" and max=\"120\"."
  },
  takeaways: [
    "type=\"number\" accepts digits only, with spinners.",
    "min and max set the allowed range.",
    "Don't use it for phone numbers or zip codes."
  ],
  quizQuestions: [
    { id: "html-number-1", question: "What do min and max do on a number input?", options: ["Set the visual size", "Limit the allowed numeric range", "Set the default color", "Make it required"], correctAnswerIndex: 1, explanation: "min and max define the acceptable range; out-of-range values are rejected." },
    { id: "html-number-2", question: "Why is type=\"number\" wrong for phone numbers?", options: ["Phones aren't numeric", "Leading zeros get stripped and spinners are meaningless", "It looks bad", "It can't be styled"], correctAnswerIndex: 1, explanation: "Phone numbers are identifiers, not quantities — type=\"tel\" is the right choice." }
  ]
};

export const htmlRadioButtonsContent: LessonContent = {
  heroTagline: "Pick exactly one option from a group.",
  introduction: "type=\"radio\" creates circular buttons where only one choice per group can be selected. Give all buttons in a group the same name to link them together.",
  definition: {
    term: "Radio Button (type=\"radio\")",
    explanation: "A circular option button; only one selection is allowed per same-named group."
  },
  whyItMatters: "Payment methods, shipping speeds, and sizes need exactly one choice. Radios enforce that rule visually.",
  realWorldAnalogy: {
    title: "Old Car Radio Presets",
    story: "Pushing one preset button pops the others out — only one station plays at a time.",
    comparison: [
      { item: "Preset buttons", meaning: "A radio group — one selection max" },
      { item: "The playing station", meaning: "The checked option — the current choice" }
    ]
  },
  syntaxStructure: `<input type="radio" name="size" value="m">`,
  codeExample: `<p>Choose a size:</p>
<input type="radio" id="s" name="size" value="small">
<label for="s">Small</label>
<input type="radio" id="m" name="size" value="medium" checked>
<label for="m">Medium</label>
<input type="radio" id="l" name="size" value="large">
<label for="l">Large</label>`,
  codeAnnotations: [
    { lineOrToken: "name=\"size\"", description: "The shared name links all three buttons into one group." },
    { lineOrToken: "checked", description: "Pre-selects the Medium option." }
  ],
  commonMistakes: [
    { wrong: `<input type="radio" name="size-s" value="small">\n<input type="radio" name="size-m" value="medium">`, correct: `<input type="radio" name="size" value="small">\n<input type="radio" name="size" value="medium">`, reason: "Different names create independent groups — users could select every option at once. One group, one name." }
  ],
  tryItYourself: {
    html: `<p>Payment method:</p>`,
    instructions: "Add two radio buttons named \"pay\" — one for 'Card' and one for 'Cash' — each with a label."
  },
  takeaways: [
    "Radio buttons allow exactly one choice per group.",
    "Link a group with the same name attribute.",
    "checked pre-selects an option."
  ],
  quizQuestions: [
    { id: "html-radio-1", question: "What links radio buttons into one group?", options: ["The id attribute", "The shared name attribute", "The value attribute", "Being on the same line"], correctAnswerIndex: 1, explanation: "Buttons with the same name form one group where only one can be selected." },
    { id: "html-radio-2", question: "How many options can be selected in a radio group?", options: ["All of them", "Exactly one", "At least two", "None ever"], correctAnswerIndex: 1, explanation: "Selecting one radio deselects the others in its group — that's their defining behavior." }
  ]
};

export const htmlCheckboxesContent: LessonContent = {
  heroTagline: "Tick as many options as you like.",
  introduction: "type=\"checkbox\" creates square boxes users can tick independently. Unlike radios, any number — including zero — can be checked.",
  definition: {
    term: "Checkbox (type=\"checkbox\")",
    explanation: "A square toggle that can be checked or unchecked independently of others."
  },
  whyItMatters: "Newsletter opt-ins, pizza toppings, and terms agreements all need independent yes/no choices.",
  realWorldAnalogy: {
    title: "A Toppings List",
    story: "You tick every topping you want — cheese, olives, mushrooms, all of them.",
    comparison: [
      { item: "Each topping tick", meaning: "A checkbox — independent on/off choice" },
      { item: "The whole pizza order", meaning: "The form — collects all the ticks" }
    ]
  },
  syntaxStructure: `<input type="checkbox" name="topping" value="cheese">`,
  codeExample: `<p>Extra toppings:</p>
<input type="checkbox" id="ch" name="topping" value="cheese">
<label for="ch">Cheese</label>
<input type="checkbox" id="ol" name="topping" value="olives">
<label for="ol">Olives</label>`,
  codeAnnotations: [
    { lineOrToken: "type=\"checkbox\"", description: "A square box — each one toggles independently." }
  ],
  commonMistakes: [
    { wrong: `<p>Choose one:</p>\n<input type="checkbox" name="a"> Yes\n<input type="checkbox" name="b"> No`, correct: `<p>Choose one:</p>\n<input type="radio" name="yn" value="yes"> Yes\n<input type="radio" name="yn" value="no"> No`, reason: "Checkboxes allow multiple picks — for exactly-one choices, radios communicate the rule." }
  ],
  tryItYourself: {
    html: `<p>Subscribe to:</p>`,
    instructions: "Add two checkboxes named \"news\" — 'Weekly digest' and 'New courses' — each with a label."
  },
  takeaways: [
    "Checkboxes toggle independently — check any number.",
    "Square boxes signal 'pick many'; round radios signal 'pick one'.",
    "Use them for opt-ins, toppings, and agreements."
  ],
  quizQuestions: [
    { id: "html-checkbox-1", question: "How do checkboxes differ from radio buttons?", options: ["Checkboxes allow multiple independent selections", "There is no difference", "Checkboxes are round", "Radios allow multiple picks"], correctAnswerIndex: 0, explanation: "Each checkbox toggles on its own; radios enforce one-choice-per-group." },
    { id: "html-checkbox-2", question: "When should you use checkboxes?", options: ["Choose exactly one shipping method", "Pick any number of pizza toppings", "Select your country", "Enter your name"], correctAnswerIndex: 1, explanation: "Toppings are independent yes/no choices — the classic checkbox scenario." }
  ]
};

export const htmlSelectContent: LessonContent = {
  heroTagline: "A compact dropdown for long option lists.",
  introduction: "The <select> tag creates a dropdown menu. It saves space when you have many choices — like a country list — showing only the selected one until opened.",
  definition: {
    term: "<select> Element",
    explanation: "A dropdown control that shows one selected option and reveals the full list when opened."
  },
  whyItMatters: "A 200-country list as radio buttons would fill screens. A dropdown fits it in one line.",
  realWorldAnalogy: {
    title: "A Rolodex",
    story: "You flip through a stack of cards but only see the top one at a time.",
    comparison: [
      { item: "Card stack", meaning: "The <select> — all options hidden inside" },
      { item: "Top card", meaning: "The selected option — the visible one" }
    ]
  },
  syntaxStructure: `<select name="country">
  <option>...</option>
</select>`,
  codeExample: `<label for="country">Country:</label>
<select id="country" name="country">
  <option value="pk">Pakistan</option>
  <option value="uk">United Kingdom</option>
  <option value="us">United States</option>
</select>`,
  codeAnnotations: [
    { lineOrToken: "<select>", description: "The dropdown container — name labels the submitted data." }
  ],
  commonMistakes: [
    { wrong: `<select name="yn">\n  <option>Yes</option>\n  <option>No</option>\n</select>`, correct: `<input type="radio" name="yn" value="yes"> Yes\n<input type="radio" name="yn" value="no"> No`, reason: "Hiding just 2 options behind a click adds friction for no space savings — radios are clearer for tiny lists. Dropdowns suit 5+ options." }
  ],
  tryItYourself: {
    html: `<label for="color">Favorite color:</label>\n<select id="color" name="color">\n</select>`,
    instructions: "Add three <option> elements: Red, Green, Blue."
  },
  takeaways: [
    "<select> creates a space-saving dropdown.",
    "Best for 5 or more options.",
    "Pair it with a <label> like any other field."
  ],
  quizQuestions: [
    { id: "html-select-1", question: "When is <select> the right choice?", options: ["For 2 options", "For long lists like countries", "For passwords", "For headings"], correctAnswerIndex: 1, explanation: "Dropdowns compress long option lists into a single line." },
    { id: "html-select-2", question: "What does the name attribute on <select> do?", options: ["Styles the dropdown", "Labels the submitted data", "Sets the first option", "Makes it required"], correctAnswerIndex: 1, explanation: "name identifies the chosen value when the form is submitted." }
  ]
};

export const htmlOptionContent: LessonContent = {
  heroTagline: "One choice inside a dropdown.",
  introduction: "The <option> tag defines one choice inside a <select>. The text shows to the user; the value attribute is what gets submitted.",
  definition: {
    term: "<option> Element",
    explanation: "One selectable choice in a dropdown; the value is submitted while the text is displayed."
  },
  whyItMatters: "Displayed text ('Pakistan') and submitted data ('pk') often differ. <option> keeps both cleanly separated.",
  realWorldAnalogy: {
    title: "Menu Items with Kitchen Codes",
    story: "The menu says 'Margherita' but the kitchen ticket prints 'PZ-12'.",
    comparison: [
      { item: "Menu name", meaning: "The option text — what the user sees" },
      { item: "Kitchen code", meaning: "The value attribute — what gets submitted" }
    ]
  },
  syntaxStructure: `<option value="pk">Pakistan</option>`,
  codeExample: `<select name="city">
  <option value="">-- Choose a city --</option>
  <option value="khi">Karachi</option>
  <option value="lhr" selected>Lahore</option>
  <option value="isb">Islamabad</option>
</select>`,
  codeAnnotations: [
    { lineOrToken: "value=\"\"", description: "Empty value on the prompt option — with required, it forces a real choice." },
    { lineOrToken: "selected", description: "Pre-selects Lahore as the default choice." }
  ],
  commonMistakes: [
    { wrong: `<option>New York</option>`, correct: `<option value="nyc">New York</option>`, reason: "Without value, the display text gets submitted — 'New York' with spaces and capitals is messy data. Short codes ('nyc') are cleaner." }
  ],
  tryItYourself: {
    html: `<select name="pet">\n</select>`,
    instructions: "Add options for Cat (value \"cat\") and Dog (value \"dog\"), with Dog selected."
  },
  takeaways: [
    "<option> defines one dropdown choice.",
    "Text displays to users; value gets submitted.",
    "Always set value — don't submit display text."
  ],
  quizQuestions: [
    { id: "html-option-1", question: "What is the difference between option text and value?", options: ["No difference", "Text displays to users; value is submitted", "Value displays; text is submitted", "Value is the color"], correctAnswerIndex: 1, explanation: "Users see the text; the form submits the value — keeping both separate gives clean data." },
    { id: "html-option-2", question: "What does the selected attribute do?", options: ["Deletes the option", "Pre-selects that option", "Hides the option", "Makes it required"], correctAnswerIndex: 1, explanation: "selected marks the default choice shown when the dropdown first appears." }
  ]
};
export const htmlTextareaContent: LessonContent = {
  heroTagline: "A big box for multi-line messages.",
  introduction: "The <textarea> tag creates a resizable multi-line text box for paragraphs — comments, reviews, messages. Unlike <input>, it has an opening and closing tag with default text between them.",
  definition: {
    term: "<textarea> Element",
    explanation: "A multi-line text input for longer free-form content."
  },
  whyItMatters: "Reviews and messages don't fit on one line. <textarea> gives users room to write properly.",
  realWorldAnalogy: {
    title: "A Full Page vs. One Line",
    story: "A postcard fits a sentence; a letter needs a full page.",
    comparison: [
      { item: "Full page", meaning: "A <textarea> — room for paragraphs" },
      { item: "Postcard line", meaning: "A text input — one short line" }
    ]
  },
  syntaxStructure: `<textarea name="message" rows="4" cols="40"></textarea>`,
  codeExample: `<label for="review">Your review:</label>
<textarea id="review" name="review" rows="5" cols="40"
  placeholder="Tell us what you think..."></textarea>`,
  codeAnnotations: [
    { lineOrToken: "rows=\"5\" cols=\"40\"", description: "Sets the visible size — 5 text rows tall, 40 characters wide." }
  ],
  commonMistakes: [
    { wrong: `<textarea name="msg" value="Hello"></textarea>`, correct: `<textarea name="msg">Hello</textarea>`, reason: "<textarea> has no value attribute — its default content is the text between the opening and closing tags." }
  ],
  tryItYourself: {
    html: `<label for="bio">Bio:</label>`,
    instructions: "Add a <textarea> with id=\"bio\", rows=\"4\" and cols=\"30\"."
  },
  takeaways: [
    "<textarea> is for multi-line text.",
    "It needs both opening and closing tags.",
    "Default text goes between the tags — there is no value attribute."
  ],
  quizQuestions: [
    { id: "html-textarea-1", question: "When should you use <textarea> instead of a text input?", options: ["For passwords", "For multi-line content like messages", "For numbers", "Never"], correctAnswerIndex: 1, explanation: "<textarea> handles paragraphs and multi-line content; text inputs are single-line." },
    { id: "html-textarea-2", question: "How do you set default text in a <textarea>?", options: ["With the value attribute", "Between the opening and closing tags", "With the text attribute", "You cannot"], correctAnswerIndex: 1, explanation: "<textarea> has no value attribute — content between the tags is the default text." }
  ]
};

export const htmlButtonsContent: LessonContent = {
  heroTagline: "Clickable buttons that do things.",
  introduction: "The <button> tag creates a clickable button. Its type decides the job: submit sends the form, reset clears it, and button does nothing until JavaScript steps in.",
  definition: {
    term: "<button> Element",
    explanation: "A clickable button; the type attribute (submit/reset/button) sets its behavior."
  },
  whyItMatters: "Every form needs a way to finish. The submit button is the door the data walks through.",
  realWorldAnalogy: {
    title: "Elevator Buttons",
    story: "Each elevator button has one job: the door-close button closes doors, floor buttons pick floors.",
    comparison: [
      { item: "Door-close button", meaning: "type=\"submit\" — sends the form" },
      { item: "Floor buttons", meaning: "type=\"button\" — custom actions via JavaScript" }
    ]
  },
  syntaxStructure: `<button type="submit">Send</button>`,
  codeExample: `<form action="/login" method="post">
  <input type="text" name="user">
  <input type="password" name="pass">
  <button type="submit">Log In</button>
  <button type="reset">Clear</button>
</form>`,
  codeAnnotations: [
    { lineOrToken: "type=\"submit\"", description: "Sends the form data to the action URL." },
    { lineOrToken: "type=\"reset\"", description: "Clears all fields back to their defaults." }
  ],
  commonMistakes: [
    { wrong: `<form>\n  <button>Cancel</button>\n</form>`, correct: `<form>\n  <button type="button">Cancel</button>\n</form>`, reason: "A button without type defaults to submit inside forms — clicking 'Cancel' would submit the form instead. Set type=\"button\" explicitly." }
  ],
  tryItYourself: {
    html: `<form action="/go" method="post">\n</form>`,
    instructions: "Add a submit button with the text 'Send Message'."
  },
  takeaways: [
    "<button> types: submit, reset, button.",
    "Inside forms, the default type is submit.",
    "Always set type explicitly to avoid surprises."
  ],
  quizQuestions: [
    { id: "html-button-1", question: "What does <button type=\"submit\"> do?", options: ["Clears the form", "Submits the form data", "Closes the page", "Nothing"], correctAnswerIndex: 1, explanation: "type=\"submit\" sends the form's data to the action URL." },
    { id: "html-button-2", question: "What happens with <button> (no type) inside a form?", options: ["It does nothing", "It submits the form", "It resets the form", "It causes an error"], correctAnswerIndex: 1, explanation: "The default button type inside a form is submit — always set type explicitly." }
  ]
};

export const htmlLabelsContent: LessonContent = {
  heroTagline: "Name every field so everyone can use it.",
  introduction: "The <label> tag names a form control. The for attribute must match the input's id — clicking the label then focuses the field, and screen readers announce the name.",
  definition: {
    term: "<label> Element",
    explanation: "An accessible name for a form control, linked via matching for and id values."
  },
  whyItMatters: "A field without a label is a mystery box. Labels make forms usable for screen readers and easier for mouse users too.",
  realWorldAnalogy: {
    title: "Name Tags at a Conference",
    story: "Name tags tell you who's who without any guessing.",
    comparison: [
      { item: "Name tag", meaning: "A <label> — identifies the field" },
      { item: "The person", meaning: "The input — the thing being identified" }
    ]
  },
  syntaxStructure: `<label for="email">Email:</label>
<input id="email" type="email">`,
  codeExample: `<label for="username">Username:</label>
<input type="text" id="username" name="username">

<label>
  <input type="checkbox" name="news"> Send me news
</label>`,
  codeAnnotations: [
    { lineOrToken: "for=\"username\"", description: "Must exactly match the input's id to link them." },
    { lineOrToken: "wrapping <label>", description: "Wrapping the input inside <label> also works — no for needed." }
  ],
  commonMistakes: [
    { wrong: `<input type="email" placeholder="Email address">`, correct: `<label for="e">Email address:</label>\n<input type="email" id="e" placeholder="you@example.com">`, reason: "Placeholders vanish when typing and aren't reliably announced — they're hints, not labels. Every field needs a real <label>." }
  ],
  tryItYourself: {
    html: `<input type="text" id="city" name="city">`,
    instructions: "Add a <label> for the input with the text 'City:'."
  },
  takeaways: [
    "Every form control needs a <label>.",
    "for must match the input's id exactly.",
    "Clicking a label focuses its field — a bigger click target."
  ],
  quizQuestions: [
    { id: "html-label-1", question: "How does a <label> connect to its input?", options: ["By being nearby", "The for attribute matches the input's id", "By the class name", "Automatically"], correctAnswerIndex: 1, explanation: "for=\"email\" pairs with id=\"email\" — the values must match exactly." },
    { id: "html-label-2", question: "Can a placeholder replace a <label>?", options: ["Yes, fully", "No — placeholders vanish and aren't reliably announced", "Only on mobile", "Only for passwords"], correctAnswerIndex: 1, explanation: "Placeholders are hints, not labels — every field still needs a real <label>." }
  ]
};

export const htmlPlaceholderContent: LessonContent = {
  heroTagline: "Show a hint inside an empty field.",
  introduction: "The placeholder attribute shows light-gray hint text inside an empty field — like 'you@example.com'. It disappears the moment the user types.",
  definition: {
    term: "placeholder Attribute",
    explanation: "Hint text displayed inside an empty input, disappearing on input."
  },
  whyItMatters: "A short example format ('MM/DD/YYYY') prevents thousands of wrongly-formatted submissions.",
  realWorldAnalogy: {
    title: "Faint Pencil Guide Lines",
    story: "Coloring books print faint guide lines that vanish under your crayon.",
    comparison: [
      { item: "Guide lines", meaning: "The placeholder — a hint that disappears" },
      { item: "Your coloring", meaning: "The typed text — replaces the hint" }
    ]
  },
  syntaxStructure: `<input type="email" placeholder="you@example.com">`,
  codeExample: `<input type="text" name="phone" placeholder="+92 300 1234567">
<input type="text" name="dob" placeholder="DD/MM/YYYY">`,
  codeAnnotations: [
    { lineOrToken: "placeholder", description: "Shows an example format in light gray until the user types." }
  ],
  commonMistakes: [
    { wrong: `<input type="text" name="card" placeholder="Card number">`, correct: `<label for="card">Card number</label>\n<input type="text" id="card" name="card" placeholder="1234 5678 9012 3456">`, reason: "Placeholder text disappears and has poor contrast — it can't replace a real <label>. Use both: label names it, placeholder hints at format." }
  ],
  tryItYourself: {
    html: `<input type="text" name="zip">`,
    instructions: "Add a placeholder showing an example zip code: '75000'."
  },
  takeaways: [
    "placeholder shows hint text inside empty fields.",
    "It disappears when the user types.",
    "It's a hint, not a label — use both."
  ],
  quizQuestions: [
    { id: "html-placeholder-1", question: "What happens to placeholder text when the user types?", options: ["It stays visible", "It disappears", "It turns red", "It moves above the field"], correctAnswerIndex: 1, explanation: "Placeholder hints show only in empty fields and vanish on input." },
    { id: "html-placeholder-2", question: "What is placeholder best used for?", options: ["Replacing labels", "Showing an example format like DD/MM/YYYY", "Storing passwords", "Page titles"], correctAnswerIndex: 1, explanation: "Placeholders excel at demonstrating the expected format — labels still do the naming." }
  ]
};

export const htmlRequiredFieldsContent: LessonContent = {
  heroTagline: "Make important fields mandatory.",
  introduction: "The required attribute blocks form submission until the field is filled. The browser shows its own error message — no JavaScript needed.",
  definition: {
    term: "required Attribute",
    explanation: "A boolean attribute that makes a field mandatory before submission."
  },
  whyItMatters: "An order without an address ships nowhere. required catches empty critical fields instantly.",
  realWorldAnalogy: {
    title: "Starred Questions on an Exam",
    story: "Starred questions must be answered, or the whole paper is rejected.",
    comparison: [
      { item: "Starred question", meaning: "A required field — submission blocked without it" },
      { item: "Optional question", meaning: "A normal field — may be left empty" }
    ]
  },
  syntaxStructure: `<input type="email" name="email" required>`,
  codeExample: `<form action="/register" method="post">
  <label for="em">Email *</label>
  <input type="email" id="em" name="email" required>
  <label for="pw">Password *</label>
  <input type="password" id="pw" name="password" required>
  <button type="submit">Register</button>
</form>`,
  codeAnnotations: [
    { lineOrToken: "required", description: "No value needed — its presence alone enforces the rule." }
  ],
  commonMistakes: [
    { wrong: `<!-- every single field required -->`, correct: `<!-- only truly essential fields required -->`, reason: "Over-required forms drive users away — every extra mandatory field costs you completions. Require only what's essential." }
  ],
  tryItYourself: {
    html: `<label for="n">Name:</label>\n<input type="text" id="n" name="name">`,
    instructions: "Add the required attribute to the input."
  },
  takeaways: [
    "required blocks submission until the field is filled.",
    "The browser shows its own error message.",
    "Require only essential fields — not everything."
  ],
  quizQuestions: [
    { id: "html-required-1", question: "What does the required attribute do?", options: ["Styles the field red", "Blocks submission until the field is filled", "Hides the field", "Disables the field"], correctAnswerIndex: 1, explanation: "required makes the field mandatory — the browser stops empty submissions." },
    { id: "html-required-2", question: "Should every form field be required?", options: ["Yes, always", "No — only truly essential fields", "Only text fields", "Only on mobile"], correctAnswerIndex: 1, explanation: "Excessive required fields frustrate users and reduce form completions." }
  ]
};
export const htmlFormAttributesContent: LessonContent = {
  heroTagline: "Control where and how your form sends data.",
  introduction: "The <form> tag's attributes steer submissions: action sets the destination URL, method chooses GET or POST, and other attributes fine-tune behavior.",
  definition: {
    term: "Form Attributes (action, method)",
    explanation: "Settings on <form> controlling the submission destination and HTTP method."
  },
  whyItMatters: "A form with no action submits to the same page — fine for demos, wrong for real apps. Attributes aim the data correctly.",
  realWorldAnalogy: {
    title: "Addressing and Stamping a Letter",
    story: "The address says where the letter goes; the stamp class says how fast it travels.",
    comparison: [
      { item: "Envelope address", meaning: "The action attribute — the destination" },
      { item: "Mail class", meaning: "The method attribute — how it travels" }
    ]
  },
  syntaxStructure: `<form action="/search" method="get">`,
  codeExample: `<!-- Search: data visible in the URL -->
<form action="/search" method="get">
  <input type="text" name="q">
  <button type="submit">Search</button>
</form>

<!-- Signup: data hidden in the request -->
<form action="/signup" method="post">
  <input type="email" name="email">
  <button type="submit">Sign Up</button>
</form>`,
  codeAnnotations: [
    { lineOrToken: "method=\"get\"", description: "Appends form data to the URL — good for searches you might bookmark." },
    { lineOrToken: "method=\"post\"", description: "Hides data in the request body — good for passwords and personal info." }
  ],
  commonMistakes: [
    { wrong: `<form action="/login" method="get">\n  <input type="password" name="pw">\n</form>`, correct: `<form action="/login" method="post">\n  <input type="password" name="pw">\n</form>`, reason: "GET puts the password in the URL — visible in history, logs, and shared links. Sensitive data always uses POST." }
  ],
  tryItYourself: {
    html: `<form>\n  <input type="text" name="q">\n</form>`,
    instructions: "Add action=\"/search\" and method=\"get\" to the form."
  },
  takeaways: [
    "action sets where form data is sent.",
    "method=\"get\" puts data in the URL; \"post\" hides it.",
    "Use POST for sensitive data like passwords."
  ],
  quizQuestions: [
    { id: "html-formattr-1", question: "What is the difference between GET and POST?", options: ["No difference", "GET puts data in the URL; POST hides it in the request body", "POST is faster", "GET is more secure"], correctAnswerIndex: 1, explanation: "GET appends data visibly to the URL; POST sends it hidden in the request body." },
    { id: "html-formattr-2", question: "Which method should a login form use?", options: ["GET", "POST", "Either is fine", "Neither"], correctAnswerIndex: 1, explanation: "Passwords must not appear in URLs — POST keeps them out of history and logs." }
  ]
};

export const htmlInputTypesContent: LessonContent = {
  heroTagline: "A tour of HTML's built-in input controls.",
  introduction: "The type attribute offers 20+ specialized inputs: date pickers, color wells, file uploads, range sliders, and search fields. Each brings its own keyboard and validation for free.",
  definition: {
    term: "Input type Attribute",
    explanation: "The setting that transforms <input> into specialized controls like date, color, file, and range."
  },
  whyItMatters: "Using the right type gives you mobile keyboards, pickers, and validation with zero JavaScript.",
  realWorldAnalogy: {
    title: "A Toolbox of Screwdrivers",
    story: "Each screw head needs its matching driver — the right tool fits perfectly.",
    comparison: [
      { item: "Screwdriver set", meaning: "The input types — a specialized tool for each job" },
      { item: "The screw", meaning: "The data you need — matched to its tool" }
    ]
  },
  syntaxStructure: `<input type="date"> <input type="color"> <input type="file">`,
  codeExample: `<label>Birthday: <input type="date" name="bday"></label>
<label>Favorite color: <input type="color" name="color"></label>
<label>Volume: <input type="range" name="vol" min="0" max="100"></label>
<label>Photo: <input type="file" name="photo"></label>`,
  codeAnnotations: [
    { lineOrToken: "type=\"date\"", description: "Opens a calendar picker — no JavaScript needed." },
    { lineOrToken: "type=\"color\"", description: "Opens a color picker well." },
    { lineOrToken: "type=\"range\"", description: "A slider between min and max values." }
  ],
  commonMistakes: [
    { wrong: `<input type="text" name="dob" placeholder="Pick a date"> <!-- + custom JS picker -->`, correct: `<input type="date" name="dob">`, reason: "Native pickers are accessible, localized, and free — hand-built ones rarely match that quality." }
  ],
  tryItYourself: {
    html: `<form action="/go" method="post">\n</form>`,
    instructions: "Add a date input named \"bday\" and a color input named \"favcolor\"."
  },
  takeaways: [
    "20+ input types exist: date, color, file, range, search, and more.",
    "Native types bring free pickers and mobile keyboards.",
    "Prefer native types over custom JavaScript controls."
  ],
  quizQuestions: [
    { id: "html-inputtypes-1", question: "Which input type opens a calendar picker?", options: ["type=\"text\"", "type=\"date\"", "type=\"calendar\"", "type=\"pick\""], correctAnswerIndex: 1, explanation: "type=\"date\" renders a native calendar picker in supporting browsers." },
    { id: "html-inputtypes-2", question: "Why prefer native input types over custom JavaScript ones?", options: ["They are prettier", "They are accessible, localized, and free", "They load slower", "No reason"], correctAnswerIndex: 1, explanation: "Native controls work with screen readers and adapt to the user's language automatically." }
  ]
};

export const htmlCompleteFormContent: LessonContent = {
  heroTagline: "Assemble everything into a real registration form.",
  introduction: "A complete form combines labels, varied inputs, validation, and buttons into one working unit. This lesson puts every form piece together in a signup form.",
  definition: {
    term: "Complete HTML Form",
    explanation: "A full form uniting structure, inputs, labels, validation, and submission."
  },
  whyItMatters: "Real projects need whole forms, not isolated fields. This is the pattern you'll copy for every signup, checkout, and contact page.",
  realWorldAnalogy: {
    title: "A Finished Jigsaw Puzzle",
    story: "Each piece made sense alone, but together they reveal the full picture.",
    comparison: [
      { item: "Puzzle pieces", meaning: "The individual form lessons — labels, inputs, buttons" },
      { item: "Finished puzzle", meaning: "The complete form — everything working together" }
    ]
  },
  syntaxStructure: `<form action="/signup" method="post">
  <label>...</label>
  <input ...>
  <button type="submit">...</button>
</form>`,
  codeExample: `<form action="/signup" method="post">
  <label for="n">Name:</label>
  <input type="text" id="n" name="name" required>
  <label for="e">Email:</label>
  <input type="email" id="e" name="email" required>
  <label for="p">Password:</label>
  <input type="password" id="p" name="pass" minlength="8" required>
  <button type="submit">Create Account</button>
</form>`,
  codeAnnotations: [
    { lineOrToken: "required", description: "Every field must be filled before submission." },
    { lineOrToken: "minlength=\"8\"", description: "The password needs at least 8 characters." },
    { lineOrToken: "for/id pairs", description: "Each label is linked to its input for accessibility." }
  ],
  commonMistakes: [
    { wrong: `<div>\n  <input type="text" placeholder="Name">\n  <input type="text" placeholder="Email">\n  <div onclick="send()">Go</div>\n</div>`, correct: `<form action="/signup" method="post">\n  <label for="n">Name:</label>\n  <input type="text" id="n" name="name" required>\n  <button type="submit">Go</button>\n</form>`, reason: "A form without labels, validation, and real semantics is unusable for many users and fragile for all." }
  ],
  tryItYourself: {
    html: `<form action="/join" method="post">\n</form>`,
    instructions: "Build a mini signup: labeled email + password inputs (both required) and a submit button."
  },
  takeaways: [
    "Complete forms combine labels, inputs, validation, and buttons.",
    "Every field gets a label; key fields get validation.",
    "This pattern powers signups, checkouts, and contact pages."
  ],
  quizQuestions: [
    { id: "html-completeform-1", question: "What are the essential parts of a complete form?", options: ["Only inputs", "Labels, inputs, validation, and a submit button", "Only buttons", "Images and videos"], correctAnswerIndex: 1, explanation: "A working form needs labeled inputs, validation rules, and a way to submit." },
    { id: "html-completeform-2", question: "Why wrap everything in a real <form> element?", options: ["It looks nicer", "Inputs submit together and semantics work for everyone", "It is optional", "CSS requires it"], correctAnswerIndex: 1, explanation: "The form element groups inputs for submission and gives assistive tech proper structure." }
  ]
};

export const htmlIframesContent: LessonContent = {
  heroTagline: "Embed entire webpages inside yours.",
  introduction: "The <iframe> tag (inline frame) embeds a whole external page — a map, a video, a document — inside a box on your page. The embedded page runs independently.",
  definition: {
    term: "<iframe> Element",
    explanation: "An inline frame embedding a complete external document inside your page."
  },
  whyItMatters: "Maps, videos, and widgets would take months to build. Iframes let you embed the experts' versions in minutes.",
  realWorldAnalogy: {
    title: "A Picture-in-Picture TV",
    story: "The small corner screen shows another channel while the main one plays.",
    comparison: [
      { item: "Corner screen", meaning: "The <iframe> — another page inside yours" },
      { item: "Main channel", meaning: "Your page — the frame around it" }
    ]
  },
  syntaxStructure: `<iframe src="https://example.com" width="600" height="400" title="..."></iframe>`,
  codeExample: `<iframe
  src="https://www.openstreetmap.org/export/embed.html"
  width="600" height="400"
  title="Map of Lahore">
</iframe>`,
  codeAnnotations: [
    { lineOrToken: "title", description: "Describes the frame for screen readers — always include it." },
    { lineOrToken: "width / height", description: "Sets the visible size of the embedded box." }
  ],
  commonMistakes: [
    { wrong: `<iframe src="https://example.com/map"></iframe>`, correct: `<iframe src="https://example.com/map" title="Map of Lahore" width="600" height="400"></iframe>`, reason: "Screen readers announce untitled frames as just 'frame' — users have no idea what's inside without a title." }
  ],
  tryItYourself: {
    html: `<iframe src="https://example.com"></iframe>`,
    instructions: "Add a title (\"Example page\"), width=\"500\" and height=\"300\"."
  },
  takeaways: [
    "<iframe> embeds a complete external page.",
    "Always include a descriptive title.",
    "Set width and height for the frame size."
  ],
  quizQuestions: [
    { id: "html-iframes-1", question: "What does <iframe> embed?", options: ["Only images", "A complete external webpage", "Only text files", "Nothing — deprecated"], correctAnswerIndex: 1, explanation: "<iframe> embeds a full external document that runs independently inside the box." },
    { id: "html-iframes-2", question: "Why must <iframe> have a title?", options: ["For styling", "So screen readers can describe the embedded content", "For SEO ranking", "It is optional"], correctAnswerIndex: 1, explanation: "Without a title, assistive technology announces only 'frame' with no useful context." }
  ]
};

export const htmlEntitiesContent: LessonContent = {
  heroTagline: "Write special characters without breaking your code.",
  introduction: "HTML entities are codes like &lt; that display reserved characters. Since < starts a tag, you write &lt; to actually show a less-than sign as text.",
  definition: {
    term: "HTML Entity",
    explanation: "A code starting with & and ending with ; that displays a reserved or special character."
  },
  whyItMatters: "Tutorials about HTML must show <p> as text. Without entities, the browser would treat it as a real tag.",
  realWorldAnalogy: {
    title: "A Secret Knock",
    story: "Spies use a special knock pattern to say 'it's me' without using words.",
    comparison: [
      { item: "Secret knock", meaning: "The &lt; code — a stand-in signal" },
      { item: "The door opening", meaning: "The < character appearing as text" }
    ]
  },
  syntaxStructure: `&lt; &gt; &amp; &nbsp; &quot;`,
  codeExample: `<p>To make a paragraph, write &lt;p&gt; tags.</p>
<p>Fish &amp; Chips — 5&nbsp;stars</p>`,
  codeAnnotations: [
    { lineOrToken: "&lt;", description: "Displays < as text without starting a tag." },
    { lineOrToken: "&amp;", description: "Displays & itself — needed because & starts entities." },
    { lineOrToken: "&nbsp;", description: "A space that never breaks onto a new line." }
  ],
  commonMistakes: [
    { wrong: `<p>Use <p> tags for paragraphs</p>`, correct: `<p>Use &lt;p&gt; tags for paragraphs</p>`, reason: "A raw < starts tag parsing — the browser eats your text as markup instead of showing it." }
  ],
  tryItYourself: {
    html: `<p>5 > 3 and 2 < 4</p>`,
    instructions: "Replace > with &gt; and < with &lt; so the symbols display correctly."
  },
  takeaways: [
    "Entities start with & and end with ;.",
    "&lt; &gt; &amp; display reserved characters as text.",
    "&nbsp; creates a non-breaking space."
  ],
  quizQuestions: [
    { id: "html-entities-1", question: "How do you display a literal < character as text?", options: ["Just type <", "Write &lt;", "Write <lt>", "Use the <text> tag"], correctAnswerIndex: 1, explanation: "&lt; is the entity for the less-than sign — a raw < would start a tag." },
    { id: "html-entities-2", question: "What does &nbsp; create?", options: ["A new paragraph", "A space that won't break across lines", "Bold text", "A line break"], correctAnswerIndex: 1, explanation: "&nbsp; is a non-breaking space — it keeps words glued together on one line." }
  ]
};
export const htmlSymbolsContent: LessonContent = {
  heroTagline: "Add ©, €, and ★ without hunting for keys.",
  introduction: "HTML entities also produce symbols your keyboard lacks — © (&copy;), € (&euro;), ★ (&star;), ™ (&trade;). They render crisply at any size, unlike pasted images.",
  definition: {
    term: "HTML Symbol Entities",
    explanation: "Entity codes that render typographic symbols like ©, ®, €, and stars."
  },
  whyItMatters: "Copyright lines, currencies, and star ratings need proper symbols. Entities guarantee they display everywhere.",
  realWorldAnalogy: {
    title: "A Symbol Drawer",
    story: "A printer's drawer holds every special character, ready to stamp onto the page.",
    comparison: [
      { item: "The drawer", meaning: "Entity codes — symbols on demand" },
      { item: "Stamped symbol", meaning: "The rendered character — crisp at any size" }
    ]
  },
  syntaxStructure: `&copy; &reg; &trade; &euro; &star;`,
  codeExample: `<p>&copy; 2026 Sunrise Bakery. All rights reserved.</p>
<p>Ticket: &euro;45 &middot; Rating: &star;&star;&star;&star;&star;</p>`,
  codeAnnotations: [
    { lineOrToken: "&copy;", description: "© — the copyright symbol for footers." },
    { lineOrToken: "&euro;", description: "€ — the euro currency sign." },
    { lineOrToken: "&star;", description: "★ — perfect for star ratings." }
  ],
  commonMistakes: [
    { wrong: `<p>(c) 2026 My Site</p>`, correct: `<p>&copy; 2026 My Site</p>`, reason: "(c) looks amateur — © is the proper typographic symbol and renders correctly everywhere." }
  ],
  tryItYourself: {
    html: `<p>My Store. All rights reserved.</p>`,
    instructions: "Add &copy; 2026 at the start of the paragraph."
  },
  takeaways: [
    "Symbol entities render ©, €, ★, ™ and more.",
    "They scale crisply at any text size.",
    "Use proper symbols instead of typed approximations like (c)."
  ],
  quizQuestions: [
    { id: "html-symbols-1", question: "Which entity renders the copyright symbol ©?", options: ["&(c);", "&copy;", "&cr;", "(c)"], correctAnswerIndex: 1, explanation: "&copy; is the HTML entity for the © symbol." },
    { id: "html-symbols-2", question: "Why use &euro; instead of typing EUR?", options: ["No reason", "€ is the proper typographic symbol and renders everywhere", "It loads faster", "EUR is deprecated"], correctAnswerIndex: 1, explanation: "Proper symbols look professional and display consistently across devices." }
  ]
};

export const htmlMetadataContent: LessonContent = {
  heroTagline: "Invisible tags that describe your page.",
  introduction: "The <meta> tags in your <head> describe the page to browsers and search engines — its description, author, and viewport settings. Visitors never see them, but machines read them all.",
  definition: {
    term: "<meta> Tags",
    explanation: "Head-section tags carrying machine-readable information about the page."
  },
  whyItMatters: "Google's search snippet comes from your meta description. Good metadata is free advertising in search results.",
  realWorldAnalogy: {
    title: "A Library Catalog Card",
    story: "The card describes the book — title, author, summary — without being the book itself.",
    comparison: [
      { item: "Catalog card", meaning: "The <meta> tags — describe the page" },
      { item: "The book", meaning: "The visible page — the actual content" }
    ]
  },
  syntaxStructure: `<meta name="description" content="...">`,
  codeExample: `<head>
  <meta name="description" content="Sunrise Bakery — fresh bread daily in Lahore.">
  <meta name="author" content="A. Rivera">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`,
  codeAnnotations: [
    { lineOrToken: "name=\"description\"", description: "The snippet Google shows under your link in search results." },
    { lineOrToken: "name=\"viewport\"", description: "Makes the page scale correctly on phones." }
  ],
  commonMistakes: [
    { wrong: `<meta name="keywords" content="bread, bakery, best bread, cheap bread, bread">`, correct: `<meta name="description" content="Sunrise Bakery — fresh sourdough baked daily in Lahore.">`, reason: "The keywords meta tag has been ignored by Google for years — a good description is what actually matters." }
  ],
  tryItYourself: {
    html: `<head>\n  <title>My Page</title>\n</head>`,
    instructions: "Add a meta description: 'Learn HTML with easy lessons.'"
  },
  takeaways: [
    "<meta> tags describe the page to machines.",
    "The description meta powers Google's snippet.",
    "The keywords meta tag is dead — don't bother."
  ],
  quizQuestions: [
    { id: "html-meta-1", question: "Where do <meta> tags go?", options: ["In the <body>", "In the <head>", "Anywhere", "In a <table>"], correctAnswerIndex: 1, explanation: "Meta tags live in the <head> — they're machine-readable page information." },
    { id: "html-meta-2", question: "What does the meta description do?", options: ["Shows on the page", "Becomes Google's snippet under your link", "Sets the page title", "Changes fonts"], correctAnswerIndex: 1, explanation: "Search engines display your meta description as the result snippet." }
  ]
};

export const htmlFaviconContent: LessonContent = {
  heroTagline: "The tiny icon in the browser tab.",
  introduction: "A favicon is the small icon shown in the browser tab next to your page title. You add it with a <link rel=\"icon\"> tag pointing to a small PNG or ICO file.",
  definition: {
    term: "Favicon",
    explanation: "A small icon representing your site, displayed in browser tabs and bookmarks."
  },
  whyItMatters: "Twenty open tabs all look alike. A favicon helps users spot your site instantly.",
  realWorldAnalogy: {
    title: "A Flag on a Mailbox",
    story: "A little flag tells the mail carrier exactly which mailbox is yours.",
    comparison: [
      { item: "Mailbox flag", meaning: "The favicon — identifies your site at a glance" },
      { item: "The mailbox", meaning: "The browser tab — where the icon appears" }
    ]
  },
  syntaxStructure: `<link rel="icon" href="favicon.png" type="image/png">`,
  codeExample: `<head>
  <title>Sunrise Bakery</title>
  <link rel="icon" href="images/favicon.png" type="image/png">
</head>`,
  codeAnnotations: [
    { lineOrToken: "rel=\"icon\"", description: "Declares to the browser: 'this file is the site's icon'." }
  ],
  commonMistakes: [
    { wrong: `<link rel="icon" href="images/huge-photo-2mb.jpg">`, correct: `<link rel="icon" href="images/favicon-32.png" type="image/png">`, reason: "The icon displays at 16 pixels — a huge file wastes bandwidth for zero visual gain. Use a tiny 32×32 icon." }
  ],
  tryItYourself: {
    html: `<head>\n  <title>My Site</title>\n</head>`,
    instructions: "Add a favicon link pointing to \"favicon.png\"."
  },
  takeaways: [
    "Favicons appear in browser tabs and bookmarks.",
    "Add one with <link rel=\"icon\"> in the <head>.",
    "Keep the file tiny — 32×32 pixels is plenty."
  ],
  quizQuestions: [
    { id: "html-favicon-1", question: "Where does a favicon appear?", options: ["In the page body", "In the browser tab next to the title", "In the footer", "In search results only"], correctAnswerIndex: 1, explanation: "Favicons show in browser tabs, bookmarks, and history next to the page title." },
    { id: "html-favicon-2", question: "How do you add a favicon?", options: ["<img> tag in the body", "<link rel=\"icon\"> in the <head>", "CSS background", "JavaScript"], correctAnswerIndex: 1, explanation: "A link tag with rel=\"icon\" in the head points to the icon file." }
  ]
};

export const htmlPageTitleContent: LessonContent = {
  heroTagline: "Name your page for tabs and search results.",
  introduction: "The <title> tag sets the text in the browser tab and the clickable headline in Google results. Every page needs exactly one, placed inside <head>.",
  definition: {
    term: "<title> Element",
    explanation: "The page's name — shown in the browser tab, bookmarks, and search results."
  },
  whyItMatters: "Your title is the first thing people see in Google. A clear title earns the click; 'Untitled' loses it.",
  realWorldAnalogy: {
    title: "A Nameplate on an Office Door",
    story: "The nameplate tells visitors exactly whose office they've found.",
    comparison: [
      { item: "Nameplate", meaning: "The <title> — names the page" },
      { item: "The office", meaning: "The page itself — the content inside" }
    ]
  },
  syntaxStructure: `<title>Page Name — Site Name</title>`,
  codeExample: `<head>
  <title>Fresh Bread Daily — Sunrise Bakery</title>
</head>`,
  codeAnnotations: [
    { lineOrToken: "<title>", description: "Exactly one per page, always inside <head>." }
  ],
  commonMistakes: [
    { wrong: `<body>\n  <title>My Page</title>\n</body>`, correct: `<head>\n  <title>My Page</title>\n</head>`, reason: "A title in the body is invalid HTML — browsers may ignore it and show the URL instead." }
  ],
  tryItYourself: {
    html: `<head>\n</head>`,
    instructions: "Add a <title>: 'About Us — My Bakery'."
  },
  takeaways: [
    "<title> sets the browser tab text and search headline.",
    "Exactly one per page, inside <head>.",
    "Keep it clear and under 60 characters."
  ],
  quizQuestions: [
    { id: "html-title-1", question: "Where must the <title> tag go?", options: ["In the <body>", "In the <head>", "In the <footer>", "Anywhere"], correctAnswerIndex: 1, explanation: "<title> belongs in the <head> — exactly one per page." },
    { id: "html-title-2", question: "Where does the title text appear?", options: ["Only in the page body", "Browser tab, bookmarks, and Google results", "Nowhere visible", "Only in the URL"], correctAnswerIndex: 1, explanation: "The title shows in tabs, bookmarks, history, and as the clickable search headline." }
  ]
};

export const htmlCharacterEncodingContent: LessonContent = {
  heroTagline: "Tell the browser how to read your characters.",
  introduction: "The charset meta tag tells the browser which character set your page uses. UTF-8 covers nearly every language and symbol — always declare it first in <head>.",
  definition: {
    term: "Character Encoding (charset)",
    explanation: "The declared character set (UTF-8) telling the browser how to decode your page's text."
  },
  whyItMatters: "Without UTF-8, non-English text, emojis, and accents can render as broken � symbols.",
  realWorldAnalogy: {
    title: "A Decoder Ring",
    story: "A coded message needs the right ring setting to be read correctly.",
    comparison: [
      { item: "Ring setting", meaning: "The charset declaration — how to decode" },
      { item: "Coded message", meaning: "Your HTML file's bytes — the raw data" }
    ]
  },
  syntaxStructure: `<meta charset="UTF-8">`,
  codeExample: `<head>
  <meta charset="UTF-8">
  <title>Welcome — خوش آمدید</title>
</head>`,
  codeAnnotations: [
    { lineOrToken: "<meta charset=\"UTF-8\">", description: "Must be the first tag in <head> so the browser decodes everything correctly." }
  ],
  commonMistakes: [
    { wrong: `<!-- file saved as Windows-1252, declared as UTF-8 -->`, correct: `<!-- file saved as UTF-8, declared as UTF-8 -->`, reason: "A mismatch between the file's actual encoding and the declared charset garbles every non-English character." }
  ],
  tryItYourself: {
    html: `<head>\n  <title>Hi</title>\n</head>`,
    instructions: "Add <meta charset=\"UTF-8\"> as the first tag inside <head>."
  },
  takeaways: [
    "<meta charset=\"UTF-8\"> declares the character encoding.",
    "Place it first in <head>.",
    "Save your files as UTF-8 to match the declaration."
  ],
  quizQuestions: [
    { id: "html-charset-1", question: "What does <meta charset=\"UTF-8\"> do?", options: ["Sets the font", "Tells the browser how to decode the page's characters", "Speeds up loading", "Changes the language"], correctAnswerIndex: 1, explanation: "It declares the character encoding so text decodes correctly." },
    { id: "html-charset-2", question: "Where should the charset meta tag go?", options: ["Last in <body>", "First in <head>", "In the footer", "Inside <title>"], correctAnswerIndex: 1, explanation: "It must come first in <head> so the browser decodes everything that follows correctly." }
  ]
};

export const htmlResponsiveHtmlContent: LessonContent = {
  heroTagline: "One page that fits every screen.",
  introduction: "Responsive HTML adapts to phones, tablets, and desktops. It starts with the viewport meta tag, which tells mobile browsers to match the layout to the screen width.",
  definition: {
    term: "Responsive HTML",
    explanation: "Markup (plus CSS) that adapts page layout to any screen size."
  },
  whyItMatters: "Most web traffic is mobile. A page that only works on desktops loses most of its audience.",
  realWorldAnalogy: {
    title: "Water in Different Glasses",
    story: "Water takes the shape of any glass you pour it into.",
    comparison: [
      { item: "Water", meaning: "Responsive content — adapts to the container" },
      { item: "The glass", meaning: "The device screen — any size or shape" }
    ]
  },
  syntaxStructure: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
  codeExample: `<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Page</title>
</head>`,
  codeAnnotations: [
    { lineOrToken: "width=device-width", description: "Matches the layout width to the screen's width." },
    { lineOrToken: "initial-scale=1.0", description: "Starts at 100% zoom — no tiny shrunken desktop view on phones." }
  ],
  commonMistakes: [
    { wrong: `<!-- no viewport tag + fixed 1200px layout -->`, correct: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`, reason: "Without the viewport tag, phones render a shrunken desktop layout that users must pinch and zoom." }
  ],
  tryItYourself: {
    html: `<head>\n  <title>My Page</title>\n</head>`,
    instructions: "Add the viewport meta tag so the page works on phones."
  },
  takeaways: [
    "The viewport meta tag enables mobile-friendly layouts.",
    "width=device-width matches the screen width.",
    "Responsive pages work on phones, tablets, and desktops."
  ],
  quizQuestions: [
    { id: "html-responsive-1", question: "What does the viewport meta tag do?", options: ["Adds a video player", "Makes the layout match the device screen width", "Changes colors", "Adds a map"], correctAnswerIndex: 1, explanation: "It tells mobile browsers to size the layout to the screen instead of shrinking a desktop view." },
    { id: "html-responsive-2", question: "What happens without a viewport tag on phones?", options: ["Nothing", "Pages render as tiny shrunken desktop layouts", "Pages load faster", "Images disappear"], correctAnswerIndex: 1, explanation: "Mobile browsers default to a desktop-width layout, forcing pinch-and-zoom." }
  ]
};
export const htmlSeoFriendlyContent: LessonContent = {
  heroTagline: "Write HTML that search engines love.",
  introduction: "SEO-friendly HTML uses semantic tags, one clear <h1>, descriptive titles, and meta descriptions so search engines understand and rank your page.",
  definition: {
    term: "SEO-friendly HTML",
    explanation: "Markup practices — semantic tags, proper headings, titles, alt text — that help search engines rank a page."
  },
  whyItMatters: "The best content is worthless if nobody finds it. Clean semantic HTML is the foundation of every ranking.",
  realWorldAnalogy: {
    title: "A Well-Organized Shop",
    story: "Clear signs and labeled shelves help customers find products — and help the owner sell more.",
    comparison: [
      { item: "Shop signs", meaning: "Headings and titles — guide search engines" },
      { item: "Labeled shelves", meaning: "Semantic tags — organize content meaningfully" }
    ]
  },
  syntaxStructure: `<title>Keywords — Site</title>
<h1>Main Topic</h1>
<img src="..." alt="Descriptive text">`,
  codeExample: `<head>
  <title>Fresh Sourdough Bread — Sunrise Bakery Lahore</title>
  <meta name="description" content="Order fresh sourdough baked daily in Lahore.">
</head>
<body>
  <main>
    <h1>Fresh Sourdough Bread</h1>
    <img src="sourdough.jpg" alt="Fresh sourdough loaf with crisp crust">
  </main>
</body>`,
  codeAnnotations: [
    { lineOrToken: "<title>", description: "Keyword-rich and under 60 characters — the search headline." },
    { lineOrToken: "<h1>", description: "One per page, matching the page's main topic." },
    { lineOrToken: "alt", description: "Describes the image with relevant, natural words." }
  ],
  commonMistakes: [
    { wrong: `<h1>Bread bread cheap bread Lahore bread buy bread</h1>`, correct: `<h1>Fresh Sourdough Bread in Lahore</h1>`, reason: "Keyword stuffing gets penalized — search engines reward natural, helpful markup written for humans." }
  ],
  tryItYourself: {
    html: `<head>\n  <title>Page</title>\n</head>\n<body>\n  <h1>Hi</h1>\n</body>`,
    instructions: "Rewrite the title and h1 to describe a bakery page naturally with keywords."
  },
  takeaways: [
    "Use semantic tags, one <h1>, and descriptive titles.",
    "Write meta descriptions that invite clicks.",
    "Write for humans — keyword stuffing gets penalized."
  ],
  quizQuestions: [
    { id: "html-seo-1", question: "Which practice helps SEO?", options: ["Keyword stuffing", "One clear <h1>, descriptive title, and semantic tags", "Hiding text with CSS", "Using only <div> tags"], correctAnswerIndex: 1, explanation: "Clean semantic markup with clear titles helps search engines understand the page." },
    { id: "html-seo-2", question: "Why is keyword stuffing bad?", options: ["It looks ugly", "Search engines penalize it", "It slows loading", "It breaks HTML"], correctAnswerIndex: 1, explanation: "Search engines detect and penalize unnatural keyword repetition." }
  ]
};

export const htmlValidationContent: LessonContent = {
  heroTagline: "Check your code for errors like a spell-checker.",
  introduction: "HTML validators (like validator.w3.org) scan your page and list markup errors — unclosed tags, bad nesting, duplicate ids. Valid code behaves predictably everywhere.",
  definition: {
    term: "HTML Validation",
    explanation: "Checking your markup against the HTML standard to find and fix errors."
  },
  whyItMatters: "Browsers guess at broken markup differently. Valid code looks the same in every browser.",
  realWorldAnalogy: {
    title: "Spell-Check for Code",
    story: "Spell-check underlines typos you'd never catch on your own.",
    comparison: [
      { item: "Spell-check", meaning: "The validator — finds mistakes automatically" },
      { item: "Typos", meaning: "Markup errors — unclosed tags, bad nesting" }
    ]
  },
  syntaxStructure: `https://validator.w3.org/`,
  codeExample: `<!-- Error: unclosed tag -->
<p>First paragraph
<p>Second paragraph</p>

<!-- Fixed -->
<p>First paragraph</p>
<p>Second paragraph</p>`,
  codeAnnotations: [
    { lineOrToken: "<p>First paragraph", description: "Missing </p> — the validator flags this as an error." }
  ],
  commonMistakes: [
    { wrong: `<!-- "It looks fine in Chrome, so it's valid" -->`, correct: `<!-- validate at validator.w3.org anyway -->`, reason: "Browsers silently repair errors — but different browsers repair them differently. Validation catches what your eyes miss." }
  ],
  tryItYourself: {
    html: `<p>Hello\n<div>World</div>`,
    instructions: "Find and fix the two markup errors (hint: unclosed tag, invalid nesting)."
  },
  takeaways: [
    "Validators find markup errors automatically.",
    "Valid code behaves consistently across browsers.",
    "'Looks fine in my browser' is not proof of validity."
  ],
  quizQuestions: [
    { id: "html-validation-1", question: "What does an HTML validator check?", options: ["Spelling of text", "Markup errors against the HTML standard", "Internet speed", "Color choices"], correctAnswerIndex: 1, explanation: "Validators scan for unclosed tags, bad nesting, duplicate ids, and other markup errors." },
    { id: "html-validation-2", question: "Why validate if the page looks fine in your browser?", options: ["No need", "Browsers silently repair errors differently from each other", "It makes pages load faster", "Google requires it"], correctAnswerIndex: 1, explanation: "Each browser guesses differently at broken markup — valid code renders consistently everywhere." }
  ]
};

export const htmlCleanHtmlStructureContent: LessonContent = {
  heroTagline: "Write code that humans love to read.",
  introduction: "Clean HTML means consistent indentation, semantic tags instead of div soup, lowercase tags, and comments marking big sections. Future you will thank present you.",
  definition: {
    term: "Clean HTML",
    explanation: "Well-formatted, semantic, consistent markup that's easy to read and maintain."
  },
  whyItMatters: "You read code far more than you write it. Clean structure turns debugging from archaeology into a quick scan.",
  realWorldAnalogy: {
    title: "A Tidy Desk",
    story: "On a tidy desk you find anything in seconds; on a messy one, nothing.",
    comparison: [
      { item: "Tidy desk", meaning: "Clean indented markup — structure visible at a glance" },
      { item: "Messy desk", meaning: "Div soup — everything piled together" }
    ]
  },
  syntaxStructure: `<body>
  <header>
    <h1>Title</h1>
  </header>
</body>`,
  codeExample: `<body>
  <header>
    <h1>Sunrise Bakery</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="menu.html">Menu</a>
    </nav>
  </header>
  <main>
    <h2>Welcome</h2>
    <p>Fresh bread every morning.</p>
  </main>
</body>`,
  codeAnnotations: [
    { lineOrToken: "indentation", description: "Each nesting level indents 2 spaces — the structure becomes visible." },
    { lineOrToken: "<header>, <nav>, <main>", description: "Semantic tags instead of div soup — meaning is clear." }
  ],
  commonMistakes: [
    { wrong: `<DIV CLASS="Header"><H1>Hi</H1></DIV>`, correct: `<header class="header"><h1>Hi</h1></header>`, reason: "Uppercase tags work but break convention — every codebase and tool expects lowercase, semantic markup." }
  ],
  tryItYourself: {
    html: `<body><div><h1>Hi</h1><p>Welcome.</p></div></body>`,
    instructions: "Rewrite with clean indentation (2 spaces per level) and lowercase tags."
  },
  takeaways: [
    "Indent consistently — 2 spaces per nesting level.",
    "Use lowercase tags and semantic elements.",
    "Clean code is faster to debug and easier to maintain."
  ],
  quizQuestions: [
    { id: "html-clean-1", question: "What is NOT part of clean HTML?", options: ["Consistent indentation", "Semantic tags", "UPPERCASE tags everywhere", "Comments marking sections"], correctAnswerIndex: 2, explanation: "Clean HTML uses lowercase tags by convention; uppercase breaks consistency." },
    { id: "html-clean-2", question: "Why does clean structure matter?", options: ["Browsers require it", "You read code more than you write it — clean code debugs faster", "It makes pages load faster", "It adds SEO keywords"], correctAnswerIndex: 1, explanation: "Readable markup turns debugging from archaeology into a quick scan." }
  ]
};