# Simple Digital Counter & Theme Toggle App Using React Native

## Problem Statement

Build a single-screen mobile application using React Native. The app functions as a digital counter that allows users to increment, decrement, and reset a number displayed on the screen. To make the app more interactive, it must also include a "Theme Toggle" button that switches the screen's background and text colors between a Light Mode and a Dark Mode.

This assignment focuses on your ability to set up a basic React Native environment, layout components cleanly using Flexbox, and manage UI changes dynamically using React's state management.

### Implementation Rules

#### Core Layout

The application must use standard React Native components:

* View
* Text
* TouchableOpacity (or Button)

The counter UI should be perfectly centered on the screen.

#### State Management

Use the `useState` hook to manage two pieces of state:

* The current counter value (integer)
* The active theme mode (boolean or string)

#### Counter Logic

* The counter should start at 0.
* The "Increment" button must increase the count by 1.
* The "Decrement" button must decrease the count by 1, but it should never let the counter go below 0 (prevent negative numbers).
* The "Reset" button must bring the count back to 0.

#### Dynamic Styling

##### Light Mode (Default)

* White background
* Dark text

##### Dark Mode

* Dark gray/black background
* White text

Clicking the "Toggle Theme" button should instantly swap these styles across the entire screen.

### You must have the followings:

#### 1. UI Layout & Component Structure

Correctly structure the app using a parent container, a text display for the counter, and a clean arrangement of buttons using Flexbox (e.g., placing the increment/decrement buttons side-by-side).

Use proper React Native style properties:

* flex
* justifyContent
* alignItems
* fontSize
* padding

#### 2. Counter State & Validation Logic

Successfully implement the `useState` hook to track and dynamically display the counter value.

Implement:

* Increase function
* Decrease function
* Reset function

Constraint Check:

Add an internal conditional check to ensure that clicking decrement at 0 does nothing, keeping the app safe from negative values.

#### 3. Dynamic Theme Toggling

Implement state tracking for the theme (e.g., `isDarkMode`).

Use conditional styling or ternary operators within your style objects to alter:

* `backgroundColor` of the main container
* `color` of text components

based on the theme state.

#### 4. Code Cleanliness & Best Practices

* Maintain well-organized code
* Use proper component separation or readable inline styling
* Use meaningful variable and function names

  * `handleIncrement`
  * `toggleTheme`
  * etc.

Ensure no obvious runtime crashes occur during interactions.

#### Deployment Requirement

Those who are having Android mobile must run it on the mobile in development mode.

Those having iPhone may run it in the Android Studio emulator.

## Example

### Initial State

```text
Counter Value: 0
Theme: Light Mode
```

### User Actions

```text
Click Increment
Click Increment
Click Increment
```

### Result

```text
Counter Value: 3
Theme: Light Mode
```

### Theme Toggle

```text
Click Toggle Theme
```

### Result

```text
Counter Value: 3
Theme: Dark Mode
Background: Dark
Text: White
```

## Solution Overview

The application uses React Native and the `useState` hook to manage both the counter value and the current theme. User interactions trigger state updates, causing the interface to re-render automatically with updated values and styles.

The counter supports incrementing, decrementing, and resetting while enforcing a validation rule that prevents negative values. Theme switching is implemented through conditional styling, allowing the entire interface to instantly transition between light and dark modes.

## Features Implemented

* Counter initialization at 0
* Increment functionality
* Decrement functionality with boundary validation
* Reset functionality
* Light Mode support
* Dark Mode support
* Dynamic theme switching
* Responsive Flexbox layout
* State-driven UI updates

## Technologies Used

* React Native
* Expo
* JavaScript (ES6+)
* React Hooks (`useState`)

## Complexity Analysis

Let **N** represent the number of user interactions.

### Increment Operation

```javascript
setCounter(counter + 1)
```

* Time Complexity: O(1)
* Space Complexity: O(1)

### Decrement Operation

```javascript
if (counter > 0)
```

* Time Complexity: O(1)
* Space Complexity: O(1)

### Reset Operation

```javascript
setCounter(0)
```

* Time Complexity: O(1)
* Space Complexity: O(1)

### Theme Toggle

```javascript
setIsDarkMode(!isDarkMode)
```

* Time Complexity: O(1)
* Space Complexity: O(1)

### Rendering Course of Execution

Each state update triggers a React re-render of the component.

* Time Complexity: O(1) per interaction
* Space Complexity: O(1)

## Conclusion

This project demonstrates the fundamentals of React Native application development, including component-based UI design, Flexbox layouts, state management with React Hooks, event handling, and dynamic styling. The implementation successfully satisfies all assignment requirements by providing a responsive counter system, enforcing input constraints, and supporting real-time theme switching between Light Mode and Dark Mode.

---

## React Native Setup

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npx expo start
```

### Run on Android Device

```bash
npx expo start --android
```

### Run on Android Emulator

Open Android Studio Emulator and run:

```bash
npx expo start --android
```

---

**Author:** Ankit Kumar
