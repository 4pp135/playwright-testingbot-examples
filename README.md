# Playwright TestingBot Examples

A collection of practical examples showing how to run Playwright tests on the TestingBot cloud grid.

This project demonstrates how to execute cross-browser tests using Playwright + TestingBot in a simple and clean way.

## Features

- Playwright tests ready to run on TestingBot cloud
- Examples for Chrome, Firefox and Safari (WebKit)
- Clean configuration using environment variables
- Beginner-friendly structure

## Requirements

- Node.js 18 or higher
- A TestingBot account ([sign up here](https://testingbot.com))
- Your TestingBot Key and Secret

## Installation

1. Clone the repository:

```bash
git clone https://github.com/4pp135/playwright-testingbot-examples.git
cd playwright-testingbot-examples
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with your TestingBot credentials:

```bash
cp .env.example .env
```

Then edit the `.env` file and add your real credentials:

```env
TESTINGBOT_KEY=your_key_here
TESTINGBOT_SECRET=your_secret_here
```

> You can find your Key and Secret here:  
> [https://testingbot.com/members/user/edit](https://testingbot.com/members/user/edit)

## Usage

### Run tests on TestingBot (Chrome)

```bash
npx playwright test tests/example.spec.js --project=chromium
```

### Run all browsers

```bash
npm test
```

### Run a specific browser

```bash
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Project Structure

```bash
playwright-testingbot-examples/
├── tests/
│   └── example.spec.js
├── playwright.config.js
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Important Notes

- The `.env` file must **never** be uploaded to GitHub (it is already in `.gitignore`).
- Tests will run on TestingBot cloud browsers, not on your local machine.
- Free and Open Source plans on TestingBot have limited parallel sessions (usually 1 or 2).

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
