export const footerStyles = {
  // Main container
  footer: "relative bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 overflow-hidden",
  topBorder: "absolute top-0 left-0 w-full h-1 bg-gradient-to-br from-gray-300 to-gray-500",
  patternOverlay: "absolute inset-0 opacity-5",
  
  // Container
  mainContainer: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10",
  
  // Newsletter section
  newsletterSection: "py-12 border-b border-gray-200 border-dashed",
  newsletterContent: "text-center",
  newsletterTitle: "text-2xl font-serif font-bold text-gray-900 mb-4",
  newsletterText: "text-gray-600 max-w-2xl mx-auto mb-6",
  
  // Newsletter form
  formContainer: "flex flex-col sm:flex-row justify-center items-center max-w-md mx-auto",
  emailInput: "px-4 py-3 w-full rounded-t-lg sm:rounded-l-lg sm:rounded-r-none rounded-b-lg sm:mb-0 mb-3 border border-gray-300 focus:outline-none",
  subscribeButton: "px-6 py-3 bg-gradient-to-br from-gray-300 to-gray-500 text-white font-medium rounded-b-lg sm:rounded-r-lg sm:rounded-l-none rounded-t-lg transition-colors shadow-md hover:shadow-lg",
  
  // Main footer grid
  mainGrid: "py-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
  
  // Brand section
  brandSection: "space-y-4",
  brandContainer: "flex items-center",
  brandIconContainer: "relative",
  brandIconPing: "absolute inset-0 rounded-full bg-amber-200 animate-ping opacity-20",
  brandIcon: "h-10 w-10 text-gray-500 relative z-10",
  brandName: "ml-3 text-2xl font-bold font-serif bg-black bg-clip-text text-transparent",
  brandDescription: "text-sm text-gray-600 max-w-xs leading-relaxed",
  socialIconsContainer: "flex space-x-4 pt-2",
  socialIcon: "h-10 w-10 rounded-full bg-white flex items-center justify-center hover:text-black text-gray-500 transition-all duration-300 shadow-sm hover:shadow-md",
  socialIconInner: "h-5 w-5",
  
  // Section headings
  sectionHeading: "text-lg font-serif font-semibold text-gray-900 mb-4 flex items-center",
  sectionIcon: "h-5 w-5 text-gray-500 mr-1",
  
  // Links lists
  linksList: "space-y-3",
  linkItem: "text-sm text-gray-600 hover:text-black transition-colors flex items-center group w-fit",
  linkIcon: "h-4 w-4 text-black opacity-0 group-hover:opacity-100 transition-opacity mr-1",
  
  // Contact Info
  contactList: "space-y-4",
  contactItem: "flex items-start",
  contactIconContainer: "h-10 w-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center flex-shrink-0 mr-3",
  contactIcon: "h-5 w-5 text-black",
  contactText: "text-sm text-gray-600",
  
  // Bottom section
  bottomSection: "py-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 border-dashed",
  copyright: "text-xs text-gray-500 flex items-center mb-4 md:mb-0",
  heartIcon: "h-3 w-3 mx-1 text-amber-600 fill-current",
  designerLink: "text-xs text-gray-500",
  linkHover: "hover:text-blue-600 transition-colors",
  
  // Support links
  supportLink: "text-sm text-gray-600 hover:text-black transition-colors flex items-center group",
  
  // CSS for media queries (keep as object)
  mediaQueries: `
    @media (width: 1024px) {
      .max-w-7xl > .py-12 {
        padding-top: 3rem;
        padding-bottom: 3rem;
      }
    }

    @media (min-width: 640px) {
      input[type="email"] {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      button[aria-label="Subscribe"] {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }

    @media (max-width: 640px) {
      footer .opacity-5 { opacity: 0.03 !important; }
    }
  `
};


const testimonialPageStyles = {
  // Page layout
  pageSection: "py-12 bg-white ",
  container: "container mx-auto px-6 ",
  
  // Title
  title: "text-3xl md:text-4xl text-center font-extralight text-gray-900 tracking-wide mb-10",
  
  // Horizontal scroller
  scroller: "flex gap-8 overflow-x-auto pb-6 px-2 md:px-6 snap-x snap-mandatory cursor-grab",
  
  // Card styles
  card: "snap-center flex-shrink-2 min-w-[92%] md:min-w-[48%] lg:min-w-[49%] bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col lg:flex-row",
  
  // Image block
  imageBlock: "w-full lg:w-5/12 min-h-[220px] md:min-h-[300px] overflow-hidden relative rounded-t-2xl lg:rounded-l-2xl",
  image: "absolute inset-0 w-full h-full object-cover",
  
  // Content block
  contentBlock: "w-full lg:w-7/12 p-8 flex flex-col justify-between",
  cardTitle: "text-lg md:text-xl font-bold tracking-tight text-gray-900 mb-3",
  cardMeta: "text-sm text-gray-400 mb-6",
  cardExcerpt: "text-gray-600 leading-relaxed",
  
  // Scrollbar hiding
  scrollbarHide: "container ::-webkit-scrollbar { display: none; } .container { -ms-overflow-style: none; scrollbar-width: none; }",
};


export {  testimonialPageStyles };

export const watchOfferBannerStyles = {
  // Layout
  container: "min-h-screen -mx-2 xl:-mx-0 md:-mx-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4",
  maxWidthContainer: "max-w-6xl w-full",
  
  // Banner
  banner: "bg-gradient-to-r from-gray-900 to-navy rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row",
  
  // Content Section
  contentSection: "flex-1 p-8 md:p-12 flex flex-col justify-center relative",
  
  // Decorative elements
  decorativeLarge: "absolute w-32 h-32 rounded-full border-4 border-gold/20 -top-8 -left-8",
  decorativeSmall: "absolute w-16 h-16 rounded-full border-4 border-gold/20 bottom-12 -right-8",
  
  // Offer tag
  offerTag: "bg-gold text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-6 self-start animate-pulse",
  
  // Heading
  heading: "text-4xl md:text-5xl font-heading font-bold text-white mb-4",
  headingAccent: "text-gold",
  
  // Description
  description: "text-gray-300 font-[pacifico] text-lg mb-8 max-w-md",
  
  // Countdown Timer
  countdownGrid: "grid grid-cols-4 -mx-6 md:-mx-0 xl:-mx-0 gap-4 mb-8 max-w-md",
  countdownItem: "bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center",
  countdownValue: "text-2xl md:text-3xl font-bold text-white",
  countdownLabel: "text-xs text-gray-200 mt-1",
  
  // Features
  featuresContainer: "flex flex-wrap gap-6",
  featureItem: "flex items-center text-gray-300",
  featureIcon: "text-gold mr-2",
  featureText: "text-sm",
  
  // Image Section
  imageSection: "flex-1 relative",
  imageOverlay: "absolute inset-0 bg-gradient-to-l from-gold/10 to-transparent z-10",
  image: "w-full h-full object-cover transition-transform duration-700 hover:scale-105",
  
  // Price Tag
  priceTag: "absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center shadow-lg",
  oldPrice: "text-xs text-gray-600 line-through",
  newPrice: "text-2xl font-bold text-navy",
  discount: "text-xs text-gold font-semibold",
  
  // Inline styles
  playfairFont: { fontFamily: "'Playfair Display', serif" }
};

export const comingSoonStyles = {
  // Section styles
  section: "bg-white text-gray-900 py-12",
  container: "max-w-7xl mx-auto px-6 lg:px-12",
  
  // Header
  headerContainer: "flex items-center justify-between mb-8",
  titleContainer: "",
  title: "text-2xl md:text-3xl tracking-wide uppercase",
  titleStyle: { fontFamily: "'Playfair Display', serif" },
  subtitle: "text-sm text-gray-500 mt-1 uppercase tracking-wider",
  viewAllLink: "text-sm text-gray-600 hover:text-gray-900 uppercase tracking-wide",
  
  // Watches Container
  watchesContainer: "w-full overflow-x-auto",
  watchesRow: "flex gap-8 items-start min-w-[1100px] lg:min-w-full justify-between",
  
  // Watch Item
  watchItem: "flex-1 max-w-xs flex flex-col items-center",
  imageContainer: "w-full flex justify-center",
  image: "object-contain h-56 md:h-64 lg:h-72 xl:h-80 transition-transform transform",
  
  // Figcaption
  figcaption: "mt-6 text-center",
  watchName: "text-xs md:text-sm uppercase tracking-widest text-gray-700 font-semibold",
  price: "mt-3 text-sm text-gray-600",
  
  // Function for formatting (keep as helper)
  formatINR: (n) => `₹ ${n.toLocaleString("en-IN")}`
};


export const bannerHomeStyles = {
  // Layout styles
  container: "relative overflow-x-hidden min-h-[90vh] flex flex-col",
  navbarWrapper: "absolute top-0 pt-10 left-0 w-full z-20",
  videoContainer: "absolute inset-0 z-0",
  contentContainer: "container mx-auto px-4 py-24 z-10 pt-40 relative flex flex-col items-center text-center",
  
  // Typography
  h1Container: "mb-12 md:mb-16",
  h1Text: "text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light mb-4 md:mb-6 leading-tight",
  h1SpanGray: "inline text-gray-100",
  h1SpanYellow: "text-yellow-500 font-[pacifico] inline-block ml-2 sm:ml-4",
  subtext: "text-white font-[pacifico] max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light",
  
  // Cards section
  cardsContainer: "relative w-full max-w-6xl mx-auto",
  grid: "grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 md:gap-8 items-end",
  
  // Individual cards
  cardWrapper: "flex flex-col items-center",
  cardBase: "bg-gradient-to-br from-gray-800 to-black rounded-xl shadow-2xl border border-gray-800 w-full",
  cardMiddle: "bg-gradient-to-br from-gray-800 to-black rounded-xl shadow-2xl border border-yellow-600/30 w-full",
  
  // Card images
  cardImage: "w-full object-cover rounded-lg",
  leftCardImage: "h-44 sm:h-56 md:h-64 lg:h-64",
  middleCardImage: "h-52 sm:h-64 md:h-72 lg:h-72",
  rightCardImage: "h-44 sm:h-56 md:h-64 lg:h-64",
  
  // Card labels
  cardLabel: "mt-3 font-light text-sm sm:text-base",
  cardLabelGray: "text-gray-300",
  cardLabelYellow: "text-yellow-500",
  
  // Transforms
  leftCardTransform: "transform rotate-0 sm:-rotate-12 md:-rotate-2 lg:-rotate-2 xl:-rotate-6 transition-all duration-500 xl:hover:rotate-0 xl:hover:scale-110",
  middleCardTransform: "transform translate-y-0 sm:-translate-y-8 md:-translate-y-16 transition-all duration-500 pt-3 hover:translate-y-0 hover:scale-110",
  rightCardTransform: "transform rotate-0 sm:rotate-12 md:rotate-1 xl:rotate-6 transition-all duration-500 xl:hover:rotate-0 xl:hover:scale-110 lg:rotate-2",
  
  // Padding variations
  cardPadding: "p-4 md:p-2 lg:p-2 sm:p-4",
  
  // Video styles
  video: "absolute inset-0 w-full h-full object-cover pointer-events-none",
  
  // Font family (inline styles)
  playfairFont: { fontFamily: "'Playfair Display', serif" }
};

// Add/update in src/assets/dummyStyles.js

export const watchPageStyles = {
  // Layout
  container: "px-6 sm:px-8 md:px-12 lg:px-24 py-12 bg-white min-h-screen",
  
  // Header Section
  headerContainer: "flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-10 gap-6 md:gap-0",
  headerTitle: "text-3xl sm:text-4xl md:text-5xl font-[pacifico] font-extrabold tracking-widest text-gray-500",
  titleAccent: "text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-cyan-500",
  headerDescription: "mt-3 text-sm text-gray-500 max-w-xl",
  
  // Filter Buttons
  filterContainer: "flex flex-wrap items-center gap-3",
  filterButtonBase: "inline-flex items-center cursor-pointer gap-2 px-4 py-2 rounded-full text-sm font-medium transition",
  filterButtonActive: "bg-gradient-to-r from-gray-400 to-gray-600 text-white",
  filterButtonInactive: "bg-white text-gray-700 border hover:shadow-sm",
  filterIcon: "w-4 h-4",
  
  // Grid
  grid: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8 md:gap-10",
  
  // Watch Card
  card: "group text-center",
  imageContainer: "relative mx-auto max-w-[240px] w-full h-[320px] md:h-[420px]",
  image: "w-full h-full object-contain",
  
  // Cart Controls
  cartControlsContainer: "absolute left-1/2 -translate-x-1/2 bottom-2",
  cartQuantityControls: "inline-flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow",
  cartButton: "p-2 rounded cursor-pointer",
  cartQuantity: "px-3 py-1 text-center font-medium", // Note: Removed min-w-[36px] as per new code
  addToCartButton: "flex items-center cursor-pointer gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white shadow hover:bg-gradient-to-br from-gray-200 to-gray-400",
  addToCartIcon: "w-4 h-4",
  
  // Product Info
  productInfo: "mt-4",
  productName: "text-sm font-semibold uppercase",
  productDescription: "text-xs text-gray-500",
  productPrice: "mt-2 text-sm font-medium",
  
  // Loading States (NEW)
  loadingText: "text-center py-12 text-gray-500",
  noWatchesText: "text-center py-12 text-gray-500",
  
  // Quantity Controls (NEW)
  quantityButton: "p-2 rounded cursor-pointer",
  quantityIcon: "w-4 h-4"
};

// Update in src/assets/dummyStyles.js

export const navbarStyles = {
  // Layout
  header: "sticky top-4 z-50 flex justify-center",
  nav: "bg-white shadow-lg xl:rounded-full lg:rounded-full md:rounded-full rounded-lg px-4 sm:px-3 md:px-6 py-3 w-full sm:w-[95%] md:w-[90%] max-w-5xl",
  container: "flex items-center justify-between",
  
  // Brand/Logo
  brandContainer: "flex items-center",
  logoContainer: "flex items-center justify-center rounded-full bg-gray-100 p-2 mr-3",
  logoIcon: "h-6 w-6 text-gray-800",
  logoLink: "flex items-baseline gap-2 select-none",
  logoText: "text-lg sm:text-2xl md:text-2xl font-light tracking-wide",
  
  // Desktop Navigation
  desktopNav: "hidden md:flex items-center space-x-2",
  navItemBase: "relative flex items-center gap-1 px-4 py-2 text-sm transition-colors duration-200",
  navItemActive: "text-gray-900 font-semibold",
  navItemInactive: "text-gray-700 hover:text-gray-900",
  activeIndicator: "absolute left-0 -bottom-1 w-full h-0.5 rounded-full transition-opacity duration-200",
  activeIndicatorVisible: "opacity-100 bg-gradient-to-r from-gray-600 to-gray-400",
  activeIndicatorHidden: "opacity-0",
  
  // Right Actions
  rightActions: "flex items-center gap-6",
  cartLink: "text-gray-500 hover:text-gray-700 transition-colors relative",
  cartIcon: "h-5 w-5",
  cartBadge: "absolute -top-3 -right-3 sm:-top-4 sm:-right-4 inline-flex items-center justify-center px-1.5 py-1 text-xs rounded-full bg-gray-500 text-white font-medium",
  
  // Account Links
  accountLink: "hidden md:flex items-center cursor-pointer text-gray-500 hover:text-gray-700 transition-colors",
  accountIcon: "h-5 w-5 mr-1",
  accountText: "text-sm",
  
  // Mobile Menu
  mobileMenuButton: "md:hidden",
  menuButton: "text-gray-500 hover:text-gray-700",
  menuIcon: "h-6 w-6",
  
  // Mobile Menu Content
  mobileMenu: "md:hidden mt-4 pb-4 border-t border-gray-200 pt-4",
  mobileMenuContainer: "flex flex-col space-y-2",
  mobileNavItemBase: "flex xl:items-center justify-center lg:items-center md:items-center px-4 py-2 text-sm rounded-lg transition-colors",
  mobileNavItemActive: "bg-gray-200 text-gray-900 font-semibold",
  mobileNavItemInactive: "text-gray-700 hover:bg-gray-50",
  mobileNavItemText: "font-medium",
  
  // Mobile Account Section
  mobileAccountContainer: "px-4 pt-2",
  mobileAccountLink: "flex xl:items-center justify-center lg:items-center md:items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50",
  mobileAccountButton: "w-full flex xl:items-center justify-center lg:items-center md:items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50",
  mobileAccountIcon: "h-4 w-4",
  
  // Inline styles
  logoTextStyle: {
    fontFamily: "'Playfair Display', serif",
    color: "#0a0a0a"
  },
  playfairFont: { fontFamily: "'Playfair Display', serif" }
};

export const cartPageStyles = {
  // Page layout
  pageContainer: "min-h-screen bg-gray-50 py-6 px-4 sm:px-6 md:px-8 lg:px-10",
  maxWidthContainer: "max-w-6xl mx-auto",
  
  // Empty cart state
  emptyCartContainer: "min-h-screen bg-gray-50 flex items-center justify-center p-6",
  emptyCartCard: "max-w-md text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-200",
  emptyCartIcon: "mx-auto text-gray-400 mb-4",
  emptyCartTitle: "text-2xl font-semibold mb-4 text-gray-800",
  emptyCartText: "text-gray-600 mb-6",
  emptyCartButton: "px-6 py-3 font-semibold text-black bg-gradient-to-br from-gray-200 to-gray-400 rounded-full transition-all inline-block",
  
  // Header section
  headerContainer: "flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8",
  backButtonContainer: "flex items-center gap-2 text-gray-800 mb-4 sm:mb-0",
  backLink: "flex items-center gap-2 text-gray-800 cursor-pointer transition-colors",
  backIconContainer: "p-2 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 shadow-md transition-all",
  backText: "font-medium",
  cartTitle: "text-3xl xl:pt-20 ml-5 pt-5 font-[pacifico] font-bold text-gray-700",
  clearCartButton: "mt-4 sm:mt-0 sm:ml-auto text-red-500 cursor-pointer flex items-center gap-1",
  
  // Main grid
  mainGrid: "grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8",
  
  // Left column container
  leftColumn: "lg:col-span-2 space-y-6 order-1",
  
  // Form container
  formContainer: "bg-white font-[pacifico] rounded-xl shadow-md p-6",
  formTitle: "text-xl font-semibold mb-4 text-gray-800",
  formSubtitle: "text-sm text-gray-500 mb-4",
  form: "space-y-4",
  inputGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  
  // Common form inputs
  inputBase: "w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none",
  textareaBase: "w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none resize-y",
  selectBase: "w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none",
  
  // Form buttons
  formButtonsContainer: "flex flex-col sm:flex-row gap-3",
  submitButton: "flex-1 bg-gradient-to-r from-gray-300 to-gray-500 text-white py-3 rounded-full cursor-pointer",
  continueShoppingButton: "px-6 py-3 border border-gray-500 text-black rounded-full text-center",
  
  // Cart items grid
  cartItemsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6",
  
  // Individual cart item
  cartItemCard: "bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300",
  cartItemImageContainer: "relative h-48 overflow-hidden flex items-center justify-center p-4",
  cartItemImage: "h-full w-full object-contain transition-transform duration-500",
  cartItemContent: "p-4",
  cartItemName: "font-semibold text-gray-800 text-lg mb-1 truncate",
  cartItemPrice: "text-gray-600 font-semibold text-md mb-4",
  quantityContainer: "flex items-center justify-between",
  quantityControls: "flex items-center gap-2 bg-gray-200 rounded-full px-3 py-1",
  quantityButton: "text-gray-600 cursor-pointer p-1",
  quantityText: "text-sm font-medium w-6 text-center",
  removeButton: "text-red-500 cursor-pointer p-2",
  
  // Order summary (right column)
  orderSummaryContainer: "bg-white rounded-xl shadow-md p-6 order-2",
  orderSummaryTitle: "text-xl font-semibold mb-6 text-gray-800 border-b pb-2",
  orderSummaryContent: "space-y-4 mb-6",
  summaryRow: "flex justify-between",
  summaryLabel: "text-gray-600",
  summaryValue: "font-medium",
  totalContainer: "flex justify-between items-center text-lg font-bold border-t pt-4 mb-6",
};

// Update in src/assets/dummyStyles.js

export const brandPageStyles = {
  // Loading state
  loadingContainer: "min-h-screen flex items-center justify-center p-6 bg-gray-50",
  loadingText: "animate-pulse text-lg font-medium text-gray-700",
  
  // Error/Not found state
  notFoundContainer: "min-h-screen flex items-center justify-center p-6 bg-gray-50",
  notFoundCard: "max-w-lg text-center bg-white rounded-2xl shadow-lg p-8 border border-amber-200",
  notFoundTitle: "text-2xl font-semibold mb-4 text-gray-800",
  notFoundText: "text-gray-600 mb-6",
  goBackButton: "px-6 py-3 bg-gray-500 text-white rounded-full hover:bg-amber-600 transition-all flex items-center justify-center gap-2 mx-auto",
  goBackIcon: "size-18",
  
  // Main container
  mainContainer: "min-h-screen bg-cover bg-fixed opacity-100 bg-center py-8 px-4 sm:px-6 md:px-8 lg:px-12",
  innerContainer: "max-w-7xl mx-auto relative",
  
  // Header
  headerContainer: "flex flex-col sm:flex-row items-center sm:items-start justify-between mb-8 gap-6",
  backButtonContainer: "flex items-center z-10",
  backButton: "flex items-center gap-2 text-gray-800 cursor-pointer transition-colors group",
  backIconContainer: "p-2 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 shadow-md transition-all",
  backIcon: "size-5",
  backText: "font-medium hidden sm:inline",
  
  // Title
  titleContainer: "flex-1 flex flex-col items-center justify-center z-10",
  title: "text-3xl sm:text-4xl md:text-5xl font-bold bg-white text-black rounded-full border border-gray-400 px-6 py-2 font-[pacifico] capitalize drop-shadow-md w-fit text-center",
  
  // Watch Grid
  grid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 relative z-10",
  
  // Watch Card
  card: "bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 group",
  
  // Image Container
  imageContainer: "relative h-48 md:h-56 lg:h-64 xl:h-55 overflow-hidden flex items-center justify-center p-4",
  image: "h-full w-full object-cover transition-transform duration-500",
  noImagePlaceholder: "w-full h-full flex items-center justify-center bg-gray-100 text-gray-400",
  
  // Details Container
  detailsContainer: "p-4",
  watchName: "font-semibold text-gray-800 text-lg sm:text-xl mb-1 font-[pacifico] truncate",
  watchDesc: "text-gray-600 text-sm mb-3 line-clamp-2 h-10",
  
  // Price and Controls
  priceAndControls: "flex items-center justify-between",
  price: "text-lg font-semibold text-gray-600",
  
  // Quantity Controls
  quantityContainer: "flex items-center gap-3 bg-gray-100 rounded-full px-1 py-1",
  quantityButton: "p-1 rounded-full cursor-pointer transition",
  quantityIcon: "size-4 xl:size-5 lg:size-3",
  quantityCount: "px-3 lg:px-1 xl:px-3 text-sm font-medium w-5 text-center",
  
  // Add Button
  addButton: "flex items-center cursor-pointer bg-gray-300 gap-1 hover:bg-gradient-to-r from-gray-300 to-gray-500 text-black px-3 py-1.5 rounded-xl transition-all duration-200 text-sm"
};

// Update in src/assets/dummyStyles.js

export const contactPageStyles = {
  // Page layout
  pageContainer: "min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12",
  innerContainer: "max-w-7xl mx-auto",
  
  // Header section
  pageHeader: "text-center mb-8 sm:mb-10 md:mb-10",
  pageTitle: "text-3xl sm:text-4xl md:text-5xl font-medium",
  pageSubtitle: "mt-2 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base",
  
  // Main grid
  mainGrid: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-8 items-start",
  
  // Left column - Form
  leftColumn: "lg:col-span-7 order-1 lg:order-1",
  formCard: "bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 md:p-8 lg:p-8",
  form: "space-y-5",
  inputGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  
  // Input styles
  inputLabel: "text-sm text-gray-600",
  requiredStar: "text-red-500",
  inputContainer: "mt-2 relative",
  inputIconContainer: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
  inputIcon: "w-5 h-5",
  inputBase: "w-full rounded-xl border px-4 py-3 pl-12 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition",
  inputNormal: "border-gray-200",
  inputError: "border-rose-400",
  errorMessage: "text-rose-500 text-xs mt-1 flex items-center gap-2",
  errorIcon: "w-3 h-3",
  
  // Textarea
  textareaContainer: "mt-2 w-full rounded-xl border px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition",
  
  // Form buttons
  buttonsContainer: "flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4",
  submitButton: "inline-flex items-center gap-3 bg-gradient-to-r from-gray-300 to-gray-500 text-white px-5 sm:px-6 py-3 rounded-full shadow hover:scale-[1.02] cursor-pointer transition-transform disabled:opacity-60",
  submitIcon: "w-4 h-4",
  submitText: "font-medium",
  clearButton: "inline-flex items-center cursor-pointer gap-2 border border-gray-200 px-4 py-3 rounded-xl text-sm hover:bg-gray-50 transition-colors",
  
  // Right column
  rightColumn: "lg:col-span-5 order-2 lg:order-2",
  rightColumnGrid: "grid grid-cols-1 gap-4 items-start",
  
  // Creative card
  creativeCardBase: "rounded-2xl p-4 border border-gray-100 bg-gradient-to-r shadow-lg",
  creativeCardIconContainer: "p-3 rounded-lg bg-white/90 backdrop-blur",
  creativeCardIcon: "w-6 h-6",
  creativeCardTitle: "font-semibold",
  creativeCardSubtitle: "text-sm text-gray-600 mt-2",
  creativeCardButtonBase: "inline-flex bg-gradient-to-br from-gray-300 to-gray-400 items-center gap-2 px-3 py-2 rounded-lg text-black text-sm font-medium shadow-sm",
  creativeCardButtonText: "text-sm font-medium",
  
  // Toast
  toastBase: "fixed left-1/2 -translate-x-1/2 bottom-8 z-50 px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-lg",
  toastIcon: "w-4 h-4",
  toastError: "bg-rose-500 text-white",
  toastSuccess: "bg-black text-white",
  
  // Accent backgrounds for creative cards
  accentAmber: "from-gray-300 to-gray-400",
  accentIndigo: "from-indigo-50 to-cyan-50",
  
  // Button accent classes
  buttonAmber: "bg-amber-50 text-amber-700",
  buttonIndigo: "bg-indigo-600 text-white",
};

// Update in src/assets/dummyStyles.js

export const categoriesHomeStyles = {
  // Layout
  section: "min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4",
  container: "max-w-7xl mx-auto",
  
  // Header
  header: "text-center mb-12",
  h1: "font-light text-gray-900 mb-4 leading-tight",
  h1SpanRegular: "inline",
  h1SpanAccent: "text-amber-600 ml-3 font-medium",
  underline: "w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full",
  subtext: "text-gray-600 max-w-2xl mx-auto text-base md:text-lg",
  
  // Grid
  grid: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8",
  
  // Cards
  cardLink: "group block focus:outline-none",
  cardWrapper: "relative overflow-hidden rounded-xl border transition-shadow duration-300 bg-white shadow-sm hover:shadow-lg focus:shadow-lg border-gray-200",
  imageContainer: "w-full aspect-square bg-gray-50 flex items-center justify-center overflow-hidden",
  image: "w-full h-full object-cover transform transition-transform duration-500",
  
  // Card content
  cardContent: "p-3 md:p-4 text-center",
  cardTitleBase: "text-sm md:text-base font-medium truncate transition-colors duration-300",
  cardTitleHover: "text-amber-600",
  cardTitleNormal: "text-gray-800",
  cardTagline: "text-xs text-gray-500 mt-1 hidden md:block",
  
  // Focus ring
  focusRing: "absolute inset-0 pointer-events-none ring-0 focus:ring-4 focus:ring-amber-200",
  
  // Inline styles
  h1FontSize: { fontSize: "clamp(1.6rem, 3.8vw, 2.75rem)" },
  playfairFont: { fontFamily: "'Playfair Display', serif" }
};

// Update in src/assets/dummyStyles.js

export const signUpStyles = {
  // Main container
  pageContainer: "min-h-screen bg-gradient-to-b from-white to-gray-50 flex pt-20 items-center justify-center p-6",
  pageFontStyle: { fontFamily: "'Poppins', sans-serif" },
  
  // Back button
  backButton: "absolute top-6 left-6 cursor-pointer z-30 bg-gradient-to-br from-gray-200 to-gray-400 backdrop-blur-sm rounded-full p-2 shadow-sm flex items-center justify-center transition-transform transform",
  backIcon: "h-5 w-5 text-gray-700",
  backText: "ml-1 font-[pacifico]",
  
  // Form container
  formContainer: "w-full max-w-md",
  card: "bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg px-8 py-10 relative overflow-hidden",
  
  // Decorative elements
  decorativeCircle: "absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full opacity-80 filter blur-sm",
  
  // Headings
  title: "text-2xl font-semibold text-gray-800 text-center mb-2",
  titleFontStyle: { fontFamily: "'Playfair Display', serif" },
  subtitle: "text-center text-sm text-gray-500 font-[pacifico] mb-6",
  
  // Form
  form: "space-y-4",
  label: "text-sm text-gray-600 block",
  
  // Input fields
  inputContainer: "relative",
  inputIconContainer: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
  inputIcon: "h-5 w-5 text-gray-400",
  inputField: "w-full pl-10 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-transparent transition",
  passwordInputField: "w-full pl-10 pr-10 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-transparent transition",
  
  // Password toggle
  passwordToggleButton: "absolute inset-y-0 right-0 cursor-pointer pr-3 flex items-center",
  passwordToggleIcon: "h-5 w-5 text-gray-400",
  
  // Remember me checkbox
  checkboxContainer: "flex items-center justify-between",
  checkboxLabel: "flex cursor-pointer items-center text-sm select-none",
  checkboxInput: "h-4 w-4 text-teal-500 border-gray-300 rounded focus:ring-gray-400",
  checkboxText: "ml-2 text-gray-700",
  
  // Submit button
  submitButton: "w-full py-3 rounded-full font-[pacifico] cursor-pointer bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900 font-medium shadow-md text-xl hover:-translate-y-0.5 transition-transform",
  submitButtonDisabled: "opacity-60 cursor-not-allowed",
  
  // Bottom link
  bottomContainer: "mt-4 text-center",
  bottomText: "text-sm text-gray-500",
  loginLink: "text-sm text-black font-medium"
};

// Update in src/assets/dummyStyles.js

export const loginPageStyles = {
  // Page layout
  pageContainer: "relative min-h-screen font-sans",
  toastContainer: "", // Empty since ToastContainer handles its own styles
  
  // Main content
  mainContent: "relative z-10 flex justify-center items-center min-h-screen p-4",
  
  // Back button
  backButton: "absolute top-6 cursor-pointer left-6 z-20 bg-gradient-to-r from-gray-300 to-gray-400 backdrop-blur-sm rounded-full p-2 shadow-md flex items-center justify-center transition-transform transform hover:-translate-y-0.5",
  backIcon: "h-5 w-5 text-gray-800",
  backButtonText: "ml-1",
  
  // Login card
  loginCard: "w-full max-w-md p-8 rounded-2xl bg-white shadow-xl transform transition-all duration-300 hover:shadow-2xl relative overflow-hidden",
  
  // Decorative elements
  decorativeTopLeft: "absolute -top-10 -left-10 w-20 h-20 bg-black rounded-full opacity-50",
  decorativeBottomRight: "absolute -bottom-10 -right-10 w-24 h-24 bg-gray-400 rounded-full opacity-50",
  
  // Card content
  cardTitle: "text-3xl font-semibold text-center text-gray-800 mb-2",
  cardSubtitle: "text-center text-gray-500 mb-8",
  
  // Form
  form: "",
  
  // Form fields
  formField: "mb-5",
  formLabel: "block text-gray-600 text-sm font-medium mb-2",
  inputContainer: "relative",
  inputIconContainer: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
  inputIcon: "h-5 w-5 text-gray-400",
  
  // Input styles
  inputBase: "w-full pl-10 p-3 text-gray-700 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200",
  passwordInputBase: "w-full pl-10 pr-10 p-3 text-gray-700 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200",
  
  // Password toggle
  passwordToggle: "absolute inset-y-0 right-0 pr-3 flex items-center",
  passwordToggleIcon: "h-5 w-5 text-gray-400",
  
  // Checkbox/Remember me
  rememberMeContainer: "flex items-center mb-6",
  checkboxContainer: "flex items-center h-5",
  checkbox: "h-4 w-4 text-teal-500 border-gray-300 rounded focus:ring-teal-400",
  checkboxLabelContainer: "ml-3 text-sm",
  checkboxLabel: "font-medium cursor-pointer text-gray-700",
  requiredStar: "text-red-500",
  
  // Submit button
  submitButton: "w-full py-3 px-4 cursor-pointer font-[pacifico] text-black bg-gradient-to-r from-gray-300 to-gray-400 rounded-full shadow-md text-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-all duration-300 transform hover:-translate-y-1",
  submitButtonDisabled: "opacity-60 cursor-not-allowed",
  
  // Sign up link
  signupContainer: "mt-4 text-center",
  signupText: "text-sm text-gray-500",
  signupLink: "text-sm text-black font-medium",
  
  // Inline styles
  playfairFontStyle: { fontFamily: "'Playfair Display', serif" }
};

// Add to src/assets/dummyStyles.js

export const ordersPageStyles = {
  // Page layout
  pageContainer: "min-h-screen mt-12 py-8 px-4 sm:px-6 lg:px-8",
  innerContainer: "max-w-6xl mx-auto font-sans",
  
  // Header
  headerContainer: "flex items-center justify-between mb-6",
  titleContainer: "text-3xl font-bold text-gray-800 flex items-center gap-2",
  titleIcon: "text-gray-600",
  refreshButton: "px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium",
  
  // Loading and error states
  loadingText: "text-gray-600",
  errorText: "text-red-600",
  
  // Empty state
  emptyStateContainer: "bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center",
  emptyStateText: "text-gray-600",
  
  // Orders container
  ordersContainer: "space-y-8",
  
  // Individual order card
  orderCard: "bg-white rounded-xl shadow-md p-6 border border-gray-100",
  
  // Order header
  orderHeader: "flex flex-col md:flex-row md:items-center md:justify-between mb-6",
  orderTitle: "text-xl font-semibold text-gray-800",
  orderDateContainer: "text-sm text-gray-500 flex items-center gap-1",
  orderDateIcon: "size-5",
  
  // Order status and actions
  statusAndActions: "flex items-center gap-3 mt-4 md:mt-0",
  
  // Status badges
  statusBadgeBase: "inline-block px-3 py-1 text-sm rounded-full",
  statusPending: "bg-yellow-100 text-yellow-800",
  statusCompleted: "bg-green-100 text-green-800",
  statusCancelled: "bg-red-300 text-gray-700",
  statusProcessing: "bg-blue-100 text-blue-800",
  statusFailed: "bg-red-100 text-red-800",
  statusRefunded: "bg-purple-100 text-purple-800",
  statusDefault: "bg-gray-200 text-gray-700",
  
  // Action buttons
  toggleButton: "flex items-center cursor-pointer gap-1 px-1 md:px-2 lg:px-3 xl:px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full xl:text-sm text-xs whitespace-nowrap font-medium text-gray-700 transition",
  toggleIcon: "size-5",
  cancelButtonBase: "px-2 md:px-3 lg:px-4 xl:px-5 py-1.5 rounded-full cursor-pointer text-sm font-medium",
  cancelButtonEnabled: "bg-red-50 text-red-700 hover:bg-red-100",
  cancelButtonDisabled: "bg-gray-100 text-gray-400 cursor-not-allowed",
  
  // Expanded details
  itemsGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6",
  
  // Item card
  itemCard: "flex items-center gap-4 p-4 rounded-lg",
  itemImage: "w-20 h-20 object-contain",
  itemNoImage: "w-20 h-20 rounded-md bg-gray-100 flex items-center justify-center text-sm text-gray-500",
  itemDetails: "flex-1",
  itemName: "font-medium text-gray-800",
  itemPrice: "text-gray-600",
  itemQuantity: "text-sm text-gray-500",
  
  // Delivery details
  deliveryDetailsContainer: "bg-gray-50 rounded-lg p-4 mb-6",
  deliveryTitle: "text-lg font-semibold text-gray-700 mb-3 flex items-center gap-1",
  deliveryIcon: "size-5",
  deliveryGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700",
  deliveryLabel: "font-medium",
  
  // Total section
  totalContainer: "flex justify-between items-center border-t pt-4",
  totalLabel: "font-semibold text-gray-800",
  totalAmount: "text-lg font-bold text-gray-900"
};