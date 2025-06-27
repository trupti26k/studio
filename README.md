# TipSplit: The Smart Tip Calculator

TipSplit is a sleek and intuitive web application designed to make splitting bills and calculating tips effortless. Built with a modern tech stack, it offers a clean user interface and a seamless user experience, making it easy to use for everyone.

![TipSplit Screenshot](https://placehold.co/800x500.png)

## Features

- **Bill Amount Input**: Enter the total bill amount in Indian Rupees (INR).
- **Adjustable Tip Percentage**: Use a slider or preset buttons (10%, 15%, 18%, 20%, 25%) to select the perfect tip percentage.
- **Split Between People**: Easily increase or decrease the number of people to split the bill with.
- **Round Up Total**: An option to round the "total per person" up to the nearest whole number for simple, even payments.
- **Real-time Calculation**: All values update instantly as you change the inputs, providing immediate feedback.
- **Responsive Design**: Looks and works great on desktops, tablets, and mobile devices.
- **Reset Functionality**: Clear all inputs and start a new calculation with a single click.

## Tech Stack

This project is built with a modern, production-ready tech stack:

- **Framework**: [Next.js](https://nextjs.org/) (using the App Router)
- **UI Library**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **AI Integration**: [Google's Genkit](https://firebase.google.com/docs/genkit) (scaffolded for potential future AI features)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en) (version 20 or later) and npm installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/firebase/firebase-genkit-nextjs-starter.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd firebase-genkit-nextjs-starter
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Development Server

To start the local development server, run:

```sh
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the application.

## Deployment

This application is optimized for deployment on modern hosting platforms that support Next.js, such as [Firebase App Hosting](https://firebase.google.com/docs/app-hosting) or Vercel.

The `apphosting.yaml` file is pre-configured for a seamless deployment experience on Firebase App Hosting.
