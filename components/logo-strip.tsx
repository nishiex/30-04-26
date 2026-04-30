"use client"

const logos = [
  { name: "Sparkle", src: "https://cdn-ilegfjm.nitrocdn.com/kDlhiaoQNYImjijUkaQuvAdvaQsammmp/assets/images/optimized/rev-819ba67/www.acepeak.com/wp-content/uploads/2025/12/1-logo-sparkle.webp" },
  { name: "Telin", src: "https://cdn-ilegfjm.nitrocdn.com/kDlhiaoQNYImjijUkaQuvAdvaQsammmp/assets/images/optimized/rev-819ba67/www.acepeak.com/wp-content/uploads/2025/12/1-logo-telin.webp" },
  { name: "Airtel", src: "https://cdn-ilegfjm.nitrocdn.com/kDlhiaoQNYImjijUkaQuvAdvaQsammmp/assets/images/optimized/rev-819ba67/www.acepeak.com/wp-content/uploads/2025/12/1-logo-airtel.webp" },
  { name: "HKBN", src: "https://cdn-ilegfjm.nitrocdn.com/kDlhiaoQNYImjijUkaQuvAdvaQsammmp/assets/images/optimized/rev-819ba67/www.acepeak.com/wp-content/uploads/2025/12/1-logo-hkbn.webp" },
  { name: "China Mobile", src: "https://cdn-ilegfjm.nitrocdn.com/kDlhiaoQNYImjijUkaQuvAdvaQsammmp/assets/images/optimized/rev-819ba67/www.acepeak.com/wp-content/uploads/2025/12/1-logo-china-mobile.webp" },
  { name: "Twilio", src: "https://cdn-ilegfjm.nitrocdn.com/kDlhiaoQNYImjijUkaQuvAdvaQsammmp/assets/images/optimized/rev-819ba67/www.acepeak.com/wp-content/uploads/2025/12/1-logo-twilio.webp" },
  { name: "T-Mobile", src: "https://cdn-ilegfjm.nitrocdn.com/kDlhiaoQNYImjijUkaQuvAdvaQsammmp/assets/images/optimized/rev-819ba67/www.acepeak.com/wp-content/uploads/2025/12/1-log-t-mobile.webp" },
  { name: "Infobip", src: "https://cdn-ilegfjm.nitrocdn.com/kDlhiaoQNYImjijUkaQuvAdvaQsammmp/assets/images/optimized/rev-819ba67/www.acepeak.com/wp-content/uploads/2025/12/1-logo-infobip.webp" },
]

const track = [...logos, ...logos]

export function LogoStrip() {
  return (
    <section
      className="bg-white py-6 overflow-hidden 
      [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <div className="flex w-max gap-12 animate-logo-scroll">
        {track.map((logo, i) => (
          <div key={i} className="flex-shrink-0">
            <img
              src={logo.src}
              alt={logo.name}
              style={{
                width: "110px",
                height: "40px", // 🔥 important (fixed height = smoother loop)
                objectFit: "contain",
                filter: "grayscale(100%) brightness(0.4)",
              }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes logo-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-logo-scroll {
          animation: logo-scroll 25s linear infinite;
          will-change: transform; /* 🔥 smoother performance */
        }

        .animate-logo-scroll:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-logo-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}