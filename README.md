# Pedometer Bug Reproduction

This project demonstrates an issue with the `Pedometer` module from `expo-sensors` on Android, where the `watchStepCount` function does not include steps taken while the app is closed.

---

## Prerequisites

Make sure you have the following installed:

- Node.js (>=16.x)
- Android Studio
- A physical Android device

---

## Running the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/freddy-b-cyber/PedometerExpo.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start metro:

   ```bash
   npm start
   ```

4. Start the application in Android Studio

---

## Steps to Reproduce the Bug

1. Launch the app and ensure the pedometer starts counting steps.
2. Close the app (do not terminate metro).
3. Walk a few steps while the app is closed.
4. Reopen the app and check the step count.

---

## Expected Behavior

When the app is reopened, watchStepCount's callback should include all steps taken while the app was closed.

---

## Actual Behavior

When the app is reopened, watchStepCount's callback only includes steps taken after the app is reopened. Steps taken while the app was closed are not accounted for.

---

## Notes

- Refer to the [Android Sensor Documentation](https://developer.android.com/reference/android/hardware/Sensor#TYPE_STEP_COUNTER) for more details about `TYPE_STEP_COUNTER`.
