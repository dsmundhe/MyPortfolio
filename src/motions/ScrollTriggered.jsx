import * as motion from "motion/react-client"

const photos = [
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
    label: "Fresh Tomatoes",
  },
  {
    url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
    label: "Sweet Oranges",
  },
  {
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=500&q=80",
    label: "Lemons",
  },
  {
    url: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=500&q=80",
    label: "Pears",
  },
  {
    url: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=500&q=80",
    label: "Green Apples",
  },
  {
    url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=500&q=80",
    label: "Blueberries",
  },
  {
    url: "https://images.unsplash.com/photo-1444628838545-ac4016a54118?auto=format&fit=crop&w=500&q=80",
    label: "Eggplants",
  },
  {
    url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80",
    label: "Grapes",
  },
]

export default function ScrollTriggered() {
  return (
    <>
      <style>{`
        .container {
          margin: 10px auto;
          max-width: 1200px;
          padding-bottom: 100px;
          width: 90%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
        }
        .card-container {
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          padding-top: 20px;
          margin-bottom: -120px;
          flex: 1 1 280px;
          max-width: 280px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .card-container:hover {
          transform: translateY(-10px);
        }
        .card {
          font-size: 0;
          width: 100%;
          height: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 20px;
          background: #f5f5f5;
          box-shadow:
            0 0 1px hsl(0deg 0% 0% / 0.075),
            0 0 2px hsl(0deg 0% 0% / 0.075),
            0 0 4px hsl(0deg 0% 0% / 0.075),
            0 0 8px hsl(0deg 0% 0% / 0.075),
            0 0 16px hsl(0deg 0% 0% / 0.075);
          transform-origin: 10% 60%;
          overflow: hidden;
          position: relative;
        }
        .splash {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          clip-path: path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z");
          z-index: 0;
        }
        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          user-select: none;
          pointer-events: none;
          display: block;
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
        }
        .card-container:hover img {
          transform: scale(1.05);
        }
        .hover-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 2;
          text-shadow: 0 0 10px rgba(0,0,0,0.7);
          white-space: nowrap;
        }
        .card-container:hover .hover-text {
          opacity: 1;
        }

        @media (max-width: 900px) {
          .container {
            max-width: 90vw;
            gap: 20px;
          }
          .card-container {
            flex: 1 1 45%;
            max-width: 45%;
            margin-bottom: -100px;
          }
          .card {
            height: 300px;
          }
        }

        @media (max-width: 600px) {
          .card-container {
            flex: 1 1 90%;
            max-width: 90%;
            margin-bottom: -80px;
          }
          .card {
            height: 250px;
          }
        }
      `}</style>

      <div className="container">
        {photos.map(({ url, label }) => (
          <Card photoUrl={url} label={label} key={url} />
        ))}
      </div>
    </>
  )
}

function Card({ photoUrl, label }) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
      variants={cardVariants}
    >
      <div className="splash" />
      <motion.div className="card">
        <img src={photoUrl} alt={label} draggable={false} />
        <div className="hover-text">{label}</div>
      </motion.div>
    </motion.div>
  )
}

const cardVariants = {
  offscreen: { y: 300 },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
}
