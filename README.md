# Simple Website Layout

This project provides a basic HTML template for a website layout using Tailwind CSS and custom styles. It includes a responsive navigation bar with support for light and dark themes, a mobile menu button, and an icon-based logo.

## Features

- **Responsive Navigation Bar**: Adapts to different screen sizes with a mobile menu button.
- **Dark Mode Support**: Toggle between light and dark themes.
- **Custom Fonts**: Utilizes Google Fonts for styling.
- **SVG Icons**: Includes SVG icons for the logo and mobile menu.

## Technologies Used

- **HTML5**: Markup language for structuring the content.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Google Fonts**: Font library for custom typography.
- **SVG**: Scalable Vector Graphics for icons.

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   Install Dependencies
   ```

Make sure you have Tailwind CSS installed and configured. The styles/output.css file should be generated from your Tailwind configuration.

Run the Project

Open the index.html file in your browser to view the layout.

File Structure
index.html: The main HTML file containing the layout.
styles/output.css: Compiled Tailwind CSS file.
assets/: Contains images and SVGs used in the project.
Customization
Colors: Adjust the colors in the Tailwind configuration or the styles/output.css file.
Fonts: Modify the Google Fonts link in the <head> section to use different fonts.
Logo: Replace the SVG path in the <svg> element with your own logo.
Example
Here is a snippet of the HTML layout:

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="styles/output.css" />
    <title>site</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Tailwind CSS
Google Fonts
SVG Repo for SVG icons
