// ScrollGallery.jsx
import * as motion from "motion/react-client";

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
];

const cardVariants = {
  offscreen: { y: 300 },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

function Card({ photoUrl, label }) {
  return (
    <motion.div
      className="group relative flex max-w-[280px] flex-1 cursor-pointer items-center justify-center overflow-hidden pt-5 transition hover:-translate-y-2"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
      variants={cardVariants}
    >
      <motion.div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
        <img
          src={photoUrl}
          alt={label}
          draggable={false}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 opacity-0 transition hover:opacity-100">
          <span className="text-lg font-semibold text-white drop-shadow">
            {label}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ScrollGallery() {
  return (
    <>
      <section className="mx-auto my-3 text-center">
        <h2 className="text-2xl font-bold">Fruit Gallery</h2>
        <div className="mx-auto flex w-[90%] max-w-6xl flex-wrap justify-center gap-6 pb-24">
          {photos.map(({ url, label }) => (
            <Card photoUrl={url} label={label} key={url} />
          ))}
        </div>
      </section>
    </>
  );
}
