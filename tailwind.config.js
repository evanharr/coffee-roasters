/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,jpg,png}',
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './views/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkCyan: "hsl(179, 81%, 29%)",
        darkGreyBlue: "hsl(215, 19%, 25%)",
        lightCream: "hsl(43, 78%, 98%)",
        Grey: "hsl(215, 5%, 54%)",
        paleOrange: "hsl(25, 94%, 86%)",
        white: '#fff',
      },
      fontFamily: {
        barlow: ['"Barlow", "sans-serif"'],
        fraunces: ["Fraunces", "serif"],
        inter: ["Inter", "sans-serif"],
      },
     backgroundImage: {
        'desktopHero': "url('/assets/home/desktop/image-hero-coffeepress.jpg')",
        'tabletHero' : "url('/assets/home/tablet/image-hero-coffeepress.jpg')",
        'mobileHero' : "url('/assets/home/mobile/image-hero-coffeepress.jpg')",
        'desktopAboutHero' : "url(/assets/about/desktop/image-hero-whitecup.jpg)",
        'tabletAboutHero' : "url(/assets/about/tablet/image-hero-whitecup.jpg)",
        'mobileAboutHero' : "url(/assets/about/mobile/image-hero-whitecup.jpg)",
        'desktopQuality' : "url(/assets/about/desktop/bg-quality.png)",
        'tabletQuality' : "url(/assets/about/tablet/bg-quality.png)",
        'mobileQuality' : "url(/assets/about/mobile/bg-quality.png)",
        'imageQuality' : "url(/assets/about/desktop/bg-quality.png)",
        'desktopPlanHero' : "url(/assets/plan/desktop/image-hero-blackcup.jpg)",
        'tabletPlanHero' : "url(/assets/plan/tablet/image-hero-blackcup.jpg)",
        'mobilePlanHero' : "url(/assets/plan/mobile/image-hero-blackcup.jpg)"
     },
     screens: {
      'sm' : '320px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1440px',
      
     },

    },
  },
  plugins: [],
}

