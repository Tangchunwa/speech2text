prerequied:
Xcode -MacOS to build the IOS native app

step to install (use terminal) :

git clone https://github.com/Tangchunwa/speech2text.git

cd speech2text

npm install

npx expo prebuild

Then open the file  ios/speech2text.xcworkspace using Xcode：you can a.type "open ios/speech2text.xcworkspace" in terminal  OR
        b.Direct open it in Finder 

After open the xcworkspace in Xcode 
 1.set build config to "release"
<img width="442" alt="Screenshot 2024-11-22 at 13 34 45" src="https://github.com/user-attachments/assets/ed00dd98-28b0-494f-b1f8-553c9dbc4f02">
<img width="469" alt="Screenshot 2024-11-22 at 13 35 25" src="https://github.com/user-attachments/assets/d25e5f9d-5a17-4d4a-9a4c-b46d0256ce8e">


2. click your project name and set Team name and bundle indentifier

<img width="971" alt="Screenshot 2024-11-22 at 13 37 17" src="https://github.com/user-attachments/assets/f90d344e-3215-4dbb-936c-d2ae40d0bfbc">

3. Finally choose your device (local ios device),Run it .

<img width="908" alt="Screenshot 2024-11-22 at 13 38 17" src="https://github.com/user-attachments/assets/979d0bd9-bc10-45f8-90c6-fd5f9548408c">




