# E-Commerce Website

This is a feature-rich e-commerce website built using React, Context API, Firebase, Vite, Framer Motion, and React Toster. The website allows users to browse and shop for clothing, with dedicated pages for Men, Women, and Kids. It also includes functionalities such as adding products to a wishlist or cart, checking out, and a robust admin dashboard for managing products and orders.

## Features

### User Features

- **Homepage**: A landing page with featured products and categories.
- **Men's Page**: Browse clothing items for men.
- **Women's Page**: Browse clothing items for women.
- **Kids' Page**: Browse clothing items for kids.
- **Show Product Page**: View detailed information about a specific product.
- **Add to Cart**: Add products to the shopping cart.
- **Add to Wishlist**: Save products for future reference.
- **Checkout**: Complete purchases and place orders.
- **User Page**: Manage user information and view order history.

### Admin Features

- **Product Management**: Add, update, and delete products.
- **Order Management**: View and manage user orders.
- **Charts**: Visualize data such as sales and product performance.

## Tech Stack

- **React**: Frontend framework for building UI components.
- **Context API**: State management for the application.
- **Firebase**: Backend services for authentication and database.
- **Vite**: Build tool for fast development and production builds.
- **Framer Motion**: Animations for a dynamic user experience.
- **React Toster**: Notifications for user interactions.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project_directory>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file and add your Firebase configuration:

   ```env
   VITE_API_KEY=<your_firebase_api_key>
   VITE_AUTH_DOMAIN=<your_firebase_auth_domain>
   VITE_PROJECT_ID=<your_firebase_project_id>
   VITE_STORAGE_BUCKET=<your_firebase_storage_bucket>
   VITE_MESSAGING_SENDER_ID=<your_firebase_messaging_sender_id>
   VITE_APP_ID=<your_firebase_app_id>
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the application in your browser:
   ```
   http://localhost:5173
   ```

## Project Structure

```plaintext
src/
├── components/        # Reusable UI components
├── pages/             # Page components (Home, Men, Women, etc.)
├── context/           # Context API state management
├── firebase/          # Firebase configuration and services
├── assets/            # Images and static files
├── styles/            # CSS or Tailwind styles
├── utils/             # Utility functions
└── App.jsx            # Main app component
```

## Usage

### User Interface

1. Browse products by category (Men, Women, Kids).
2. Add products to your cart or wishlist.
3. Proceed to checkout to place orders.

### Admin Dashboard

1. Navigate to the Admin Dashboard.
2. Add new products or update/delete existing ones.
3. View and manage user orders.
4. Analyze sales data using charts.

## Animations

- Framer Motion is used to create smooth transitions and interactive animations for a better user experience.

## Notifications

- React Toster is used to show notifications for actions such as adding to cart, completing orders, or managing products.

## Deployment

1. Build the project for production:

   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to your preferred hosting provider.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to contribute or report issues by opening an issue or a pull request.
