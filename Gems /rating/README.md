# Interactive Star Rating Component

A sleek, responsive, and interactive star rating component built with HTML, CSS, and JavaScript. This component provides a visually appealing way to collect and display user ratings with real-time updates and animated feedback.

![Star Rating Preview](https://via.placeholder.com/800x400?text=Star+Rating+Component)

## Features

- ⭐ Interactive 5-star rating system
- 📊 Dynamic rating distribution graph
- 🎨 Smooth animations and transitions
- 💬 Contextual feedback messages
- 📱 Fully responsive design
- 🖥️ Cross-browser compatibility
- 🎯 Hover effects and tooltips
- 📈 Real-time statistics updates

## Demo

View the live demo [here](https://your-demo-link.com)

## Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/star-rating-component.git
```

2. Include the required Font Awesome CDN in your HTML:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```

3. Copy the HTML, CSS, and JavaScript files to your project.

## Usage

1. Add the component to your HTML:
```html
<div class="rating-card">
  <span class="heading">User Rating</span>
  <div class="stars-container">
    <div id="stars">
      <span class="fa fa-star" data-value="1" title="Poor"></span>
      <span class="fa fa-star" data-value="2" title="Fair"></span>
      <span class="fa fa-star" data-value="3" title="Good"></span>
      <span class="fa fa-star" data-value="4" title="Very Good"></span>
      <span class="fa fa-star" data-value="5" title="Excellent"></span>
    </div>
    <div class="tooltip"></div>
  </div>
  <!-- ... Rest of the component ... -->
</div>
```

2. Initialize the rating system:
```javascript
// The component will automatically initialize with the included script
// No additional initialization required
```

## Customization

### Colors

Modify the gradient colors in the CSS:
```css
.bar-5 {background: linear-gradient(90deg, #04AA6D, #06c17d);}
.bar-4 {background: linear-gradient(90deg, #2196F3, #21bbf3);}
.bar-3 {background: linear-gradient(90deg, #00bcd4, #00e5ff);}
.bar-2 {background: linear-gradient(90deg, #ff9800, #ffad33);}
.bar-1 {background: linear-gradient(90deg, #f44336, #ff6659);}
```

### Rating Messages

Customize feedback messages in the JavaScript:
```javascript
const messages = {
  1: "We're sorry to hear that. Please let us know how we can improve!",
  2: "Thanks for the feedback. We'll work on getting better!",
  3: "Thank you for your rating. We appreciate your feedback!",
  4: "Thanks! We're glad you had a good experience!",
  5: "Excellent! Thank you for your amazing feedback!"
};
```

## Features in Detail

### Interactive Stars
- Hover effects with scaling animation
- Click to rate functionality
- Visual feedback on selection
- Tooltips showing rating descriptions

### Rating Distribution Graph
- Animated bars showing rating distribution
- Percentage and count display
- Color-coded bars for different ratings
- Smooth transitions on updates

### Responsive Design
- Mobile-friendly layout
- Flexible container sizing
- Readable typography at all screen sizes
- Optimized touch targets for mobile devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Font Awesome for the star icons
- Inspiration from various rating systems across the web
- Contributors and feedback from the community

## Support

For support, email support@yourdomain.com or open an issue in the GitHub repository.
