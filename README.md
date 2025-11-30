# Date Range Calendar

This is a customizable and responsive date range calendar component built with Next.js, React, and Tailwind CSS. It provides a user-friendly interface for selecting a range of dates, with features like displaying daily prices and disabling certain dates.

## Features

- **Date Range Selection:** Allows users to select a start and end date.
- **Dual-Mode Display:** Can be rendered as a popover (`popup`) or a full-screen `modal`.
- **Dynamic Pricing:** Displays prices for individual days within the calendar.
- **Disabled Dates:** Supports disabling specific dates to prevent selection.
- **Responsive Design:** Adapts to different screen sizes, with an automatic switch to modal view on smaller screens.
- **Custom Styling:** Styled with Tailwind CSS for a modern and clean look.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Library:** [React](https://reactjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Calendar Logic:** [React Day Picker](https://react-day-picker.js.org/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v20 or later)
- npm

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/your_username/date-range-calendar.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd date-range-calendar
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Application

Run the development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API

The calendar fetches data for disabled dates and daily prices from a local API endpoint:

- `GET /api`: Returns a JSON object with `disabledDates` and `pricesByDate`.

This endpoint simulates fetching data from a backend service. You can modify `app/api/route.ts` to customize the data provided to the calendar.