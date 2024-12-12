# Per Product Widgets

## Overview

This React application demonstrates a product widget management system where users can interact with per-product widgets. The app retrieves data from an API and allows users to modify widget properties such as badge color, activation status, tooltip, and linkage to public profiles.

## Features

- **Dynamic Widget Management**: Displays widgets with data fetched from a mock API.
- **User Interaction**: Allows users to:
  - Change badge color.
  - Activate or deactivate a badge.
  - Toggle linkage to a public profile.
- **Tooltip for Information**: Provides additional details about specific features using tooltips.

## Project Structure

```
src/
│   ├── assets/        # Static assets like images/svg and icons
├── App.css            # Styling for the main application container
├── App.jsx            # Root component
├── index.css          # Global styles
├── main.jsx           # Main application logic
├── Widget.css         # Styling for the individual widgets
├── Widget.jsx         # Widget component with interaction logic and state management
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:devjavedmohd/react-test.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-test
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

2. Open the application in your browser at (http://localhost:5173) - your might be different while running application - [npm start]

### Using the Application

- Upon loading, widgets will be fetched from the mock API endpoint: `https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets`.
- Interact with each widget by:
  - Changing the badge color using the color palette.
  - Activating or deactivating the badge with a toggle switch.
  - Linking or unlinking the badge to a public profile.

## Code Highlights

### App Component

- **`fetchWidgets`**: Fetches widget data from the API and populates the `widgets` state.
- **`updateWidget`**: Updates individual widget properties dynamically.
- **State Management**:
  - `widgets`: Holds the list of widgets.
  - `activeWidgetId`: Tracks the currently active widget.

### Widget Component

- Handles user interactions, such as:
  - Changing badge color.
  - Managing tooltips.
  - Toggling activation and linkage statuses.
- Uses `useEffect` to manage click events for closing tooltips.

## API Integration

- The app fetches widget data from a mock API endpoint.
- Example API Response:
  ```json
  [
    {
      "id": 1,
      "action": "reduced",
      "amount": 50,
      "type": "plastic",
      "selectedColor": "green",
      "active": true,
      "linked": false
    }
  ]
  ```

## Known Issues

- Tooltip positioning may require adjustments for edge cases.
- Error handling for the API call is basic and can be expanded for better user feedback.

## Future Improvements

- Enhance API integration with more robust error handling.
- Add unit tests for key components.
- Make the tooltip behavior more customizable.
- Add support for theme customization.
