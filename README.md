# Playwright TestingBot Examples

A collection of practical examples showing how to run Playwright tests on the TestingBot cloud grid.

This project demonstrates how to execute cross-browser and real device tests using Playwright + TestingBot in a simple and clean way.

## Features

- Playwright tests ready to run on TestingBot
- Examples for desktop browsers (Chrome, Firefox, Edge, Safari)
- Support for parallel execution
- Easy configuration with environment variables
- Clean and beginner-friendly structure

## Requirements

- Node.js 18 or higher
- A TestingBot account ([sign up here](https://testingbot.com))
- Playwright

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

3. Install Playwright browsers (optional for local runs):

```bash
npx playwright install
```

4. Create a `.env` file and add your TestingBot credentials:

```env
TESTINGBOT_KEY=your_key_here
TESTINGBOT_SECRET=your_secret_here
```

## Usage

### Run tests on TestingBot

```bash
npm test
```

### Run a specific test

```bash
npx playwright test tests/example.spec.js
```

### Run tests in parallel

```bash
npx playwright test --workers=2
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

## Configuration

The project uses `playwright.config.js` to connect to TestingBot.  
You only need to set your `TESTINGBOT_KEY` and `TESTINGBOT_SECRET`.

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please keep the code clean and add examples when possible.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
