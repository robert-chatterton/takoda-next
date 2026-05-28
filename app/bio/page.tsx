export default function BioPage() {
  return (
    <div className='max-w-3xl mx-auto px-6 py-24'>
      <h1 className='text-5xl font-bold mb-8 tracking-tight'>Biography</h1>

      <section className='mb-12'>
        <h2 className='text-xl font-semibold mb-4'>About</h2>
        <p className='text-neutral-400 leading-relaxed'>
          ALL PLACEHOLDER INFORMATION
        </p>
        <p className='text-neutral-400 leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem odit, culpa aliquid qui laudantium inventore! Perspiciatis error perferendis aliquam laudantium libero totam eius vitae, hic veritatis deserunt, rerum quam?
        </p>
        <p className='text-neutral-400 leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem odit, culpa aliquid qui laudantium inventore! Perspiciatis error perferendis aliquam laudantium libero totam eius vitae, hic veritatis deserunt, rerum quam?
        </p>
      </section>

      <section className='mb-12'>
        <h2 className='text-xl font-semibold mb-4'>Musical Influences</h2>
        <p className='text-neutral-400 leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error vitae recusandae doloribus, perspiciatis iure nisi. Reprehenderit libero earum doloribus impedit accusamus consequatur, distinctio porro, amet corporis qui molestiae harum.
        </p>
      </section>

      <section className='mb-12'>
        <h2 className='text-xl font-semibold mb-4'>Press & Media</h2>
        <div className='space-y-4'>
          {[
            { outlet: 'Pitchfork', quote: 'A voice that demands to be heard.' },
            {
              outlet: 'NPR',
              quote: 'Stunning songwriting and unforgettable melodies.',
            },
            {
              outlet: 'Billboard',
              quote: 'Rising star with a fresh perspective.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className='pb-6 border-b border-neutral-900 last:border-0'
            >
              <span className='text-neutral-500 text-sm'>{item.outlet}</span>
              <p className='text-neutral-300 mt-1 italic'>
                &quot;{item.quote}&quot;
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
