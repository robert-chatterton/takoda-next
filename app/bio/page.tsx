import { IconLink } from '../components/IconLink';

export default function BioPage() {
  return (
    <div className='max-w-3xl mx-auto px-6 py-24'>
      <h1 className='text-5xl font-bold mb-8 tracking-tight'>Biography</h1>

      <section className='flex flex-col mb-12 gap-4 indent-0'>
        <h2 className='text-xl font-semibold indent-0'>About</h2>
        <p className='text-neutral-400 leading-relaxed'>
          Takoda&apos;s love of music began as a young child listening to a
          variety genres including anything from classic country to grunge to
          80&apos;s rap and dance music. He began exploring playing various
          instruments as a homeschooler with a ukulele but didn&apos;t get
          serious about it until middle school when he learned electric bass
          during a rock band class. Acoustic guitar was the natural progression
          and he quickly realized that he had a talent for it. Being a shy kid
          he wasn&apos;t comfortable singing in public but after he joined
          chorus in middle school he honed his singing skills and tried his hand
          at songwriting. He wrote his first song in middle school about the
          challenges of being noticed by someone who doesn&apos;t see you.
        </p>
        <p className='text-neutral-400 leading-relaxed'>
          Once he began practicing the guitar consistently in 2020 his father
          gifted him a little Martin guitar and loop pedal. Takoda had just
          discovered Ed Sheeran and the COVID-19 Pandemic had everyone
          sheltering in place. Takoda took advantage of this time to pour his
          soul into practicing guitar and learning how to use the looper to
          create a band sound to support his vocals in the songs he was
          learning. Once his closest brother left for college in 2021 Takoda
          spent most of his free time singing and playing guitar. He continued
          to work on songwriting and wrote his first looping song at 14.
        </p>
        <p className='text-neutral-400 leading-relaxed'>
          When he began high school he tried to start a band but finding time
          for everyone to get together proved difficult so he returned to live
          looping and focused on honing his skills and writing songs. Returning
          to looping meant Takoda needed flat bottomed shoes in order to keep
          his looping smooth and he expressed his interest in trying a pair of
          Converse. Since they didn&apos;t know if he would like them, his
          parents purchased the least expensive pair of Converse they could find
          and they happened to be red. In the summer of 2023 Takoda attended
          several open mics and people were quickly impressed and began
          referring to him as “the kid with the red shoes”. One time he went
          without them and someone asked, “where are the red shoes?”; he has
          worn them to every gig since.
        </p>
        <p className='text-neutral-400 leading-relaxed'>
          Takoda layers acoustic and electric guitar, piano and he adds his
          fiery vocals and layered harmonies to create the sound of a
          multi-instrumental band with multiple singers. His music is always
          live with nothing pre-recorded. His live shows include a curated
          selection of covers and originals, both live looped and acoustic.
          Takoda&apos;s original music is a thoughtful blend of pop, rock and
          folk with honest lyrics and his impressive live performances are
          celebrated technical musical skills.
        </p>
        <p className='text-neutral-400 leading-relaxed'>
          He released his first live recorded original music in early 2025 and
          expanded into studio recording in November 2025 at This Sounds Good
          studio in southern Maine with Jonathan Wyman producing, mixing and
          recording and mastering by Adam Ayan at Ayan Mastering. Five studio
          produced singles and an EP will be released in 2026. His original
          music can be found on all major streaming platforms.
        </p>
      </section>

      <section className='flex flex-col mb-12 gap-4 indent-0'>
        <h2 className='text-xl font-semibold indent-0'>Quotes</h2>
        <div>
          {[
            {
              outlet:
                'Paul Dupuis, Owner / General Manager / Morning Show Co-host @ Star 97.7 Radio in Ellsworth, Maine',
              quote:
                'Takoda is far beyond his years with songwriting and connecting with his audience.  We love having him perform on Star 97.7.',
            },
            {
              outlet:
                'Scomo, Program Director and Music Director @ WKIT in Bangor, Maine',
              quote:
                "Takoda Dionne is one of Maine's most promising songwriters. He writes with a maturity and originality that belie his years. Takoda has that rare combination of songwriting talent, stage presence and work ethic that should lead to some very good things.",
            },
            {
              outlet:
                'Mike Dow, Operations Director @ Star 97.7 Radio in Ellsworth, Maine',
              quote:
                "Takoda is a true artist with a constantly expanding catalog of songs that stay with you long after hearing them for the first time. Here at Star 97.7, we've been blown away by his endless creativity, his energy, and his personality. Takoda has become an integral part of Maine's vibrant music scene because he's the real deal.",
            },
            {
              outlet: 'Steve Peer, Drummer and Entrepreneur',
              quote:
                'Takoda is unstoppable. His raw talent is revealed as he fearlessly experiments with sound and lyrics.  With a gift for melody, his ability to write hooks and an accessible chorus, pair well with his unplugged or electronic delivery.  His musical dexterity, technical coordination, stamina, social commentary, metaphor and rhyme make for an exhilarating live show and equally as bold, studio recordings.  Takoda is a genuine talent that we will all be watching.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className='pb-6 border-b border-neutral-900 last:border-0 last:pb-0'
            >
              <p className='text-neutral-300 mt-1 italic'>
                &quot;{item.quote}&quot;
              </p>
              <span className='text-neutral-500 text-sm'>{item.outlet}</span>
            </div>
          ))}
        </div>
      </section>

      <section className='flex flex-col mb-12 gap-4 indent-0'>
        <h2 className='text-xl font-semibold indent-0'>
          Interviews & Media Appearances
        </h2>
        <ul className='ml-6 list-disc flex flex-col gap-4'>
          <li>
            <IconLink
              title={'MDI Islander Feature'}
              newPage
              href={
                'https://www.mdislander.com/lifestyle/arts/rhythms-and-red-converse-takoda-dionnes-musical-success/article_c7f8ce9c-56a4-447e-a64e-4513cb37550c.html'
              }
            />
          </li>
          <li>
            <IconLink
              title={'My interview on The Nite Show Performance Series'}
              newPage
              href={'https://www.youtube.com/watch?v=Do_yTNvO4q0'}
            />
          </li>
          <li>
            <IconLink
              title={'My interview on Northeast Corner on MPR'}
              newPage
              href={
                'https://www.mainepublic.org/northeast-corner/2026-02-22/northeast-corner-february-22nd-2026'
              }
            />
          </li>
        </ul>
      </section>

      <section className='flex flex-col mb-12 gap-4 indent-0'>
        <h2 className='text-xl font-semibold indent-0'>Performances</h2>
        <ul className='ml-6 list-disc flex flex-col gap-4'>
          <li>
            <IconLink
              title={'Performing "Back To" on The Nite Show Performance Series'}
              newPage
              href={'https://www.youtube.com/watch?v=T_6N4c1uRVA'}
            />
          </li>
          <li>
            <IconLink
              title={
                'Performing a cover of "The Scientist" by Coldplay on The Nite Show Performance Series'
              }
              newPage
              href={'https://www.youtube.com/watch?v=M3Cdff2G5lg'}
            />
          </li>
          <li>
            <IconLink
              title={'Live performance on Star 97.7 Radio'}
              newPage
              href={
                'https://star977fm.com/index.php/star-morning-show/morning-music-showcase/'
              }
            />
          </li>
        </ul>
      </section>
    </div>
  );
}
