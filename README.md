# Test Task Clario

To run app pull the project to local, run npm i and npm run dev.
I will explain how the project is structured and my chain of thought a bit.

## Overview
I chose to use Vite and minimal dependencies, only adding MUI as the main UI library. Otherwise, I would have used third-party validators and form libraries. I didn't include tests since the business (validation) logic isn't very complex, but specifications can be easily added as the logic is mostly separated from the view into custom hooks. For styling, I opted for the common `sx` approach for better readability, although this is quite controversial (as most conventions in React). Alternatively, I could have used SCSS or Tailwind.

## Folder Structure
I implemented a modular structure for this app:
- **components**: Contains view TSX files without business logic.
- **customHooks**: Custom hooks for managing state and logic.
- **interfaces**: Reusable TypeScript types.
- **layouts**: Layout components that define the structure of the application.
- **pages**: Main pages of the application.
- **styles**: Reusable MUI styles.
- **utils**: Utility functions for common tasks.

The `api` and `templates` folders are missing due to limited functionality. This structure works well for mid-sized projects, so I chose it, but I could follow any other convention if the project requires it. Additionally, in some places, small local functions and types are initialized in the same files as components. This is a common practice for better readability, but it is yet another controversial take—some developers prefer full decoupling.

## App Logic
I understood the task as follows:
1. User input results in only positive, non-interruptive feedback.
2. If the user submits with a validation error, negative feedback is shown.
3. If the user submits without an error, they are redirected (I made it `_blank` so it would be easier to review).
