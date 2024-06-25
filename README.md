

# HackerRank Automation

The HackerRank Automation project utilizes JavaScript and the Node.js environment along with the Puppeteer package to automate the process of logging in, selecting questions, and submitting code on the HackerRank platform. This automation aims to enhance efficiency by eliminating manual intervention in repetitive tasks.

## Getting Started

To run the HackerRank Automation script on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd HackerRank-Automation
   ```

2. **Install dependencies:**
   Ensure Node.js is installed on your machine. Then install Puppeteer:
   ```bash
   npm install puppeteer
   ```

3. **Download Chromium browser:**
   Puppeteer requires Chromium to run automation tasks. Download it based on your operating system:
   - [Chromium Browser Download](https://www.chromium.org/getting-involved/download-chromium)

4. **Run the script:**
   - Save both `hk.js` and `puppeteer` files in your local machine.
   - Open a terminal or command prompt and navigate to the directory where `hk.js` is located.
   - Execute the script using Node.js:
     ```bash
     node hk.js
     ```
   - Watch as the script automatically interacts with the HackerRank website, demonstrating seamless login, question selection, and code submission.

## Notes

- Ensure that Puppeteer is correctly installed and configured with the appropriate version of Chromium.
- Customize the `hk.js` script as per your requirements for different tasks on HackerRank.
- This project showcases how automation can streamline repetitive tasks, saving time and effort.

---

This README provides comprehensive instructions for setting up and running the HackerRank Automation project using Puppeteer in a Node.js environment. Replace `<repository-url>` with the actual URL of your GitHub repository where the project is hosted. Adjust any other details or links based on your specific setup and requirements.
